import {getGameLink} from '@/components/play/game/Game';
import {useMatchContext} from '@/components/play/match/Match';
import {useSocketListener} from '@/util/hooks/useSocketListener';
import {MatchUpdate} from '@/shared/match/types';

export function listenForJoinEvents() {
	const matchContext = useMatchContext();
	const {matchType, match} = matchContext;

	useSocketListener('matchStarted', onJoinMatch, [match]);

	/**
	 * Called when current user joins the match or has been waiting for a match and the match starts.
	 */
	async function onJoinMatch(data: MatchUpdate) {
		// Checking to see if it's a rematch
		if (match && data.match.id !== match.id) {
			window.location.href = getGameLink(matchType, data.match.link_code);
			return;
		}
	}
}
