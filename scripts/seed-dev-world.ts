import {CATALOG_ID} from '@/server/models/trainer/catalog';
import bcrypt from 'bcryptjs';
import {Scrambow} from 'scrambow';
import {v5 as uuid} from 'uuid';
import type {Prisma, PrismaClient} from '../generated/prisma/client';
import {buildSeedData} from './seed-dev-data';
import {SEED_TRAINER_ALGORITHMS} from './seed-dev-trainer';

// Every seeded account logs in with <username>@cubedesk.test and this password
export const SEED_PASSWORD = 'cubedesk';

const DAY = 24 * 60 * 60 * 1000;
const id = (key: string) => uuid(`cubedesk:dev-world:v1:${key}`, uuid.URL);

interface SeedUser {
	username: string;
	admin?: boolean;
	verified?: boolean;
	// Only the rows signup creates, to test onboarding and empty states
	bare?: boolean;
	banned?: boolean;
	elo?: number;
	games?: number;
	// Typical 3x3 time for generated solves
	base?: number;
	profile?: Partial<Prisma.ProfileCreateManyInput>;
}

export const SEED_USERS: SeedUser[] = [
	{
		username: 'agent',
		admin: true,
		verified: true,
		elo: 1420,
		games: 18,
		profile: {
			bio: 'Main dev account. Admin, with a full solve history, friends, 1v1 matches and trainers.',
			three_method: 'CFOP',
			main_three_cube: 'GAN 12 ui',
			three_goal: 'Sub 15',
			favorite_event: '333',
		},
	},
	{
		username: 'alice',
		verified: true,
		elo: 1710,
		games: 64,
		base: 9.5,
		profile: {
			bio: 'Sub-10 CFOP. Friends with agent.',
			three_method: 'CFOP',
			main_three_cube: 'GAN 14 MagLev',
			three_goal: 'Sub 8',
			favorite_event: '333',
			youtube_link: 'https://www.youtube.com/@cubedesk',
		},
	},
	{
		username: 'bob',
		elo: 1540,
		games: 41,
		base: 12,
		profile: {bio: 'Friends with agent.', three_method: 'Roux'},
	},
	{
		username: 'carol',
		elo: 1380,
		games: 22,
		base: 16,
		profile: {bio: 'Sent agent a friend request.'},
	},
	{
		username: 'dave',
		elo: 1250,
		games: 9,
		base: 21,
		profile: {bio: 'Has a pending request from agent.'},
	},
	{
		username: 'erin',
		elo: 1105,
		games: 5,
		base: 27,
		profile: {bio: 'Sent agent a friend request.'},
	},
	{username: 'frank', elo: 1490, games: 30, base: 13},
	{username: 'grace', base: 19, profile: {bio: 'Imported her history from csTimer.'}},
	{username: 'heidi', elo: 1620, games: 50, base: 10.5, profile: {three_method: 'ZZ'}},
	{
		username: 'mallory',
		elo: 1890,
		games: 25,
		base: 7.2,
		profile: {
			bio: 'Suspiciously fast. Reported by several users and beat agent in a rated match.',
		},
	},
	{username: 'trent', banned: true, elo: 1300, games: 12, base: 15},
	{username: 'newbie', bare: true},
];

const userId = (username: string) => id(`user:${username}`);
const email = (username: string) => `${username}@cubedesk.test`;

function scrambles(eventType: string, seed: number, count: number) {
	return new Scrambow(eventType)
		.setSeed(seed)
		.get(count)
		.map((s) => s.scramble_string.trim());
}

function invertAlgorithm(alg: string) {
	return alg
		.split(/\s+/)
		.filter(Boolean)
		.reverse()
		.map((move) =>
			move.endsWith("'") ? move.slice(0, -1) : move.endsWith('2') ? move : `${move}'`,
		);
}

// Mean of the middle three, like the app's ao5
function ao5(times: number[]) {
	const sorted = [...times].sort((a, b) => a - b);
	return Math.round(((sorted[1] + sorted[2] + sorted[3]) / 3) * 1000) / 1000;
}

function solveRow(
	userId: string,
	key: string,
	rawTime: number,
	endedAt: Date,
	extra: Partial<Prisma.SolveCreateManyInput> = {},
): Prisma.SolveCreateManyInput {
	const dnf = extra.dnf ?? false;
	const plusTwo = extra.plus_two ?? false;
	return {
		id: id(`solve:${key}`),
		user_id: userId,
		event_type: '333',
		raw_time: rawTime,
		time: dnf ? -1 : rawTime + (plusTwo ? 2 : 0),
		started_at: BigInt(endedAt.getTime() - Math.round(rawTime * 1000)),
		ended_at: BigInt(endedAt.getTime()),
		created_at: endedAt,
		from_timer: true,
		...extra,
	};
}

