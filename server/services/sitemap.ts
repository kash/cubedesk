import {Profile} from '../schemas/Profile.schema';
import fs from 'fs';
import {acquireRedisLock, createRedisKey, RedisNamespace} from './redis';
import {getPrisma} from '../database';
import process from 'process';
import {PageContext, routes} from '../../client/components/layout/Routes';
import {uploadObject} from './storage';
import {invalidateCloudFrontCache} from './cloudfront';
import {logger} from './logger';

const SITEMAP_REDIS_KEY = createRedisKey(RedisNamespace.SITEMAP);
const SITEMAP_SCHEMAS_DIR = __dirname + '/sitemap_schemas';
const SITEMAP_S3_PATH = 'site/sitemaps';

interface SiteMapUrl {
	location: string;
	changeFrequency?: 'hourly' | 'daily' | 'weekly' | 'monthly';
	priority?: number;
}

// TODO need some sort of worker pool cuz there are lots of sync calls

/**
 * Priorities
 * Main site pages: 0.9 - 1.0
 * Profiles: 0.7 - 0.8
 * Solves: 0.1
 */

export async function initSiteMapGeneration() {
	const isProd = process.env.ENV === 'production';
	if (!isProd) {
		logger.warn('Not updating sitemap because environment is not prod');
		return;
	}

	const startTime = Date.now();

	const lock = await acquireRedisLock(SITEMAP_REDIS_KEY, 60 * 60 * 3 * 1000);
	if (!lock) {
		logger.info('Not updating sitemap because it has already been updated. Could not acquire lock.');
		return;
	}

	logger.info('Starting sitemap generation');
	deleteLocalSiteMapSchemasFolder();
	createLocalSiteMapSchemasFolder();

	const defaultSiteMapUrl = await uploadDefaultSiteMapUrls();
	const profileSiteMapUrls = await fetchAndGenerateSiteMapForAllProfiles();

	logger.info('Finished writing default and profile sitemaps', {
		defaultSiteMapUrl,
		profileSiteMapUrlCount: profileSiteMapUrls.length,
	});

	const allSiteMapUrls = [defaultSiteMapUrl, ...profileSiteMapUrls];
	await writeSiteMapIndices(allSiteMapUrls);
	await invalidateSiteMapCache();

	deleteLocalSiteMapSchemasFolder();

	const endTime = Date.now();
	logger.info('Generated sitemap', {
		timeToGenerateSeconds: (endTime - startTime) / 1000,
	});
}

async function invalidateSiteMapCache() {
	try {
		const res = await invalidateCloudFrontCache([SITEMAP_S3_PATH + '/*']);

		logger.info('Invalidated CloudFront cache', {
			location: res.Location,
		});
	} catch (e) {
		logger.warn('Could not invalidate CloudFront cache', {
			error: e,
		});
	}
}

function createLocalSiteMapSchemasFolder() {
	if (!fs.existsSync(SITEMAP_SCHEMAS_DIR)) {
		fs.mkdirSync(SITEMAP_SCHEMAS_DIR);
	}
}

function deleteLocalSiteMapSchemasFolder() {
	if (fs.existsSync(SITEMAP_SCHEMAS_DIR)) {
		fs.rmSync(SITEMAP_SCHEMAS_DIR, {recursive: true, force: true});
	}
}

async function writeSiteMapIndices(siteMapUrls: string[]) {
	const siteMapList = siteMapUrls.map((loc) => `<sitemap><loc>${loc}</loc></sitemap>`).join('\n');

	const output = `
		<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			${siteMapList}
		</sitemapindex>
	`;

	const fileName = 'sitemap.xml';
	fs.writeFileSync(getSiteMapFilePath(fileName), output);
	const finalSiteMapUrl = await uploadSiteMapToS3(fileName);

	logger.info('Wrote final sitemap to S3', {
		siteMapUrl: finalSiteMapUrl,
	});

	return finalSiteMapUrl;
}

function getSiteMapFilePath(fileName: string) {
	return `${SITEMAP_SCHEMAS_DIR}/${fileName}`;
}

async function uploadDefaultSiteMapUrls() {
	const urls = getDefaultSiteMapUrls();
	const fileName = `sitemap_site.xml`;
	const dataToWrite = getSiteMapXmlFromSchemaUrlList(urls);
	fs.writeFileSync(getSiteMapFilePath(fileName), dataToWrite);

	return uploadSiteMapToS3(fileName);
}

