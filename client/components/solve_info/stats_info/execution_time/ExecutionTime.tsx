import React from 'react';
import './ExecutionTime.scss';
import {getSolveStepsWithoutParents} from '../../util/solution';
import {getTimeString} from '../../../../util/time';
import {STEP_NAME_MAP} from '../../util/consts';
import block from '../../../../styles/bem';
import {Solve} from '../../../../../server/schemas/Solve.schema';

const b = block('solve-info-exec-time');

interface Props {
	solve: Solve;
}

export default function ExecutionTime(props: Props) {
	const {solve} = props;

	const steps = getSolveStepsWithoutParents(solve);
	const parts = [];

	let totalTime = 0;
	for (const step of steps) {
		totalTime += step.recognition_time;
		totalTime += step.total_time;
	}

	for (const step of steps) {
		parts.push(
			<div
				key={step.step_name + 'rec'}
				className={b('time', {rec: true})}
				style={{
					width: `${(step.recognition_time / totalTime) * 100}%`,
				}}
			>
				<p />
				<span />
				<p />
			</div>
		);

		parts.push(
			<div
				key={step.step_name}
				className={b('time')}
				style={{
					width: `${(step.total_time / totalTime) * 100}%`,
				}}
			>
				<p>{STEP_NAME_MAP[step.step_name]}</p>
				<span />
				<p>{getTimeString(step.total_time, 1)}s</p>
			</div>
		);
	}

	return (
		<div className={b()}>
			<h3>Execution Time</h3>
			<div className={b('body')}>{parts}</div>
		</div>
	);
}
