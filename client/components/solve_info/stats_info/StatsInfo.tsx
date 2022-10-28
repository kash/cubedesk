import React from 'react';
import './StatsInfo.scss';
import StepPie from './step_pie/StepPie';
import RecognitionChart from './recognition_chart/RecognitionChart';
import ExecutionTime from './execution_time/ExecutionTime';
import LLTrainer, {getOllAndPllFromSolve} from './ll_trainer/LLTrainer';
import block from '../../../styles/bem';
import {Solve} from '../../../../server/schemas/Solve.schema';

const b = block('solve-info-stats-info');

interface Props {
	solve: Solve;
}

export default function StatsInfo(props: Props) {
	const {solve} = props;

	const time = solve.raw_time;
	const smartTurnCount = solve.smart_turn_count;
	const smartInspectionTime = solve.inspection_time;
	const tps = Math.floor((smartTurnCount / time) * 10) / 10;

	function getStatCard(icon: string, title: string, val: number | string) {
		return (
			<div className={b('card')}>
				<i className={icon} />
				<p>{title}</p>
				<h4>{val}</h4>
			</div>
		);
	}

	return (
		<div className={b()}>
			<div className={b('card').mix(b('section'))}>
				{getStatCard('ph-arrows-clockwise', 'Turns Per Second', tps)}
				{getStatCard('ph-timer', 'Inspection Time', smartInspectionTime ? smartInspectionTime + 's' : '-')}
				{getStatCard('ph-arrow-counter-clockwise', 'Turns', smartTurnCount)}
			</div>
			<hr />
			<div className={b('section')}>
				<StepPie solve={solve} />
			</div>
			<hr />
			<div className={b('section')}>
				<ExecutionTime solve={solve} />
			</div>
			<hr />
			<div className={b('section')}>
				<RecognitionChart solve={solve} />
			</div>
			{getOllAndPllFromSolve(solve) ? (
				<>
					<hr />
					<div className={b('section')}>
						<LLTrainer solve={solve} />
					</div>
				</>
			) : null}
		</div>
	);
}
