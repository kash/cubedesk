import {MatchConst} from '@/shared/match/consts';
import {trpc} from '@/util/trpc';
import {Match} from '@/types/match';

const matchCache: Record<string, Match> = {};

export async function getExistingMatch(
	userId: string, // When null, the first participant will be used
	linkCode?: string,
	forceFetch?: boolean
): Promise<Match | null> {
	if (!linkCode) {
		return null;
	}

	// Checking for cached match first
	if (matchCache[linkCode] && !forceFetch) {
		return matchCache[linkCode];
	}

	let result;
	if (linkCode.startsWith(MatchConst.SPECTATE_LINK_CODE_PREFIX)) {
		result = await trpc.match.bySpectateCode.query({code: linkCode});
	} else {
		result = await trpc.match.byLinkCode.query({code: linkCode});
	}

	// The rest of the match subsystem (socket.io payloads included) types matches
	// with the Match schema class, whose Date fields are already strings at runtime
	const match = result as unknown as Match;

	// Cache match for lookup later
	if (match && match.id) {
		matchCache[linkCode] = match;
	}

	return match;
}
