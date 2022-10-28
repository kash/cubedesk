import {MatchConst} from '../../../../shared/match/consts';
import {socketClient} from '../../../../util/socket/socketio';
import {useContext} from 'react';
import {MatchContext} from '../Match';

export function handleOpenMatchLink() {
	const {matchLoaded, linkCode} = useContext(MatchContext);

	if (matchLoaded.current || !linkCode) {
		return;
	}

	if (linkCode.startsWith(MatchConst.SPECTATE_LINK_CODE_PREFIX)) {
		// Join spectate room if the link code starts with "spec_"
		socketClient().emit('playerJoinedSpectateMode', linkCode);
	} else {
		// Join match room if the link code doesn't start with "spec_"
		socketClient().emit('playerJoinedMatchByLinkCode', linkCode);
	}
}
