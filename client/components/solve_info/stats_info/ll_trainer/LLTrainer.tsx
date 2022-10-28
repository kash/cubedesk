import React from 'react';
import './LLTrainer.scss';
import {fetchTrainerAlgorithmById} from '../../../../db/trainer/query';
import AlgoVisual from '../../../trainer/algo_visual/AlgoVisual';
import block from '../../../../styles/bem';
import {Solve} from '../../../../../server/schemas/Solve.schema';

const b = block('solve-info-ll-trainer');

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
		<div className={b()}>
			<div className={b('row')}>
				<h3>OLL</h3>
				<AlgoVisual colors={ollAlgo.colors} rotate={ollAlgo.rotate} cubeType={ollAlgo.cube_type} />
				<p>{ollAlgo.name}</p>
			</div>
			<div className={b('row')}>
				<h3>PLL</h3>
				<AlgoVisual colors={pllAlgo.colors} rotate={pllAlgo.rotate} cubeType={pllAlgo.cube_type} />
				<p>{pllAlgo.name}</p>
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
