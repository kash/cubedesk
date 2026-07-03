import MatchTypeLogic from './match_type_interface';
import {getHeadToHeadPlayerStatusInfo} from '../../../client/shared/game-logic/head-to-head';
import {MatchParticipant} from '@/types/match';
import {Match} from '@/types/match';
import {GameType} from '../../../shared/match/consts';

export default class HeadToHead implements MatchTypeLogic {
	params() {
		return {
			eventName: GameType.HEAD_TO_HEAD,
			defaultCubeType: '333',
			defaultMinPlayers: 2,
			defaultMaxPlayers: 2,
		};
	}

	playerStatus(player: MatchParticipant, match: Match) {
		const solves = player?.solves || [];
		return getHeadToHeadPlayerStatusInfo(player.user_id, solves.length - 1, solves, match);
	}
}
