import {PlayerStatusInfo} from '../../../client/components/play/game/Game';
import {MatchParticipant} from '@/types/match';
import {Match} from '@/types/match';
import {GameType} from '../../../shared/match/consts';

export interface MatchTypeParams {
	eventName: GameType;
	defaultCubeType: string;
	defaultMinPlayers: number;
	defaultMaxPlayers: number;
}

export default interface MatchTypeLogic {
	params(): MatchTypeParams;

	playerStatus(player: MatchParticipant, match: Match): PlayerStatusInfo;
}