async function uploadSiteMapToS3(fileName: string) {
	const fileData = fs.readFileSync(getSiteMapFilePath(fileName));

	const cdnPath = `${SITEMAP_S3_PATH}/${fileName}`;

	if (process.env.ENV === 'production') {
		await uploadObject(fileData, cdnPath, {
			ContentType: 'application/xml',
			Expires: new Date(),
		});
	}

	return `https://cdn.cubedesk.io/${cdnPath}`;
}

function getDefaultSiteMapUrls() {
	const baseUri = process.env.BASE_URI;
	const urls: SiteMapUrl[] = [];

	for (let i = 0; i < routes.length; i += 1) {
		const priority = Math.floor((1 - ((1 / routes.length) * i) / 10) * 1000) / 1000;
		const route = routes[i] as PageContext;

		if ((route as any)?.redirect) {
			continue;
		}

		if (route.admin || route.restricted || route.path.includes(':')) {
			continue;
		}

		urls.push({
			location: `${baseUri}${route.path}`,
			priority,
		});
	}

	return urls;
}

async function fetchUserProfiles(offset: number, limit: number) {
	return getPrisma().profile.findMany({
		skip: offset,
		take: limit,
		orderBy: {
			id: 'desc',
		},
		include: {
			user: true,
		},
	});
}

async function fetchAndGenerateSiteMapForAllProfiles() {
	const limit = 500;
	let offset = 0;
	let batchIndex = 0;
	let lastUserProfileBatch: Profile[] = [];
	const processedUrls = [];

	do {
		if (lastUserProfileBatch && lastUserProfileBatch.length) {
			const url = await processUserProfileBatch(batchIndex, lastUserProfileBatch);
			processedUrls.push(url);
		}

		lastUserProfileBatch = await fetchUserProfiles(offset, limit);

		offset += limit;
		batchIndex += 1;
	} while (lastUserProfileBatch.length);

	return processedUrls;
}

async function processUserProfileBatch(batchIndex: number, profiles: Profile[]) {
	const urlsToStore = [];

	for (const profile of profiles) {
		urlsToStore.push(getSchemaFromProfile(profile));
	}

	const fileName = `sitemap_${batchIndex}.xml`;
	const dataToWrite = getSiteMapXmlFromSchemaUrlList(urlsToStore);
	fs.writeFileSync(getSiteMapFilePath(fileName), dataToWrite);

	return uploadSiteMapToS3(fileName);
}

// Range 0.7 - 0.8
function getProfilePriority(profile: Profile) {
	let isActive = false;
	if (profile.user.last_solve_at) {
		const sevenDaysInMs = 7 * 60 * 60 * 24 * 1000;
		const nowTime = Date.now();

		const delta = nowTime - new Date(profile.user.last_solve_at).getTime();
		isActive = delta < sevenDaysInMs;
	}

	const conditions = {
		hasBio: !!profile.bio,
		hasPublishedSolves: !!profile?.top_solves?.length,
		hasDiscord: !!profile.discord_id,
		hasTwitch: !!profile.twitch_link,
		hasTwitter: !!profile.twitter_link,
		hasYouTube: !!profile.youtube_link,
		hasHeaderImag: !!profile.header_image_id,
		hasPfp: !!profile.pfp_image_id,
		isPro: profile.user.is_pro,
		isActive,
	};

	const totalConditions = Object.keys(conditions).length;
	let conditionsMet = 0;

	for (const val of Object.values(conditions)) {
		if (val) {
			conditionsMet += 1;
		}
	}

	const conditionMetPerc = Math.floor((conditionsMet / totalConditions / 10) * 1000) / 1000;
	return 0.7 + conditionMetPerc;
}

function getSiteMapXmlFromSchemaUrlList(urls: SiteMapUrl[]): string {
	const urlListInXml = urls.map((url) => convertSchemaUrlToXml(url)).join('\n');

	return `
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			${urlListInXml}		  
		</urlset> 
	`;
}

function convertSchemaUrlToXml(url: SiteMapUrl) {
	const location = url.location ? `<loc>${url.location}</loc>` : '';
	const priority = url.priority ? `<priority>${url.priority}</priority>` : '';
	const changeFreq = url.changeFrequency ? `<changefreq>${url.changeFrequency}</changefreq>` : '';

	return `
		<url>
			${location}
			${priority}
			${changeFreq}
		</url>
	`;
}

function getSchemaFromProfile(profile: Profile): SiteMapUrl {
	const baseUri = process.env.BASE_URI;
	const url = `${baseUri}/user/${profile.user.username}`;

	return {
		location: url,
		priority: getProfilePriority(profile),
		changeFrequency: 'weekly',
	};
}
