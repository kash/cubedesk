import {Solve} from '../../../../server/schemas/Solve.schema';
import {SolveMethodStep} from '../../../../server/schemas/SolveStepMethod.schema';

export interface SolveStepWithChildren {
	step: SolveMethodStep;
	children: SolveMethodStep[];
}

export function getSolveStepsWithChildren(solve: Solve): SolveStepWithChildren[] {
	const steps: SolveStepWithChildren[] = [];
	const children: SolveMethodStep[] = [];

	for (const step of solve.solve_method_steps || []) {
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
			if (step.step.step_name === child.parent_name) {
				steps[index].children.push(child);
				break;
			}
		}
	}

	return steps;
}

export function getSolveStepsWithoutParents(solve: Solve): SolveMethodStep[] {
	const output: SolveMethodStep[] = [];
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
