import React from 'react';
import {fetchTrainerAlgorithmById} from '@/db/trainer/query';
import AlgoVisual from '@/components/trainer/AlgoVisual';
import {Solve} from '../../../../server/schemas/Solve.schema';

interface Props {
	solve: Solve;
}

export default function LLTrainer(props: Props) {
	const {solve} = props;
	const ollPll = getOllAndPllFromSolve(solve);

	if (!ollPll) {
		return null;
	}

	const ollAlgo = fetchTrainerAlgorithmById(ollPll.oll);
	const pllAlgo = fetchTrainerAlgorithmById(ollPll.pll);

	return (
		<div className="flex flex-row items-start">
			<div className="w-1/2">
				<h3 className="mb-5 mt-0 text-[1.1rem] font-semibold text-text">OLL</h3>
				<AlgoVisual colors={ollAlgo.colors} rotate={ollAlgo.rotate} cubeType={ollAlgo.cube_type} />
				<p className="my-[7px] text-text">{ollAlgo.name}</p>
			</div>
			<div className="w-1/2">
				<h3 className="mb-5 mt-0 text-[1.1rem] font-semibold text-text">PLL</h3>
				<AlgoVisual colors={pllAlgo.colors} rotate={pllAlgo.rotate} cubeType={pllAlgo.cube_type} />
				<p className="my-[7px] text-text">{pllAlgo.name}</p>
			</div>
		</div>
	);
}

export function getOllAndPllFromSolve(solve: Solve) {
	let oll = null;
	let pll = null;
	for (const step of solve.solve_method_steps) {
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
