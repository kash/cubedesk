import {StackMatStatus} from '@/components/timer/time-display/stackmat/useStackMat';
import StartInstructions from '@/components/timer/time-display/StartInstructions';
import React, {ReactNode} from 'react';

interface Props {
	status: StackMatStatus;
}

const MESSAGES: Partial<Record<StackMatStatus, ReactNode>> = {
	select: (
		<>
			Select your <span>StackMat</span> input to start
		</>
	),
	permission: (
		<>
			Allow microphone access to use <span>StackMat</span>
		</>
	),
	missing: (
		<>
			Plug in your <span>StackMat</span> or select its input again
		</>
	),
	blocked: (
		<>
			Click anywhere to connect <span>StackMat</span>
		</>
	),
	off: (
		<>
			Connect and turn on <span>StackMat</span>
		</>
	),
	reset: (
		<>
			Reset <span>StackMat</span> to start
		</>
	),
};

export default function StackMat({status}: Props) {
	return (
		<StartInstructions>
			{MESSAGES[status] ?? (
				<>
					Place hands on <span>StackMat</span> to start
				</>
			)}
		</StartInstructions>
	);
}
