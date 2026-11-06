import {StackMatStatus} from '@/components/timer/time-display/stackmat/useStackMat';
import StartInstructions from '@/components/timer/time-display/StartInstructions';
import React from 'react';

interface Props {
	status: StackMatStatus;
}

export default function StackMat({status}: Props) {
	if (status === 'off') {
		return (
			<StartInstructions>
				Connect and turn on <span>StackMat</span>
			</StartInstructions>
		);
	}

	if (status === 'reset') {
		return (
			<StartInstructions>
				Reset <span>StackMat</span> to start
			</StartInstructions>
		);
	}

	return (
		<StartInstructions>
			Place hands on <span>StackMat</span> to start
		</StartInstructions>
	);
}
