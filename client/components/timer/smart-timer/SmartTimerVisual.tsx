import {cn} from '@/util/cn';
import React from 'react';

export type SmartTimerPhase = 'idle' | 'hands_on' | 'ready' | 'running' | 'stopped';

interface Props {
	connected: boolean;
	phase: SmartTimerPhase;
}

/** A timer that mirrors the real one, the way the smart cube visual mirrors the cube: its pads light up under your hands */
export default function SmartTimerVisual(props: Props) {
	const {connected, phase} = props;

	const pad = cn('fill-none transition-[stroke] duration-150', {
		'stroke-text/25': phase !== 'hands_on' && phase !== 'ready',
		'stroke-warning': phase === 'hands_on',
		'stroke-success': phase === 'ready',
	});

	return (
		<svg
			viewBox="0 0 200 44"
			strokeWidth="2"
			className={cn('w-36 transition-[filter,opacity] duration-300', {
				'opacity-50 grayscale': !connected,
			})}
			role="img"
			aria-label="Smart timer"
		>
			<rect x="1" y="1" width="198" height="42" rx="21" className="stroke-text/25 fill-none" />
			{/* Pads share their center with the rounded ends, so the gap to the edge is even all the way around */}
			<circle cx="22" cy="22" r="15" className={pad} />
			<circle cx="178" cy="22" r="15" className={pad} />
			<rect x="80" y="15" width="40" height="14" rx="4" className="stroke-text/25 fill-none" />
			{phase === 'running' && (
				<g className="fill-primary">
					{[92, 100, 108].map((cx, i) => (
						<circle
							key={cx}
							cx={cx}
							cy="22"
							r="1.75"
							className="motion-safe:animate-pulse"
							style={{animationDelay: `${i * 150}ms`}}
						/>
					))}
				</g>
			)}
		</svg>
	);
}
