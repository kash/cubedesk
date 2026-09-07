import type {AdminMetricsResponse, AdminMetricsSnapshot} from '@/types/admin-metrics';
import {buildAdminMetrics} from '@/server/models/admin_metrics';
import {logger} from '@/server/services/logger';
import {createRedisKey, getRedisPubClient, RedisNamespace} from '@/server/services/redis';
import {randomUUID} from 'node:crypto';

export const METRICS_REFRESH_MS = 6 * 60 * 60 * 1000;
const SNAPSHOT_KEY = createRedisKey(RedisNamespace.ADMIN_METRICS, 'v1').key;
const LOCK_KEY = `${SNAPSHOT_KEY}:lock`;
const RETRY_KEY = `${SNAPSHOT_KEY}:retry`;
const LEASE_MS = 60_000;
let inFlight: Promise<void> | undefined;

// A stalled Redis connection must not stall the admin page. No database fallback.
async function redisCommand<T>(
	command: (redis: ReturnType<typeof getRedisPubClient>) => Promise<T>,
): Promise<T> {
	const redis = getRedisPubClient();
	if (!redis || redis.status !== 'ready') throw new Error('Metrics Redis is unavailable');
	let timer: ReturnType<typeof setTimeout> | undefined;
	try {
		return await Promise.race([
			command(redis),
			new Promise<never>((_, reject) => {
				timer = setTimeout(() => reject(new Error('Metrics Redis timed out')), 2000);
			}),
		]);
	} finally {
		clearTimeout(timer);
	}
}

async function readSnapshot(): Promise<AdminMetricsSnapshot | null> {
	const value = await redisCommand((redis) => redis.get(SNAPSHOT_KEY));
	if (!value) return null;
	try {
		const snapshot = JSON.parse(value) as AdminMetricsSnapshot;
		if (
			snapshot.version !== 1 ||
			!Number.isFinite(Date.parse(snapshot.cutoff)) ||
			!Array.isArray(snapshot.days)
		)
			return null;
		return snapshot;
	} catch {
		return null;
	}
}

function isStale(snapshot: AdminMetricsSnapshot) {
	// Match the UTC cron boundaries. A startup refresh at 01:00 must not cause
	// the 06:00 job to skip and leave that snapshot in place until noon.
	return (
		Math.floor(Date.parse(snapshot.cutoff) / METRICS_REFRESH_MS) <
		Math.floor(Date.now() / METRICS_REFRESH_MS)
	);
}

async function refresh() {
	const started = Date.now();
	const token = randomUUID();
	let acquired = false;
	let lost = false;
	let renewal: ReturnType<typeof setInterval> | undefined;
	try {
		const snapshot = await readSnapshot();
		if (snapshot && !isStale(snapshot)) return;
		if (await redisCommand((redis) => redis.exists(RETRY_KEY))) return;
		acquired =
			(await redisCommand((redis) => redis.set(LOCK_KEY, token, 'PX', LEASE_MS, 'NX'))) ===
			'OK';
		if (!acquired) return;
		const latest = await readSnapshot();
		if (latest && !isStale(latest)) return;
		// Another process may have failed just before we acquired the lock.
		if (await redisCommand((redis) => redis.exists(RETRY_KEY))) return;
		renewal = setInterval(() => {
			void redisCommand((redis) =>
				redis.eval(
					"if redis.call('get', KEYS[1]) == ARGV[1] then return redis.call('pexpire', KEYS[1], ARGV[2]) else return 0 end",
					1,
					LOCK_KEY,
					token,
					LEASE_MS,
				),
			)
				.then((extended) => {
					if (extended !== 1) lost = true;
				})
				.catch(() => {
					lost = true;
				});
		}, LEASE_MS / 3);
		renewal.unref();
		const assertActive = () => {
			if (lost) throw new Error('Metrics refresh lost its Redis lock');
		};
		const result = await buildAdminMetrics(new Date(), undefined, assertActive);
		assertActive();
		// Ownership check and publication are atomic, including after a process pause or Redis reconnect.
		const published = await redisCommand((redis) =>
			redis.eval(
				"if redis.call('get', KEYS[1]) == ARGV[1] then redis.call('set', KEYS[2], ARGV[2]); return 1 else return 0 end",
				2,
				LOCK_KEY,
				SNAPSHOT_KEY,
				token,
				JSON.stringify(result),
			),
		);
		if (published !== 1)
			throw new Error('Metrics refresh lost its Redis lock before publication');
		logger.info('Admin metrics refreshed', {durationMs: Date.now() - started});
	} catch (error) {
		logger.error('Admin metrics refresh failed', {
			error,
			errorMessage: error instanceof Error ? error.message : String(error),
			durationMs: Date.now() - started,
		});
		if (acquired) {
			try {
				await redisCommand((redis) =>
					redis.eval(
						"if redis.call('get', KEYS[1]) == ARGV[1] then return redis.call('set', KEYS[2], '1', 'EX', 300) else return 0 end",
						2,
						LOCK_KEY,
						RETRY_KEY,
						token,
					),
				);
			} catch {
				/* Redis may itself be unavailable; the lease still expires. */
			}
		}
	} finally {
		clearInterval(renewal);
		if (acquired) {
			try {
				await redisCommand((redis) =>
					redis.eval(
						"if redis.call('get', KEYS[1]) == ARGV[1] then return redis.call('del', KEYS[1]) else return 0 end",
						1,
						LOCK_KEY,
						token,
					),
				);
			} catch {
				/* An expired lease can be acquired by the next refresh. */
			}
		}
	}
}

/** Shared by cron, startup, and cache recovery; all failures are logged here. */
export function refreshAdminMetrics(): Promise<void> {
	if (!inFlight)
		inFlight = refresh().finally(() => {
			inFlight = undefined;
		});
	return inFlight;
}

export async function getAdminMetrics(): Promise<AdminMetricsResponse> {
	try {
		const snapshot = await readSnapshot();
		if (snapshot) {
			const stale = isStale(snapshot);
			if (stale) void refreshAdminMetrics();
			return {status: 'ready', snapshot, stale};
		}
		if (await redisCommand((redis) => redis.exists(RETRY_KEY))) return {status: 'unavailable'};
		void refreshAdminMetrics();
		return {status: 'preparing'};
	} catch {
		return {status: 'unavailable'};
	}
}
