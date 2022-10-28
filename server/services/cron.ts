import {CronJob} from 'cron';
import {logger} from './logger';
import {matchPlayersInLobby} from '../match/pair/pair_logic';
import {initSiteMapGeneration} from './sitemap';

export function initCronJobs() {
	initMatchPairingCronJob();
	initSiteMapGenerationCronJob();
}

function initMatchPairingCronJob() {
	// Every minute
	const job = new CronJob(
		'*/3 * * * * *',
		async () => {
			await matchPlayersInLobby();
		},
		null,
		true,
		'America/Los_Angeles'
	);

	logger.debug('Initiated dev cron job for match pairing.', {
		running: job.running,
	});
}

function initSiteMapGenerationCronJob() {
	// Every 2nd hour
	const job = new CronJob(
		'0 0 */2 * * *',
		async () => {
			logger.info('Requesting sitemap to be updated');
			initSiteMapGeneration();
		},
		null,
		true,
		'America/Los_Angeles'
	);
	logger.debug('Initiated dev cron job for generating sitemap.', {
		running: job.running,
	});
}
