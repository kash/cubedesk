import type {Prisma} from '../generated/prisma/client';
import {Scrambow} from 'scrambow';
import {v5 as uuid} from 'uuid';

export function validateSeedEnvironment(env: NodeJS.ProcessEnv): string {
	if (env.NODE_ENV !== 'development') {
		throw new Error(
			'Seeding requires NODE_ENV=development. Production and unset environments are refused.',
		);
	}
	if (!env.DATABASE_URL || env.DATABASE_SECRET || env.DATABASE_HOST) {
		throw new Error(
			'Seeding requires a local DATABASE_URL with no DATABASE_SECRET or DATABASE_HOST.',
		);
	}
	let url: URL;
	try {
		url = new URL(env.DATABASE_URL);
	} catch {
		throw new Error('Invalid seed database URL.');
	}
	if (
		!['postgres:', 'postgresql:'].includes(url.protocol) ||
		!['localhost', '127.0.0.1', '[::1]'].includes(url.hostname) ||
		!['/cubedesk', '/cubedesk_dev', '/cubedesk_test'].includes(url.pathname) ||
		url.search ||
		url.hash
	) {
		throw new Error(
			'Seeding only supports local cubedesk, cubedesk_dev, or cubedesk_test databases, without URL parameters.',
		);
	}
	return url.toString();
}

export function buildSeedData(userId: string, now = new Date()) {
	const id = (key: string) => uuid(`cubedesk:dev-seed:v1:${userId}:${key}`, uuid.URL);
	const events = [
		{type: '333', label: '3x3 practice', base: 18, count: 24},
		{type: '222', label: '2x2 practice', base: 5, count: 8},
		{type: '444', label: '4x4 practice', base: 65, count: 5},
		{type: 'pyram', label: 'Pyraminx practice', base: 9, count: 6},
	];
	const sessions: Prisma.SessionCreateManyInput[] = [];
	const solves: Prisma.SolveCreateManyInput[] = [];
	for (const [eventIndex, event] of events.entries()) {
		const sessionId = id(`session:${event.type}`);
		const firstDay = new Date(now);
		firstDay.setDate(firstDay.getDate() - 89);
		sessions.push({
			id: sessionId,
			user_id: userId,
			name: `[Dev seed] ${event.label}`,
			created_at: firstDay,
			order: 100 + eventIndex,
		});
		const scrambler = new Scrambow(event.type).setSeed(42 + eventIndex);
		const scrambles = scrambler.get(12).map((s) => s.scramble_string.trim());
		for (let day = 89; day >= 0; day--) {
			// Occasional rest days, followed by a current week-long streak.
			if (day > 6 && day % 9 === 0) continue;
			const count = event.count + (day % 5);
			for (let index = 0; index < count; index++) {
				const variation = Math.sin(day * 17 + index * 7 + eventIndex) * 0.22;
				const rawTime = Math.round(event.base * (1 + day / 240 + variation) * 100) / 100;
				const dnf = (day * 43 + index + eventIndex) % 47 === 0;
				const plusTwo = !dnf && (day * 43 + index + eventIndex) % 29 === 0;
				const ended = new Date(now);
				ended.setDate(ended.getDate() - day);
				ended.setTime(ended.getTime() - ((count - index) * 180 + eventIndex * 7200) * 1000);
				solves.push({
					id: id(`solve:${event.type}:${day}:${index}`),
					user_id: userId,
					session_id: sessionId,
					cube_type: event.type,
					raw_time: rawTime,
					time: rawTime + (plusTwo ? 2 : 0),
					dnf,
					plus_two: plusTwo,
					scramble: scrambles[index % scrambles.length],
					started_at: BigInt(ended.getTime() - Math.round(rawTime * 1000)),
					ended_at: BigInt(ended.getTime()),
					created_at: ended,
					from_timer: true,
					notes: '[Dev seed] Sample practice solve',
				});
			}
		}
	}
	return {sessions, solves};
}