interface MatchSeed {
	key: string;
	type: 'HEAD_TO_HEAD' | 'ELIMINATION';
	rated: boolean;
	players: string[];
	winner: string;
	// Round winners in order; every player solves every round
	rounds: string[];
	daysAgo: number;
	chat?: [string, string][];
}

const MATCHES: MatchSeed[] = [
	{
		key: 'h2h-alice',
		type: 'HEAD_TO_HEAD',
		rated: true,
		players: ['agent', 'alice'],
		winner: 'alice',
		rounds: ['alice', 'agent', 'alice', 'alice'],
		daysAgo: 12,
		chat: [
			['alice', 'glhf!'],
			['agent', 'gl'],
			['alice', 'gg, that second one was close'],
		],
	},
	{
		key: 'h2h-bob',
		type: 'HEAD_TO_HEAD',
		rated: true,
		players: ['agent', 'bob'],
		winner: 'agent',
		rounds: ['bob', 'agent', 'agent', 'bob', 'agent'],
		daysAgo: 5,
		chat: [['bob', 'rematch later?']],
	},
	{
		// Mallory is reported for cheating, so banning her from /admin can refund agent's ELO
		key: 'h2h-mallory',
		type: 'HEAD_TO_HEAD',
		rated: true,
		players: ['agent', 'mallory'],
		winner: 'mallory',
		rounds: ['mallory', 'mallory', 'mallory'],
		daysAgo: 2,
	},
	{
		key: 'elim-friends',
		type: 'ELIMINATION',
		rated: false,
		players: ['agent', 'carol', 'dave'],
		winner: 'agent',
		rounds: ['agent', 'carol', 'agent', 'agent'],
		daysAgo: 1,
		chat: [['carol', 'custom room, no elo on the line']],
	},
];

function eloOf(username: string) {
	return SEED_USERS.find((user) => user.username === username)?.elo ?? 1000;
}

