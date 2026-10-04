import type {RubiksCube} from '@/components/timer/smart-cube/visual/core/RubiksCube';
import {Button} from '@/components/ui/button';
import React, {useEffect, useRef} from 'react';

interface Props {
	onComplete?: () => void;
}

export default function SolveCheck(props: Props) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		let cube: RubiksCube | null = null;
		let cancelled = false;

		import('@/components/timer/smart-cube/visual').then(({default: RubiksCube, materials}) => {
			if (cancelled || !canvasRef.current) return;

			cube = new RubiksCube(canvasRef.current, materials.classic, 0, '160px', '160px', '');
			if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
				// Roll from the bottom right toward the top left
				cube.spin({x: -1, y: 1}, 0.6);
			}
		});

		return () => {
			cancelled = true;
			cube?.dispose();
		};
	}, []);

	return (
		<div className="mt-[15px] flex flex-col items-center">
			<canvas
				className="mb-[30px] size-[160px]"
				ref={canvasRef}
				aria-label="Solved Rubik's cube"
			/>
			<Button variant="default" onClick={props.onComplete}>
				{'My cube is solved'}
			</Button>
		</div>
	);
}
