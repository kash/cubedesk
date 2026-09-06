import {buildSeedData, validateSeedEnvironment} from './seed-dev-data';

const local = {
	NODE_ENV: 'development',
	DATABASE_URL: 'postgresql://dev:dev@127.0.0.1:5432/cubedesk',
};

describe('development seed safety', () => {
	it.each(['production', 'test', undefined])('refuses NODE_ENV=%s', (NODE_ENV) => {
		expect(() => validateSeedEnvironment({...local, NODE_ENV})).toThrow();
	});
	it.each([
		'postgresql://dev:dev@db.example.com/cubedesk',
		'postgresql://dev:dev@localhost/cubedesk_prod',
		'postgresql://dev:dev@localhost/cubedesk?host=db.example.com',
		'postgresql://dev:dev@localhost/cubedesk?options=-csearch_path=production',
		'postgresql://dev:dev@localhost.example.com/cubedesk',
		'not-a-url',
	])('refuses unsafe connection %s', (DATABASE_URL) => {
		expect(() => validateSeedEnvironment({...local, DATABASE_URL})).toThrow();
	});
	it('refuses missing URLs and alternate production connection settings', () => {
		expect(() => validateSeedEnvironment({...local, DATABASE_URL: undefined})).toThrow();
		expect(() => validateSeedEnvironment({...local, DATABASE_SECRET: '{}'})).toThrow();
		expect(() => validateSeedEnvironment({...local, DATABASE_HOST: 'prod'})).toThrow();
	});
	it('accepts the local development connection', () => {
		expect(validateSeedEnvironment(local)).toBe(local.DATABASE_URL);
	});
});

it('generates consistent, repeatable solve history scoped to the selected user', () => {
	const now = new Date('2026-09-05T18:00:00Z');
	const data = buildSeedData('local-user', now);
	const rerun = buildSeedData('local-user', new Date('2026-09-06T18:00:00Z'));
	expect(data.solves.length).toBeGreaterThan(3000);
	expect(data.solves.map((s) => s.id)).toEqual(rerun.solves.map((s) => s.id));
	expect(new Set(data.solves.map((s) => s.id)).size).toBe(data.solves.length);
	expect(new Set(data.solves.map((s) => s.cube_type)).size).toBe(4);
	expect(data.solves.some((s) => s.dnf)).toBe(true);
	expect(data.solves.some((s) => s.plus_two)).toBe(true);
	for (const solve of data.solves) {
		expect(solve.user_id).toBe('local-user');
		expect(data.sessions.some((session) => session.id === solve.session_id)).toBe(true);
		expect(solve.time).toBe(solve.raw_time! + (solve.plus_two ? 2 : 0));
		expect(Number(solve.ended_at) - Number(solve.started_at)).toBe(
			Math.round(solve.raw_time! * 1000),
		);
		expect(Number(solve.ended_at)).toBeLessThanOrEqual(now.getTime());
	}
});
