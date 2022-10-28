import MatchTypeLogic from './match_type_interface';
import {getEliminationPlayerStatus} from '../../../client/shared/game_logic/elimination';
import {MatchParticipant} from '../../schemas/MatchParticipant.schema';
import {Match} from '../../schemas/Match.schema';
import {GameType} from '../../../shared/match/consts';

export default class Elimination implements MatchTypeLogic {
	params() {
		return {
			eventName: GameType.ELIMINATION,
			defaultCubeType: '333',
			defaultMinPlayers: 2,
			defaultMaxPlayers: 2,
		};
	}

	playerStatus(player: MatchParticipant, match: Match) {
		const timeIndex = Math.max(0, (player?.solves?.length || 0) - 1);
		return getEliminationPlayerStatus(player.user_id, timeIndex, player?.solves, match);
	}
}
