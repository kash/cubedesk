import {getHeadToHeadPlayerStatusInfo} from '@/client/shared/game-logic/head-to-head';
import MatchTypeLogic from '@/server/match/match_types/match_type_interface';
import {GameType} from '@/shared/match/consts';
import {FullMatch, FullMatchParticipant} from '@/types/match';

export default class HeadToHead implements MatchTypeLogic {
	params() {
		return {
			eventName: GameType.HEAD_TO_HEAD,
			defaultCubeType: '333',
			defaultMinPlayers: 2,
			defaultMaxPlayers: 2,
		};
	}

	playerStatus(player: FullMatchParticipant, match: FullMatch) {
		const solves = player?.solves || [];
		return getHeadToHeadPlayerStatusInfo(player.user_id, solves.length - 1, solves, match);
	}
}
