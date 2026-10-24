import {SocketClient} from '@/server/match/init';
import {onProtectedSocketEvent, socketIdSchema} from '@/server/match/socket_event';
import {MatchCacher} from '@/server/match/update/match_cacher';
import {emitMatchUpdate} from '@/server/match/update/send';
import {sendMatchUpdate} from '@/server/match/update/standings';
import {getMatchById} from '@/server/models/match';
import {Solve} from '@/types/solve';
import {PublicUserAccount} from '@/types/user';
import {z} from 'zod';

const nullableString = z.string().nullable().default(null);
const nullableNumber = z.number().nullable().default(null);

const solveSchema = z.object({
	id: z.string(),
	time: z.number(),
	raw_time: nullableNumber,
	event_type: z.string(),
	scramble: z.string(),
	game_session_id: nullableString,
	from_timer: z.boolean().default(false),
	training_session_id: z.string().nullish(),
	session_id: nullableString,
	user_id: z.string(),
	bulk: z.boolean().default(false),
	started_at: nullableNumber,
	ended_at: nullableNumber,
	dnf: z.boolean().default(false),
	plus_two: z.boolean().default(false),
	notes: nullableString,
	trainer_name: nullableString,
	is_smart_cube: z.boolean().default(false),
	smart_device_id: nullableString,
	match_id: nullableString,
	match_participant_id: nullableString,
	smart_turn_count: nullableNumber,
	smart_turns: nullableString,
	inspection_time: nullableNumber,
	demo_mode: z.boolean().optional(),
	share_code: nullableString,
});

const matchSolveArgs = z.tuple([socketIdSchema, solveSchema]);

async function getPlayerMatch(user: PublicUserAccount, matchId: string) {
	const match = await getMatchById(matchId);
	if (!match?.participants.some((part) => part.user_id === user.id)) {
		return null;
	}

	return match;
}

export function listenForSolveEvents(client: SocketClient) {
	onProtectedSocketEvent(
		client,
		'playerStartedSolve',
		z.tuple([socketIdSchema, z.number()]),
		async (user, matchId, startedAt) => {
			const match = await getPlayerMatch(user, matchId);
			if (!match) {
				return;
			}

			const matchCacher = new MatchCacher(match.id);
			await matchCacher.setPlayerSolving(user.id, true);

			emitMatchUpdate('opponentStartedSolve', match, user, startedAt);
		},
	);

	onProtectedSocketEvent(
		client,
		'playerEndedSolve',
		z.tuple([socketIdSchema, z.number(), z.number()]),
		async (user, matchId, endedAtUnix, finalTimeMillis) => {
			const match = await getPlayerMatch(user, matchId);
			if (!match) {
				return;
			}

			const matchCacher = new MatchCacher(match.id);
			await matchCacher.setPlayerSolving(user.id, false);

			emitMatchUpdate('opponentEndedSolve', match, user, endedAtUnix, finalTimeMillis);
		},
	);

	onProtectedSocketEvent(
		client,
		'playerSolveSaved',
		matchSolveArgs,
		async (user, matchId, solve) => {
			const match = await getPlayerMatch(user, matchId);
			if (!match) {
				return;
			}

			const matchCacher = new MatchCacher(match.id);
			await matchCacher.updatePlayerLastSolveAt(user.id, new Date());

			emitMatchUpdate('opponentSolveSaved', match, user, solve);

			await sendMatchUpdate(match);
		},
	);

	onProtectedSocketEvent(client, 'playedDnfSolve', matchSolveArgs, updateSolve);
	onProtectedSocketEvent(client, 'playerPlusTwoSolve', matchSolveArgs, updateSolve);

	async function updateSolve(user: PublicUserAccount, matchId: string, solve: Solve) {
		const match = await getPlayerMatch(user, matchId);
		if (!match) {
			return;
		}

		emitMatchUpdate('opponentSolveUpdated', match, user, solve);
		await sendMatchUpdate(match);
	}
}
