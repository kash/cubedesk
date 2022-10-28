import {processSmartTurns, SmartTurn} from '../../../util/smart_scramble';

export function preflightChecks(smartTurns: SmartTurn[], scramble: string) {
	const smartScramble = processSmartTurns(smartTurns).join(' ');

	return scramble === smartScramble;
}
