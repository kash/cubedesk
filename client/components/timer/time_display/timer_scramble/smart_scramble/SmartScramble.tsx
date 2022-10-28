import React, {ReactNode, useContext} from 'react';
import block from '../../../../../styles/bem';
import {isTwo, processSmartTurns, rawTurnIsSame, reverseScramble} from '../../../../../util/smart_scramble';
import {TimerContext} from '../../../Timer';

const b = block('timer-scramble');

export default function SmartScramble() {
	const context = useContext(TimerContext);

	const {smartTurns, scramble, smartCanStart} = context;

	const smartScramble = processSmartTurns(smartTurns);
	const failedMoves = [];
	let orangeMiddle = false;

	const scrambleParts = scramble.split(' ');
	let scrambleBody: ReactNode = scrambleParts.map((turn, i) => {
		const smartTurn = smartScramble[i];

		let green = false;
		let orange = false;
		let red = false;
		if (!failedMoves.length && smartScramble.length > i && smartTurn === turn && !orangeMiddle) {
			green = true;
		} else if (smartScramble.length > i && rawTurnIsSame(smartTurn, turn) && isTwo(turn) && !orangeMiddle) {
			orange = true;
			orangeMiddle = true;
		} else if (smartScramble.length > i) {
			red = true;
			failedMoves.push(smartTurn);
		}

		return (
			<span
				key={`${turn}-${i}`}
				className={b('body', {
					green,
					orange,
					red,
				})}
			>
				{turn}
			</span>
		);
	});

	if (failedMoves.length) {
		scrambleBody = reverseScramble(failedMoves).map((turn, i) => (
			<span key={`${turn}-${i}`} className={b('body', {red: true})}>
				{turn}
			</span>
		));
	}

	if (smartCanStart) {
		scrambleBody = <span className={b('body', {green: true})}>Ready to start</span>;
	} else if (failedMoves.length > 7) {
		scrambleBody = <span className={b('body', {red: true})}>Solve cube to proceed</span>;
	}

	return <>{scrambleBody}</>;
}
