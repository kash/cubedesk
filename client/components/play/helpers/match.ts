import {gql} from '@apollo/client';
import {MATCH_FRAGMENT, PUBLIC_USER_WITH_ELO_FRAGMENT} from '../../../util/graphql/fragments';
import {gqlQuery} from '../../api';
import {MatchConst} from '../../../shared/match/consts';
import {Match} from '../../../../server/schemas/Match.schema';
import {MatchSession} from '../../../../server/schemas/MatchSession.schema';

const matchCache: Record<string, Match> = {};

export async function getMatchSession(match) {
	interface MatchSessionQuery {
		matchSession: MatchSession;
	}

	const query = gql`
		${PUBLIC_USER_WITH_ELO_FRAGMENT}

		query Query($id: String) {
			matchSession(id: $id) {
				min_players
				max_players
				match_type
				custom_match
				created_at
				chat_messages {
					id
					message
					created_at
					user {
						...PublicUserWithEloFragment
					}
				}
			}
		}
	`;

	const res = await gqlQuery<MatchSessionQuery>(
		query,
		{
			id: match.match_session_id,
		},
		'no-cache'
	);

	return res.data.matchSession;
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

	let query;
	let method;
	if (linkCode.startsWith(MatchConst.SPECTATE_LINK_CODE_PREFIX)) {
		method = 'matchBySpectateCode';
		query = gql`
			${MATCH_FRAGMENT}
			query Mutate($code: String) {
				matchBySpectateCode(code: $code) {
					...MatchFragment
				}
			}
		`;
	} else {
		method = 'matchByLinkCode';
		query = gql`
			${MATCH_FRAGMENT}
			query Mutate($code: String) {
				matchByLinkCode(code: $code) {
					...MatchFragment
				}
			}
		`;
	}

	const res = await gqlQuery(query, {
		code: linkCode,
	});

	// Cache match for lookup later
	const match = res.data[method];
	if (match && match.id) {
		matchCache[linkCode] = match;
	}

	return match;
}
