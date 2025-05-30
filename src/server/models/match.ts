import dayjs from 'dayjs';
import uniqid from 'uniqid';
import {Match, Prisma, UserAccount as PublicUserAccount, MatchSession} from '@prisma/client';
import {v4 as uuid} from 'uuid';
import {getPrismaClient} from '@/server/services/database';
import {publicUserInclude} from '@/server/models/user_account';
import {MatchCacher} from '@/server/match/update/match_cacher';
import {MatchConst} from '@/shared/match/consts';

export function matchInclude(includeChat: boolean): Prisma.MatchInclude {
	let matchSessionInclude = {};

	if (includeChat) {
		matchSessionInclude = {
			chat_messages: {
				orderBy: {
					created_at: 'asc',
				},
				include: {
					user: publicUserInclude,
				},
			},
		};
	}

	return {
		elo_log: true,
		match_session: {
			include: {
				game_options: true,
				...matchSessionInclude,
			},
		},
		participants: {
			orderBy: {
				created_at: 'desc',
			},
			include: {
				user: publicUserInclude,
				solves: {
					orderBy: {
						created_at: 'asc',
					},
				},
			},
		},
	};
}

export async function getMatchById(id: string, includeChat: boolean) {
	const match = await getPrismaClient().match.findUnique({
		where: {
			id,
		},
		include: matchInclude(includeChat),
	});

	return cleanMatch(match);
}

export async function getUserMatchCount(user: PublicUserAccount) {
	return getPrismaClient().matchParticipant.aggregate({
		_count: {
			id: true,
		},
		where: {
			user_id: user.id,
		},
	});
}

export async function getMatchBySpectateCode(code: string, includeChat: boolean) {
	const match = await getPrismaClient().match.findUnique({
		where: {
			spectate_code: code,
		},
		include: matchInclude(includeChat),
	});

	delete match.link_code;

	return cleanMatch(match);
}

export async function getMatchByLinkCode(code: string, includeChat: boolean) {
	const match = await getPrismaClient().match.findUnique({
		where: {
			link_code: code,
		},
		include: matchInclude(includeChat),
	});

	return cleanMatch(match);
}

export async function cleanMatch(match: Match | null): Promise<Match | null> {
	if (!match || !match.participants) {
		return null;
	}

	if (match.participants && match.participants.length > 0) {
		for (let i = 0; i < match.participants.length; i += 1) {
			const part = match.participants[i];

			for (let k = 0; k < part.solves.length; k += 1) {
				const solve = part.solves[k];

				match.participants[i].solves[k].started_at = Number(solve.started_at);
				match.participants[i].solves[k].ended_at = Number(solve.ended_at);
			}
		}
	}

	const now = new Date();
	const createdAt15 = dayjs(match.created_at).add(15, 'm').toDate();
	const createdAtOneDay = dayjs(match.created_at).add(1, 'd').toDate();

	if (
		(!match.ended_at && !match.started_at && now > createdAt15) ||
		(match.started_at && !match.ended_at && now > createdAtOneDay)
	) {
		match.ended_at = now;
		await updateMatch(match, {
			ended_at: now,
		});
	}

	return match;
}

export async function createMatch(matchSession: MatchSession, started?: boolean): Promise<Match> {
	const linkCode = uniqid.time();
	const spectateCode = uniqid();

	return getPrismaClient().match.create({
		data: {
			id: MatchConst.MATCH_ID_PREFIX + uuid(),
			link_code: linkCode,
			spectate_code: `${MatchConst.SPECTATE_LINK_CODE_PREFIX}${spectateCode}`,
			started_at: started ? new Date() : null,
			match_session_id: matchSession.id,
		},
	});
}

export async function updateMatch(match: Match, data: Prisma.MatchUncheckedUpdateInput) {
	if (!match.ended_at && data.ended_at) {
		const matchCacher = new MatchCacher(match.id);
		await matchCacher.forceUpdateMatchCache();
	}

	return getPrismaClient().match.update({
		where: {
			id: match.id,
		},
		data,
	});
}
