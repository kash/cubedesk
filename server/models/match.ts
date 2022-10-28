import {getPrisma} from '../database';
import uniqid from 'uniqid';
import dayjs from 'dayjs';
import {Prisma} from '@prisma/client';
import {v4 as uuid} from 'uuid';
import {Match} from '../schemas/Match.schema';
import {MatchSession} from '../schemas/MatchSession.schema';
import {MatchConst} from '../../client/shared/match/consts';
import {publicUserInclude} from './user_account';
import {PublicUserAccount} from '../schemas/UserAccount.schema';
import {MatchCacher} from '../match/update/match_cacher';

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

export async function getMatchById(id: string, includeChat?: boolean) {
	const match = await getPrisma().match.findUnique({
		where: {
			id,
		},
		include: matchInclude(includeChat),
	});

	return cleanMatch(match);
}

export async function getUserMatchCount(user: PublicUserAccount) {
	return getPrisma().matchParticipant.aggregate({
		_count: {
			id: true,
		},
		where: {
			user_id: user.id,
		},
	});
}

export async function getMatchBySpectateCode(code: string, includeChat?: boolean) {
	const match = await getPrisma().match.findUnique({
		where: {
			spectate_code: code,
		},
		include: matchInclude(includeChat),
	});

	delete match.link_code;

	return cleanMatch(match);
}

export async function getMatchByLinkCode(code: string, includeChat?: boolean) {
	const match = await getPrisma().match.findUnique({
		where: {
			link_code: code,
		},
		include: matchInclude(includeChat),
	});

	return cleanMatch(match);
}

export async function cleanMatch(match): Promise<Match> {
	if (!match) {
		return match;
	}
	if (match.participants) {
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

	return getPrisma().match.create({
		data: {
			id: MatchConst.MATCH_ID_PREFIX + uuid(),
			link_code: linkCode,
			spectate_code: `${MatchConst.SPECTATE_LINK_CODE_PREFIX}${spectateCode}`,
			started_at: started ? new Date() : null,
			match_session_id: matchSession.id,
		},
	});
}

export async function updateMatch(match, data: Prisma.MatchUncheckedUpdateInput) {
	if (!match.ended_at && data.ended_at) {
		const matchCacher = new MatchCacher(match.id);
		await matchCacher.forceUpdateMatchCache();
	}

	return getPrisma().match.update({
		where: {
			id: match.id,
		},
		data,
	});
}
