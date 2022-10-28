import {SolveMethodStep} from '../../../@types/generated/graphql';
import {Solve} from '../../../../server/schemas/Solve.schema';

export interface SolveStepWithChildren {
	step: SolveMethodStep;
	children: SolveMethodStep[];
}

export function getSolveStepsWithChildren(solve: Solve): SolveStepWithChildren[] {
	const steps = [];
	const children = [];

	for (const step of solve.solve_method_steps) {
		if (step.parent_name) {
			children.push(step);
		} else {
			steps.push({
				step,
				children: [],
			});
		}
	}

	for (const child of children) {
		for (const [index, step] of steps.entries()) {
			if (step.step_name === child.parent_name) {
				steps[index].children.push(child);
				break;
			}
		}
	}

	return steps;
}

export function getSolveStepsWithoutParents(solve: Solve) {
	const output = [];
	const steps = getSolveStepsWithChildren(solve);

	for (const step of steps) {
		if (step.children && step.children.length) {
			for (const child of step.children) {
				output.push(child);
			}
		} else {
			output.push(step.step);
		}
	}

	return output;
}
