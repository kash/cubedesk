import {PlayerStatusInfo} from '@/components/play/game/Game';
import {GameType} from '@/shared/match/consts';
import {FullMatch, FullMatchParticipant} from '@/types/match';

export interface MatchTypeParams {
	eventName: GameType;
	defaultCubeType: string;
	defaultMinPlayers: number;
	defaultMaxPlayers: number;
}

export default interface MatchTypeLogic {
	params(): MatchTypeParams;

	playerStatus(player: FullMatchParticipant, match: FullMatch): PlayerStatusInfo;
}
