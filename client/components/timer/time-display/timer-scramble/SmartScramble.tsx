import {useTimerContext} from '@/components/timer/Timer';
import {isTwo, processSmartTurns, rawTurnIsSame, reverseScramble} from '@/util/smart_scramble';
import classNames from 'classnames';
import React, {ReactNode} from 'react';

function turnClassName({green, orange, red}: {green?: boolean; orange?: boolean; red?: boolean}) {
	return classNames(
		'mr-[0.8rem] transition-all duration-100 ease-in-out [color:inherit] [font-family:inherit] [line-height:inherit] [text-shadow:0_1px_7px_rgba(0,0,0,0.2)] last:mr-0',
		green && '!text-success',
		orange && '!text-warning',
		red && '!text-error'
	);
}

export default function SmartScramble() {
	const context = useTimerContext();

	const {smartTurns, scramble, smartCanStart} = context;

	const smartScramble = processSmartTurns(smartTurns);
	const failedMoves: string[] = [];
	let orangeMiddle = false;

	const scrambleParts = (scramble ?? '').split(' ');
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
			<span key={`${turn}-${i}`} className={turnClassName({green, orange, red})}>
				{turn}
			</span>
		);
	});

	if (failedMoves.length) {
		scrambleBody = reverseScramble(failedMoves).map((turn, i) => (
			<span key={`${turn}-${i}`} className={turnClassName({red: true})}>
				{turn}
			</span>
		));
	}

	if (smartCanStart) {
		scrambleBody = <span className={turnClassName({green: true})}>Ready to start</span>;
	} else if (failedMoves.length > 7) {
		scrambleBody = <span className={turnClassName({red: true})}>Solve cube to proceed</span>;
	}

	return <>{scrambleBody}</>;
}
