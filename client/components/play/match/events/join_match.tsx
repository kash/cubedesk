import {getGameLink} from '../../game/Game';
import {useContext} from 'react';
import {MatchContext} from '../Match';
import {useSocketListener} from '../../../../util/hooks/useSocketListener';
import {MatchUpdate} from '../../../../shared/match/types';

export function listenForJoinEvents() {
	const matchContext = useContext(MatchContext);
	const {matchType, match} = matchContext;

	useSocketListener('matchStarted', onJoinMatch, [match]);

	/**
	 * Called when current user joins the match or has been waiting for a match and the match starts.
	 */
	async function onJoinMatch(data: MatchUpdate) {
		// Checking to see if it's a rematch
		if (data.match.id !== match.id) {
			window.location.href = getGameLink(matchType, data.match.link_code);
			return;
		}
	}
}
