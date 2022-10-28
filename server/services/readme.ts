import api from 'api';
import {logger} from './logger';
import {ArticleCategory, ArticlePage, ArticlePreview} from '../schemas/Article.schema';
import {createRedisKey, getValueFromRedis, keyExistsInRedis, RedisNamespace, setKeyInRedis} from './redis';
import dayjs from 'dayjs';

const sdk = api('@developers/v2.0#nysezql0wwo236');
sdk.auth(process.env.README_API_KEY);

export async function getAllReadMeCategories(): Promise<ArticleCategory[]> {
	const redisKey = createRedisKey(RedisNamespace.README_CATEGORIES);
	return await fetchReadMeData(redisKey, async () => {
		const cats = await sdk.getCategories({perPage: 100, page: 1});
		cats.sort((a, b) => a.order - b.order);
		return cats;
	});
}

export async function getAllReadMeCategoriesWithArticles(): Promise<ArticleCategory[]> {
	const redisKey = createRedisKey(RedisNamespace.README_CATEGORIES_WITH_ARTICLES);
	return await fetchReadMeData(redisKey, async () => {
		const allCategories = await getAllReadMeCategories();

		const categories: ArticleCategory[] = [];
		const categoryPromises: Promise<ArticlePreview[]>[] = [];

		for (const category of allCategories) {
			if (!category.reference) {
				continue;
			}

			categories.push(category);
			categoryPromises.push(getAllReadMeArticlesForCategory(category.slug));
		}

		const categoryArticles = await Promise.all(categoryPromises);

		for (let i = 0; i < categoryArticles.length; i++) {
			const categorySlug = categories[i].slug;

			const articles = categoryArticles[i];
			for (const art of articles) {
				const artSlug = art.slug;
				art.path = `/${categorySlug}/${artSlug}`;

				for (const child of art?.children || []) {
					child.path = `/${categorySlug}/${artSlug}/${child.slug}`;
				}

				art.children.sort((a, b) => a.order - b.order);
			}

			articles.sort((a, b) => a.order - b.order);
			categories[i].children = articles;
		}

		return categories;
	});
}

export async function getReadMeCategory(slug: string): Promise<ArticleCategory[]> {
	const redisKey = createRedisKey(RedisNamespace.README_CATEGORY, slug);
	return await fetchReadMeData(redisKey, async () => sdk.getCategory({slug}));
}

export async function getAllReadMeArticlesForCategory(slug: string): Promise<ArticlePreview[]> {
	const redisKey = createRedisKey(RedisNamespace.README_ARTICLES_IN_CATEGORY, slug);
	return await fetchReadMeData(redisKey, async () => sdk.getCategoryDocs({slug, perPage: 100, page: 1}));
}

export async function getReadMeArticle(slug: string): Promise<ArticlePage> {
	const redisKey = createRedisKey(RedisNamespace.README_ARTICLE, slug);
	return await fetchReadMeData(redisKey, async () => sdk.getDoc({slug}));
}

async function fetchReadMeData<T>(redisKey, fetchData: () => Promise<T>): Promise<T> {
	const exists = await keyExistsInRedis(redisKey);
	const shouldUpdate = await shouldUpdateCache(redisKey);

	const cacheTtl = 60 * 60 * 5; // 5 hours

	if (exists) {
		const cachedResult = await getValueFromRedis(redisKey);
		if (shouldUpdate) {
			fetchData().then((result) => {
				setKeyInRedis(redisKey, JSON.stringify(result), cacheTtl);
			});
		}
		return JSON.parse(cachedResult);
	}
	try {
		const data = await fetchData();
		await setKeyInRedis(redisKey, JSON.stringify(data), cacheTtl);

		return data;
	} catch (e) {
		logger.error('Could not fetch ReadMe data', {
			redisKey,
			error: e,
		});
		return null;
	}
}

export async function fetchReadMeDataFromCache<T>(redisKey): Promise<T> {
	const exists = await keyExistsInRedis(redisKey);

	if (exists) {
		const cachedResult = await getValueFromRedis(redisKey);
		return JSON.parse(cachedResult);
	}

	return null;
}

async function shouldUpdateCache(redisKey): Promise<boolean> {
	const redisVal = await getValueFromRedis(redisKey);
	if (!redisVal) {
		return false;
	}

	const createUnix = parseInt(redisVal);
	const nowDate = dayjs().utc().toDate();
	const targetDate = dayjs.unix(createUnix).add(1, 'hour').toDate();

	return targetDate < nowDate;
}
