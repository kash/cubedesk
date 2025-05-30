import {getExistingMatch} from '@/components/play/helpers/match';
import {IMatchContext} from '../Match';
import {IGameContext} from '@/components/play/game/Game';
import {UserAccount} from '@/generated/zod';
import {socketClient} from '@/lib/util/socket/socketio';
import {updateMatchState} from '../helpers/state';

export async function setExistingMatchData(
	me: UserAccount,
	gameContext: IGameContext,
	matchContext: IMatchContext,
	forceFetch?: boolean,
	linkCode?: string
) {
	const {matchLoaded, spectating, matchOver, setMatchOver, watchingPlayerId, setMatch, setMatchSession} = matchContext;

	const matchLinkCode = linkCode || gameContext.linkCode;
	if (matchLoaded.current && !forceFetch) {
		return;
	}

	const match = await getExistingMatch(null, matchLinkCode, forceFetch);
	if (!match) {
		throw new Error('Invalid link code');
	}

	if (spectating && !watchingPlayerId.current) {
		const players = match.participants || [];
		watchingPlayerId.current = players.length ? players[0].user_id : null;
	}
	const userId = watchingPlayerId.current || me.id;

	updateMatchState(match, matchOver, userId, gameContext, setMatch, setMatchSession, setMatchOver);

	socketClient().emit('playerEnteredMatch', match?.id);
}
