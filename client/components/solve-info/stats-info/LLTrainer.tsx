import AlgoVisual from '@/components/trainer/AlgoVisual';
import {fetchTrainerAlgorithmById} from '@/db/trainer/query';
import {Solve} from '@/types/solve';
import React from 'react';

interface Props {
	solve: Solve;
}

export default function LLTrainer(props: Props) {
	const {solve} = props;
	const ollPll = getOllAndPllFromSolve(solve);

	if (!ollPll) {
		return null;
	}

	const ollAlgo = ollPll.oll ? fetchTrainerAlgorithmById(ollPll.oll) : null;
	const pllAlgo = ollPll.pll ? fetchTrainerAlgorithmById(ollPll.pll) : null;

	if (!ollAlgo || !pllAlgo) {
		return null;
	}

	return (
		<div className="flex flex-row items-start">
			<div className="w-1/2">
				<h3 className="mb-5 mt-0 text-[1.1rem] font-semibold text-text">OLL</h3>
				<AlgoVisual colors={ollAlgo.colors ?? undefined} rotate={ollAlgo.rotate ?? undefined} cubeType={ollAlgo.cube_type} />
				<p className="my-[7px] text-text">{ollAlgo.name}</p>
			</div>
			<div className="w-1/2">
				<h3 className="mb-5 mt-0 text-[1.1rem] font-semibold text-text">PLL</h3>
				<AlgoVisual colors={pllAlgo.colors ?? undefined} rotate={pllAlgo.rotate ?? undefined} cubeType={pllAlgo.cube_type} />
				<p className="my-[7px] text-text">{pllAlgo.name}</p>
			</div>
		</div>
	);
}

export function getOllAndPllFromSolve(solve: Solve) {
	let oll: string | null = null;
	let pll: string | null = null;
	for (const step of solve.solve_method_steps || []) {
		if (step.oll_case_key) {
			oll = step.oll_case_key;
		}
		if (step.pll_case_key) {
			pll = step.pll_case_key;
		}
	}

	if (!oll && !pll) {
		return null;
	}

	return {
		oll,
		pll,
	};
}
