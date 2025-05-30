import {PlayerStatusInfo} from '../../../components/play/game/Game';
import {MatchParticipant} from '@/generated/zod';
import {Match} from '@/generated/zod';
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
