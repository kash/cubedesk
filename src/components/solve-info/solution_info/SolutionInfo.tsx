import CopyText from '@/components/common/copy_text/CopyText';
import './SolutionInfo.scss';
import {STEP_NAME_MAP} from '@/components/solve-info/util/consts';
import {getSolveStepsWithChildren} from '@/components/solve-info/util/solution';
import {SolveMethodStep} from '@/generated/zod';
import {Solve} from '@/generated/zod';
import {processSmartTurns} from '@/lib/util/smart_scramble';
import {getTimeString} from '@/lib/util/time';
import block from '@/styles/bem';
import React, {ReactNode, useCallback} from 'react';

const b = block('solve-info-solution-info');

interface Props {
	solve: Solve;
}

export default function SolutionInfo(props: Props) {
	const {solve} = props;
	const steps = getSolveStepsWithChildren(solve);

	const getTps = useCallback(() => {
		return Math.floor((solve.smart_turn_count / solve.raw_time) * 100) / 100;
	}, [solve.smart_turn_count, solve.raw_time]);

	const getStep = useCallback((step: SolveMethodStep, isChild: boolean, children?: ReactNode[]) => {
		return (
			<div key={step.step_name} className={b('step', {child: isChild})}>
				<div className={b('header')}>
					<div className={b('header-left')}>
						<legend>{STEP_NAME_MAP[step.step_name]}</legend>
						<div className={b('step-stats')}>
							<span>{getTimeString(step.total_time)}s</span>
							<span>{step.turn_count} Turns</span>
							<span>{step.tps} TPS</span>
						</div>
					</div>

					<CopyText
						text={step.turns}
						buttonProps={{
							text: 'Copy moves',
						}}
					/>
				</div>
				{children ? <div className={b('children')}>{children}</div> : <p>{step.turns}</p>}
			</div>
		);
	}, []);

	const turns = JSON.parse(solve.smart_turns);
	const solution = processSmartTurns(
		turns.map((turn) => turn.turn),
		true,
	).join(' ');

	const stepsBody = [];
	for (const step of steps) {
		let children = null;
		if (step.children.length) {
			children = step.children.map((child) => getStep(child, true));
		}

		stepsBody.push(getStep(step.step, false, children));
	}

	return (
		<div className={b()}>
			<div className={b('steps')}>{stepsBody}</div>
			<hr />
			{getStep(
				{
					step_name: 'full',
					tps: getTps(),
					turn_count: solve.smart_turn_count,
					total_time: solve.time,
					turns: solution,
				},
				false,
			)}
		</div>
	);
}