export async function buildWorldSeed(now: Date) {
	const daysAgo = (days: number, minutes = 0) =>
		new Date(now.getTime() - days * DAY - minutes * 60000);
	const password = await bcrypt.hash(SEED_PASSWORD, 10);
	const baseUri = process.env.BASE_URI || 'http://localhost:3000';
	const agent = userId('agent');

	const users: Prisma.UserAccountCreateManyInput[] = [];
	const settings: Prisma.SettingCreateManyInput[] = [];
	const notificationPreferences: Prisma.NotificationPreferenceCreateManyInput[] = [];
	const profiles: Prisma.ProfileCreateManyInput[] = [];
	const eloRatings: Prisma.EloRatingCreateManyInput[] = [];
	const sessions: Prisma.SessionCreateManyInput[] = [];
	const solves: Prisma.SolveCreateManyInput[] = [];
	const topSolves: Prisma.TopSolveCreateManyInput[] = [];
	const topAverages: Prisma.TopAverageCreateManyInput[] = [];

	function publishPbs(
		username: string,
		eventType: string,
		eventSolves: Prisma.SolveCreateManyInput[],
	) {
		const valid = eventSolves.filter((solve) => !solve.dnf);
		const best = valid.reduce((a, b) => (b.time < a.time ? b : a));
		topSolves.push({
			id: id(`top-solve:${username}:${eventType}`),
			user_id: userId(username),
			time: best.time,
			solve_id: best.id!,
			event_type: eventType,
		});
		const five = valid.slice(-5);
		topAverages.push({
			id: id(`top-average:${username}:${eventType}`),
			user_id: userId(username),
			time: ao5(five.map((solve) => solve.time)),
			event_type: eventType,
			solve_1_id: five[0].id!,
			solve_2_id: five[1].id!,
			solve_3_id: five[2].id!,
			solve_4_id: five[3].id!,
			solve_5_id: five[4].id!,
		});
	}

	for (const [index, user] of SEED_USERS.entries()) {
		const uid = userId(user.username);
		users.push({
			id: uid,
			email: email(user.username),
			username: user.username,
			password,
			join_ip: '127.0.0.1',
			join_country: 'US',
			admin: !!user.admin,
			verified: !!user.verified,
			banned_forever: !!user.banned,
			created_at: daysAgo(user.bare ? 0 : 120 - index),
		});
		// Email notifications go through SES, which isn't configured locally, so they're off for seeded users
		notificationPreferences.push({
			id: id(`notification-pref:${user.username}`),
			user_id: uid,
			friend_request: false,
			friend_request_accept: false,
			elo_refund: false,
			marketing_emails: false,
		});
		if (user.bare) {
			settings.push({id: id(`setting:${user.username}`), user_id: uid});
			continue;
		}

		const profileId = id(`profile:${user.username}`);
		profiles.push({id: profileId, user_id: uid, ...user.profile});
		if (user.elo) {
			eloRatings.push({
				id: id(`elo:${user.username}`),
				user_id: uid,
				profile_id: profileId,
				elo_333_rating: user.elo,
				elo_222_rating: 1000,
				elo_444_rating: 1000,
				elo_overall_rating: user.elo,
				games_333_count: user.games ?? 0,
				games_overall_count: user.games ?? 0,
			});
		}

		let mainSessionId: string;
		if (user.username === 'agent') {
			// The same 90-day history `pnpm seed:dev --username` adds to your own account
			const history = buildSeedData(uid, now);
			sessions.push(...history.sessions);
			solves.push(...history.solves);
			mainSessionId = history.sessions[0].id!;
			for (const eventType of ['333', '222']) {
				publishPbs(
					user.username,
					eventType,
					history.solves.filter((solve) => solve.event_type === eventType),
				);
			}
		} else {
			mainSessionId = id(`session:${user.username}:main`);
			sessions.push({
				id: mainSessionId,
				user_id: uid,
				name: 'Main',
				created_at: daysAgo(60),
			});
			const userSolves: Prisma.SolveCreateManyInput[] = [];
			const userScrambles = scrambles('333', 1000 + index, 12);
			for (let n = 0; n < 40; n++) {
				const rawTime =
					Math.round(
						user.base! *
							(1 + Math.sin(index * 13 + n * 7) * 0.15 + (40 - n) / 300) *
							100,
					) / 100;
				userSolves.push(
					solveRow(
						uid,
						`${user.username}:333:${n}`,
						rawTime,
						daysAgo((40 - n) * 0.75, index * 3),
						{
							session_id: mainSessionId,
							scramble: userScrambles[n % userScrambles.length],
							dnf: n % 17 === 16,
							plus_two: n % 13 === 12,
							// Grace's history came from a csTimer import
							bulk: user.username === 'grace',
							from_timer: user.username !== 'grace',
						},
					),
				);
			}
			solves.push(...userSolves);
			publishPbs(user.username, '333', userSolves);
		}

		settings.push({
			id: id(`setting:${user.username}`),
			user_id: uid,
			session_id: mainSessionId,
			event_type: '333',
		});
	}

	// Friends: agent <-> alice, agent <-> bob, alice <-> carol. Pending: carol -> agent, erin -> agent, agent -> dave
	const friendshipRequests: Prisma.FriendshipRequestCreateManyInput[] = [];
	const friendships: Prisma.FriendshipCreateManyInput[] = [];
	for (const [from, to, accepted, days] of [
		['alice', 'agent', true, 40],
		['agent', 'bob', true, 30],
		['carol', 'alice', true, 20],
		['carol', 'agent', false, 3],
		['erin', 'agent', false, 1],
		['agent', 'dave', false, 2],
	] as const) {
		const requestId = id(`friend-request:${from}:${to}`);
		friendshipRequests.push({
			id: requestId,
			from_id: userId(from),
			to_id: userId(to),
			created_at: daysAgo(days),
			accepted_at: accepted ? daysAgo(days - 1) : null,
		});
		if (accepted) {
			for (const [a, b] of [
				[from, to],
				[to, from],
			]) {
				friendships.push({
					id: id(`friendship:${a}:${b}`),
					user_id: userId(a),
					other_user_id: userId(b),
					friendship_request_id: requestId,
					created_at: daysAgo(days - 1),
				});
			}
		}
	}

	const notifications: Prisma.NotificationCreateManyInput[] = [
		...(['carol', 'erin'] as const).map((from, n) => ({
			id: id(`notification:friend-request:${from}`),
			user_id: agent,
			triggering_user_id: userId(from),
			notification_type: 'friend_request',
			notification_category_name: 'Friends',
			icon: 'user',
			subject: `${from} sent you a friend request on CubeDesk`,
			in_app_message: `${from} sent you a friend request`,
			message: `You have a new friend request from ${from}. Click the link below to view their profile and accept the friend request.`,
			link: `${baseUri}/user/${from}`,
			link_text: 'View friend request →',
			created_at: daysAgo(3 - n * 2),
		})),
		{
			id: id('notification:friend-request-accept:bob'),
			user_id: agent,
			triggering_user_id: userId('bob'),
			notification_type: 'friend_request_accept',
			notification_category_name: 'Friends',
			icon: 'user',
			subject: 'bob accepted your friend request on CubeDesk',
			in_app_message: 'bob accepted your friend request',
			message:
				'Good news! bob accepted your friend request. Click the link below to view their profile.',
			link: `${baseUri}/user/bob`,
			link_text: 'View profile →',
			created_at: daysAgo(29),
			read_at: daysAgo(28),
		},
		{
			id: id('notification:elo-refund:trent'),
			user_id: agent,
			triggering_user_id: userId('trent'),
			notification_type: 'elo_refund',
			notification_category_name: '1v1',
			icon: 'sword',
			subject: '14 ELO refunded to your CubeDesk account',
			in_app_message: '14 ELO refunded to your CubeDesk account',
			message: 'You were refunded 14 ELO for losing 1 game to trent, who was cheating.',
			link: `${baseUri}/user/agent`,
			link_text: 'View your profile →',
			created_at: daysAgo(20),
			read_at: daysAgo(19),
		},
	];

	// 1v1 history
	const matchSessions: Prisma.MatchSessionCreateManyInput[] = [];
	const gameOptions: Prisma.GameOptionsCreateManyInput[] = [];
	const matches: Prisma.MatchCreateManyInput[] = [];
	const participants: Prisma.MatchParticipantCreateManyInput[] = [];
	const gameSessions: Prisma.GameSessionCreateManyInput[] = [];
	const eloLogs: Prisma.EloLogCreateManyInput[] = [];
	const chatMessages: Prisma.ChatMessageCreateManyInput[] = [];
	for (const [matchIndex, match] of MATCHES.entries()) {
		const matchSessionId = id(`match-session:${match.key}`);
		const matchId = `match_${id(`match:${match.key}`)}`;
		const startedAt = daysAgo(match.daysAgo, 30);
		matchSessions.push({
			id: matchSessionId,
			match_type: match.type,
			rated: match.rated,
			custom_match: !match.rated,
			created_by_id: match.rated ? null : userId(match.players[0]),
			min_players: 2,
			max_players: match.players.length,
			created_at: startedAt,
		});
		gameOptions.push({
			id: id(`game-options:${match.key}`),
			match_session_id: matchSessionId,
			game_type: match.type,
			event_type: '333',
			head_to_head_target_win_count: 3,
		});
		matches.push({
			id: matchId,
			match_session_id: matchSessionId,
			link_code: `seed-${match.key}`,
			spectate_code: `spec_seed-${match.key}`,
			winner_id: userId(match.winner),
			created_at: startedAt,
			started_at: startedAt,
			ended_at: new Date(startedAt.getTime() + match.rounds.length * 60000),
		});
		const roundScrambles = scrambles('333', 2000 + matchIndex, match.rounds.length);
		for (const [position, player] of match.players.entries()) {
			const participantId = id(`participant:${match.key}:${player}`);
			const gameSessionId = id(`game-session:${match.key}:${player}`);
			participants.push({
				id: participantId,
				match_id: matchId,
				user_id: userId(player),
				position,
				won: player === match.winner,
				lost: player !== match.winner,
				created_at: startedAt,
			});
			let total = 0;
			for (const [round, roundWinner] of match.rounds.entries()) {
				const rawTime =
					Math.round((roundWinner === player ? 11 : 13.5 + position) * 100 + round * 37) /
					100;
				total += rawTime;
				solves.push(
					solveRow(
						userId(player),
						`match:${match.key}:${player}:${round}`,
						rawTime,
						new Date(startedAt.getTime() + (round + 1) * 60000),
						{
							scramble: roundScrambles[round],
							match_id: matchId,
							match_participant_id: participantId,
							game_session_id: gameSessionId,
							from_timer: false,
						},
					),
				);
			}
			gameSessions.push({
				id: gameSessionId,
				user_id: userId(player),
				match_id: matchId,
				game_type: match.type,
				solve_count: match.rounds.length,
				total_time: Math.round(total * 100) / 100,
				created_at: startedAt,
			});
		}
		if (match.rated) {
			const [a, b] = match.players;
			const change = 14 + matchIndex;
			for (const [player, opponent] of [
				[a, b],
				[b, a],
			]) {
				const sign = player === match.winner ? 1 : -1;
				eloLogs.push({
					id: id(`elo-log:${match.key}:${player}`),
					match_id: matchId,
					player_id: userId(player),
					opponent_id: userId(opponent),
					event_type: '333',
					elo_change: sign * change,
					player_new_elo_rating: eloOf(player),
					player_new_game_count: 1,
					opponent_new_elo_rating: eloOf(opponent),
					opponent_new_game_count: 1,
					created_at: startedAt,
				});
			}
		}
		for (const [n, [author, message]] of (match.chat ?? []).entries()) {
			chatMessages.push({
				id: id(`chat:${match.key}:${n}`),
				user_id: userId(author),
				match_session_id: matchSessionId,
				message,
				raw_message: message,
				created_at: new Date(startedAt.getTime() + n * 20000),
			});
		}
	}

	// A solo practice game on /play/elimination
	const soloGameSessionId = id('game-session:agent:solo-elimination');
	gameSessions.push({
		id: soloGameSessionId,
		user_id: agent,
		game_type: 'ELIMINATION',
		solve_count: 6,
		total_time: 0,
		created_at: daysAgo(4),
	});
	gameOptions.push({
		id: id('game-options:agent:solo-elimination'),
		game_session_id: soloGameSessionId,
		game_type: 'ELIMINATION',
		event_type: '333',
	});
	for (const [n, scramble] of scrambles('333', 3000, 6).entries()) {
		solves.push(
			solveRow(agent, `agent:solo-elimination:${n}`, 25 - n * 2.1, daysAgo(4, -n), {
				scramble,
				game_session_id: soloGameSessionId,
				from_timer: false,
			}),
		);
	}

	// Smart cube solves; the turns undo the scramble, so the solve page can rebuild method steps
	const smartDeviceId = id('smart-device:agent');
	const smartDevices: Prisma.SmartDeviceCreateManyInput[] = [
		{
			id: smartDeviceId,
			user_id: agent,
			name: 'GAN 12 ui',
			internal_name: 'GAN-3a8f',
			device_id: 'AB:12:CD:34:EF:56',
		},
	];
	for (const [n, scramble] of scrambles('333', 4000, 3).entries()) {
		const turns = invertAlgorithm(scramble);
		const gaps = turns.map((_, t) => (t === 0 ? 0 : 250 + ((t * 97 + n * 31) % 400)));
		const rawTime = Math.round(gaps.reduce((a, b) => a + b, 0) / 10) / 100;
		solves.push(
			solveRow(agent, `agent:smart:${n}`, rawTime, daysAgo(0, 30 + n * 5), {
				session_id: settings.find((setting) => setting.user_id === agent)!.session_id,
				scramble,
				is_smart_cube: true,
				smart_device_id: smartDeviceId,
				smart_turns: turns.map((turn, t) => `${gaps[t]}${turn}`).join(' '),
				smart_turn_count: turns.length,
				// Stable share link: /solve/seedsmart0
				share_code: `seedsmart${n}`,
			}),
		);
	}

	// A custom event with its own session
	const customEventId = id('custom-event:agent:relay');
	const customEventTypes: Prisma.CustomEventTypeCreateManyInput[] = [
		{id: customEventId, user_id: agent, name: 'Relay 2-4', scramble: 'none'},
	];
	const relaySessionId = id('session:agent:relay');
	sessions.push({
		id: relaySessionId,
		user_id: agent,
		name: '[Dev seed] Relays',
		order: 110,
		created_at: daysAgo(10),
	});
	for (let n = 0; n < 8; n++) {
		solves.push(
			solveRow(agent, `agent:relay:${n}`, 95 - n * 1.7, daysAgo(10 - n), {
				session_id: relaySessionId,
				event_type: customEventId,
			}),
		);
	}

	// Trainer history, favorites and an override on the seeded PLLs
	const pllIds = SEED_TRAINER_ALGORITHMS.filter((algorithm) => algorithm.algo_type === 'PLL').map(
		(algorithm) => algorithm.id,
	);
	const trainerFavorites: Prisma.TrainerFavoriteCreateManyInput[] = pllIds
		.slice(0, 3)
		.map((cubeKey) => ({
			id: id(`trainer-favorite:agent:${cubeKey}`),
			user_id: agent,
			cube_key: cubeKey,
		}));
	// The edit dialog always saves every field, so the override does too
	const uPerm = SEED_TRAINER_ALGORITHMS.find((algorithm) => algorithm.id === '333_pll_1')!;
	const algorithmOverrides: Prisma.AlgorithmOverrideCreateManyInput[] = [
		{
			id: id(`algorithm-override:agent:${uPerm.id}`),
			user_id: agent,
			cube_key: uPerm.id,
			name: 'Ua (my alg)',
			solution: "R U' R U R U R U' R' U' R2",
			rotate: 0,
			scrambles: uPerm.scrambles,
		},
	];
	for (const [n, cubeKey] of pllIds.slice(0, 3).entries()) {
		for (let rep = 0; rep < 4; rep++) {
			solves.push(
				solveRow(
					agent,
					`agent:trainer:${cubeKey}:${rep}`,
					2.4 - rep * 0.2 + n * 0.3,
					daysAgo(6, n * 10 + rep),
					{
						trainer_name: cubeKey,
						training_session_id: id(`training-session:agent:${n}`),
						from_timer: false,
					},
				),
			);
		}
	}

	// Custom trainers. 3x3 colors are a 5x5 top-down grid minus corners; #000000 is the primary color
	const ollColors = (pattern: string) =>
		pattern
			.split('')
			.map((c) => (c === 'x' ? '#000000' : '#3F464F'))
			.join(',');
	const customTrainers: Prisma.CustomTrainerCreateManyInput[] = [];
	for (const [key, owner, name, isPrivate, likes, solution, pattern] of [
		['sune', 'agent', 'Sune variations', false, 0, "R U R' U R U2 R'", 'x.....xx...xx.x.x..x.'],
		['eg', 'agent', 'EG-1 practice', true, 0, "R U' R' F R' F' R", ''],
		[
			'coll',
			'alice',
			"Alice's COLL picks",
			false,
			3,
			"R U R' U R U2 R' U' R U2 R' U' R U' R'",
			'.x.x...x.x...x.x...x.',
		],
		['wv', 'bob', 'Winter variation', false, 1, "R U R'", '..x..x...x.x...x..x..'],
		[
			'oh',
			'heidi',
			'OH-friendly OLLs',
			false,
			2,
			"R U2 R2 F R F' U2 R' F R F'",
			'x...x.xx.x..x.xx.x...',
		],
	] as const) {
		customTrainers.push({
			id: id(`custom-trainer:${key}`),
			key: id(`custom-trainer:${key}`),
			user_id: userId(owner),
			name,
			description: `[Dev seed] ${name}`,
			event_type: key === 'eg' ? '222' : '333',
			private: isPrivate,
			like_count: likes,
			solution,
			scrambles: invertAlgorithm(solution).join(' '),
			colors: pattern ? ollColors(pattern) : null,
			created_at: daysAgo(15),
		});
	}
	const customTrainerLikes: Prisma.CustomTrainerLikeCreateManyInput[] = [];
	for (const [key, owner, likers] of [
		['coll', 'alice', ['agent', 'bob', 'heidi']],
		['wv', 'bob', ['agent']],
		['oh', 'heidi', ['alice', 'bob']],
	] as const) {
		for (const liker of likers) {
			customTrainerLikes.push({
				id: id(`custom-trainer-like:${key}:${liker}`),
				custom_trainer_id: id(`custom-trainer:${key}`),
				user_id: userId(liker),
				creator_id: userId(owner),
			});
		}
	}
	// Agent downloaded Alice's trainer
	const source = customTrainers.find((trainer) => trainer.id === id('custom-trainer:coll'))!;
	const copyId = id('custom-trainer:coll:agent-copy');
	customTrainers.push({
		...source,
		id: copyId,
		key: copyId,
		user_id: agent,
		private: true,
		downloaded: true,
		copy_of_id: source.id,
		like_count: 0,
	});
	const customTrainerDownloads: Prisma.CustomTrainerDownloadCreateManyInput[] = [
		{
			id: id('custom-trainer-download:coll:agent'),
			user_id: agent,
			creator_id: userId('alice'),
			source_trainer_id: source.id!,
			new_trainer_id: copyId,
		},
	];

	// Moderation: open reports against mallory, a resolved one against erin, trent banned forever
	const reports: Prisma.ReportCreateManyInput[] = [
		...(['alice', 'bob', 'heidi'] as const).map((from, n) => ({
			id: id(`report:${from}:mallory`),
			created_by_id: userId(from),
			reported_user_id: userId('mallory'),
			reason: [
				'Times are way too fast for her solves',
				'Cheating in 1v1',
				'Suspicious solves',
			][n],
			created_at: daysAgo(2 - n * 0.3),
		})),
		{
			id: id('report:dave:erin'),
			created_by_id: userId('dave'),
			reported_user_id: userId('erin'),
			reason: 'Rude in chat',
			created_at: daysAgo(15),
			resolved_at: daysAgo(14),
		},
	];
	const banLogs: Prisma.BanLogCreateManyInput[] = [
		{
			id: id('ban:trent'),
			created_by_id: agent,
			banned_user_id: userId('trent'),
			reason: 'Cheating in 1v1',
			forever: true,
			minutes: -1,
			active: true,
			created_at: daysAgo(20),
		},
		{
			id: id('ban:erin:expired'),
			created_by_id: agent,
			banned_user_id: userId('erin'),
			reason: 'Spamming chat',
			minutes: 60 * 24,
			banned_until: daysAgo(13),
			active: false,
			created_at: daysAgo(14),
		},
	];

	const badgeTypes: Prisma.BadgeTypeCreateManyInput[] = [
		{
			id: id('badge-type:beta'),
			name: 'Beta tester',
			color: '#8B5CF6',
			description: 'Helped test new features',
			priority: 10,
			created_by_id: agent,
		},
	];
	const badges: Prisma.BadgeCreateManyInput[] = ['agent', 'alice'].map((username) => ({
		id: id(`badge:beta:${username}`),
		user_id: userId(username),
		badge_type_id: id('badge-type:beta'),
	}));

	// Views show up as counts on /stats
	const profileViews: Prisma.ProfileViewCreateManyInput[] = ['alice', 'bob', 'carol', null].map(
		(viewer, n) => ({
			id: id(`profile-view:agent:${viewer ?? 'anonymous'}`),
			profile_id: id('profile:agent'),
			profile_user_id: agent,
			viewer_id: viewer ? userId(viewer) : null,
			created_at: daysAgo(n + 1),
		}),
	);
	const solveViews: Prisma.SolveViewCreateManyInput[] = ['alice', null].map((viewer) => ({
		id: id(`solve-view:agent:smart0:${viewer ?? 'anonymous'}`),
		solve_id: id('solve:agent:smart:0'),
		user_id: agent,
		viewer_id: viewer ? userId(viewer) : null,
	}));

	// Admin metrics: logged-out demo solves and a csTimer import
	const demoSolves: Prisma.DemoSolveCreateManyInput[] = Array.from({length: 12}, (_, n) => ({
		id: id(`demo-solve:${n}`),
		demo_session_id: id(`demo-session:${n % 3}`),
		raw_time: 20 + n,
		event_type: '333',
		created_at: daysAgo(n * 2),
	}));
	const importAttempts: Prisma.ImportAttemptCreateManyInput[] = [
		{
			id: id('import:grace'),
			user_id: userId('grace'),
			source: 'cstimer',
			status: 'succeeded',
			request_hash: id('import-hash:grace'),
			requested_sessions: 1,
			requested_solves: 40,
			saved_sessions: 1,
			saved_solves: 40,
			started_at: daysAgo(30),
			completed_at: daysAgo(30),
		},
	];

	return {
		users,
		settings,
		customEventTypes,
		notificationPreferences,
		profiles,
		eloRatings,
		sessions,
		smartDevices,
		matchSessions,
		matches,
		gameOptions,
		participants,
		gameSessions,
		solves,
		topSolves,
		topAverages,
		eloLogs,
		chatMessages,
		friendshipRequests,
		friendships,
		notifications,
		reports,
		banLogs,
		customTrainers,
		customTrainerLikes,
		customTrainerDownloads,
		trainerFavorites,
		algorithmOverrides,
		badgeTypes,
		badges,
		profileViews,
		solveViews,
		demoSolves,
		importAttempts,
	};
}

