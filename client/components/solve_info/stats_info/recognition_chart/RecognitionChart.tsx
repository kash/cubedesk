import React from 'react';
import './RecognitionChart.scss';
import {getSolveStepsWithoutParents} from '../../util/solution';
import {STEP_NAME_MAP} from '../../util/consts';
import {getTimeString} from '../../../../util/time';
import {SolveMethodStep} from '../../../../@types/generated/graphql';
import block from '../../../../styles/bem';
import {Solve} from '../../../../../server/schemas/Solve.schema';

const b = block('solve-info-rec-chart');

interface Props {
	solve: Solve;
}

export default function RecognitionChart(props: Props) {
	const {solve} = props;
	const rawTime = solve.raw_time;

	function getChartBar(step: SolveMethodStep, percent: number, gray: boolean = false) {
		const recTime = step.recognition_time;
		const percentString = Math.floor((recTime / rawTime) * 1000) / 100;

		return (
			<div key={step.step_name} className={b('bar', {gray})}>
				<div className={b('left')}>{STEP_NAME_MAP[step.step_name]}</div>
				<div className={b('right')}>
					<span className={b('right-bar')} style={{width: `${percent}%`}} />
					<p>
						{getTimeString(recTime, 1)}s {gray ? null : `(${percentString}%)`}
					</p>
				</div>
			</div>
		);
	}

	const steps = getSolveStepsWithoutParents(solve);
	const output = [];

	let totalRecTime = 0;

	for (const step of steps) {
		totalRecTime += step.recognition_time;
	}

	for (const step of steps) {
		output.push(getChartBar(step, (step.recognition_time / totalRecTime) * 100));
	}

	return (
		<div className={b()}>
			<h3>Recognition Time</h3>
			{getChartBar(
				{
					step_name: 'inspection',
					recognition_time: solve.inspection_time,
				},
				100,
				true
			)}
			{output}
		</div>
	);
}
