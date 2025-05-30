import {MatchConst} from '@/lib/shared/match/consts';
import {Match} from '@/generated/zod';
import {MatchSession} from '@/generated/zod';
import {api} from '@/trpc/react';

const matchCache: Record<string, Match> = {};

export async function getMatchSession(match) {
	// TODO: Migrate to tRPC - need match.getMatchSession query
	// const matchSessionQuery = api.match.getMatchSession.useQuery({
	// 	id: match.match_session_id,
	// });
	// return matchSessionQuery.data;

	return null;
}

export async function getExistingMatch(
	userId: string, // When null, the first participant will be used
	linkCode: string,
	forceFetch?: boolean
): Promise<Match> {
	if (!linkCode) {
		return null;
	}

	// Checking for cached match first
	if (matchCache[linkCode] && !forceFetch) {
		return matchCache[linkCode];
	}

	// TODO: Migrate to tRPC - need match.getByLinkCode and match.getBySpectateCode queries
	let match;
	if (linkCode.startsWith(MatchConst.SPECTATE_LINK_CODE_PREFIX)) {
		// match = await api.match.getBySpectateCode.query({ code: linkCode });
		match = null;
	} else {
		// match = await api.match.getByLinkCode.query({ code: linkCode });
		match = null;
	}

	// Cache match for lookup later
	if (match && match.id) {
		matchCache[linkCode] = match;
	}

	return match;
}