export async function seedWorld(prisma: PrismaClient, now = new Date()) {
	const conflicts = await prisma.userAccount.findMany({
		where: {
			OR: SEED_USERS.flatMap((user) => [
				{email: email(user.username)},
				{username: user.username},
			]),
			NOT: {id: {in: SEED_USERS.map((user) => userId(user.username))}},
		},
		select: {username: true},
	});
	if (conflicts.length) {
		throw new Error(
			`These usernames already belong to non-seed accounts: ${conflicts.map((c) => c.username).join(', ')}. ` +
				'Delete them or reset the database (pnpm exec prisma migrate reset --force).',
		);
	}

	const data = await buildWorldSeed(now);
	const counts = await prisma.$transaction(
		async (tx) => {
			const opts = {skipDuplicates: true};
			const added: Record<string, number> = {};
			const insert = async (name: string, run: () => Promise<{count: number}>) => {
				added[name] = (await run()).count;
			};
			// Ordered by foreign keys
			await insert('users', () => tx.userAccount.createMany({data: data.users, ...opts}));
			await insert('settings', () => tx.setting.createMany({data: data.settings, ...opts}));
			await insert('custom events', () =>
				tx.customEventType.createMany({data: data.customEventTypes, ...opts}),
			);
			await tx.notificationPreference.createMany({
				data: data.notificationPreferences,
				...opts,
			});
			await tx.profile.createMany({data: data.profiles, ...opts});
			await tx.eloRating.createMany({data: data.eloRatings, ...opts});
			await insert('sessions', () => tx.session.createMany({data: data.sessions, ...opts}));
			await tx.smartDevice.createMany({data: data.smartDevices, ...opts});
			await tx.matchSession.createMany({data: data.matchSessions, ...opts});
			await insert('matches', () => tx.match.createMany({data: data.matches, ...opts}));
			await tx.matchParticipant.createMany({data: data.participants, ...opts});
			await tx.gameSession.createMany({data: data.gameSessions, ...opts});
			await tx.gameOptions.createMany({data: data.gameOptions, ...opts});
			await insert('solves', () => tx.solve.createMany({data: data.solves, ...opts}));
			await tx.topSolve.createMany({data: data.topSolves, ...opts});
			await tx.topAverage.createMany({data: data.topAverages, ...opts});
			await tx.eloLog.createMany({data: data.eloLogs, ...opts});
			await tx.chatMessage.createMany({data: data.chatMessages, ...opts});
			await tx.friendshipRequest.createMany({data: data.friendshipRequests, ...opts});
			await tx.friendship.createMany({data: data.friendships, ...opts});
			await insert('notifications', () =>
				tx.notification.createMany({data: data.notifications, ...opts}),
			);
			await tx.report.createMany({data: data.reports, ...opts});
			await tx.banLog.createMany({data: data.banLogs, ...opts});
			await insert('custom trainers', () =>
				tx.customTrainer.createMany({data: data.customTrainers, ...opts}),
			);
			await tx.customTrainerLike.createMany({data: data.customTrainerLikes, ...opts});
			await tx.customTrainerDownload.createMany({data: data.customTrainerDownloads, ...opts});
			// A sample catalog only while it's empty, so imports and edits at /admin/trainer survive reseeding
			const catalog = await tx.trainerCatalogState.findUnique({where: {id: CATALOG_ID}});
			if (!catalog?.initialized_at) {
				await insert('trainer algorithms', () =>
					tx.trainerAlgorithm.createMany({data: SEED_TRAINER_ALGORITHMS, ...opts}),
				);
				await tx.trainerCatalogState.upsert({
					where: {id: CATALOG_ID},
					create: {id: CATALOG_ID, initialized_at: now, revision: 1},
					update: {initialized_at: now, revision: {increment: 1}},
				});
			}
			await tx.trainerFavorite.createMany({data: data.trainerFavorites, ...opts});
			await tx.algorithmOverride.createMany({data: data.algorithmOverrides, ...opts});
			await tx.badgeType.createMany({data: data.badgeTypes, ...opts});
			await tx.badge.createMany({data: data.badges, ...opts});
			await tx.profileView.createMany({data: data.profileViews, ...opts});
			await tx.solveView.createMany({data: data.solveViews, ...opts});
			await tx.demoSolve.createMany({data: data.demoSolves, ...opts});
			await tx.importAttempt.createMany({data: data.importAttempts, ...opts});
			// Browsers that already cached these accounts' solves refetch them
			await tx.userAccount.updateMany({
				where: {id: {in: data.users.map((user) => user.id!)}},
				data: {offline_hash: id(`offline-hash:${now.getTime()}`)},
			});
			return added;
		},
		{timeout: 120000},
	);
	return counts;
}
