import {CronJob} from 'cron';
import {matchPlayersInLobby} from '@/server/match/pair/pair_logic';
import {logger} from '@/server/services/logger';
import {initSiteMapGeneration} from '@/server/services/sitemap';

export function initCronJobs() {
	initMatchPairingCronJob();
	initSiteMapGenerationCronJob();
}

function initMatchPairingCronJob() {
	// Every minute
	const job = new CronJob(
		'*/3 * * * * *',
		async () => {
			try {
				await matchPlayersInLobby();
			} catch (e) {
				logger.error('Match pairing cron job failed', {
					error: e,
				});
			}
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
			try {
				logger.info('Requesting sitemap to be updated');
				await initSiteMapGeneration();
			} catch (e) {
				logger.error('Sitemap generation cron job failed', {
					error: e,
				});
			}
		},
		null,
		true,
		'America/Los_Angeles'
	);
	logger.debug('Initiated dev cron job for generating sitemap.', {
		running: job.running,
	});
}
