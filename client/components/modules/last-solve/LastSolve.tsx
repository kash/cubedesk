import Empty from '@/components/common/Empty';
import Scramble from '@/components/modules/scramble/ScrambleVisual';
import DeleteSolveDialog, {useSolveDeletion} from '@/components/solve-info/DeleteSolveDialog';
import SolveInfo from '@/components/solve-info/SolveInfo';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent, DialogTitle} from '@/components/ui/dialog';
import {toggleDnfSolveDb, togglePlusTwoSolveDb} from '@/db/solves/operations';
import {fetchLastSolve, fetchSolve, FilterSolvesOptions} from '@/db/solves/query';
import {cn} from '@/util/cn';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import {getTimeString} from '@/util/time';
import {Info} from 'phosphor-react';
import React from 'react';

interface Props {
	filterOptions: FilterSolvesOptions;
}

function LastSolve(props: Props) {
	const deletion = useSolveDeletion();
	const [solveInfoDialog, setSolveInfoDialog] = React.useState<React.ComponentProps<
		typeof SolveInfo
	> | null>(null);

	useSolveDb();

	const {filterOptions} = props;
	const lastSolve = fetchLastSolve(filterOptions);

	if (!lastSolve) {
		return <Empty text="No solves yet" centered />;
	}

	const dnf = lastSolve.dnf;
	const plusTwo = lastSolve.plus_two;
	const cubeType = lastSolve.cube_type;
	const scramble = lastSolve.scramble;

	const time = getTimeString(lastSolve.time);
	const cubeTypeName = getCubeTypeInfoById(cubeType)?.name ?? cubeType;

	// Captured after the null check above so the callbacks don't re-narrow lastSolve
	const solveId = lastSolve.id;

	function plusTwoAction() {
		const dbSolve = fetchSolve(solveId);
		if (!dbSolve) {
			return;
		}

		togglePlusTwoSolveDb(dbSolve);
	}

	function dnfAction() {
		const dbSolve = fetchSolve(solveId);
		if (!dbSolve) {
			return;
		}

		toggleDnfSolveDb(dbSolve);
	}

	function showSolveInfo() {
		setSolveInfoDialog({solveId: solveId});
	}

	function deleteAction() {
		const dbSolve = fetchSolve(solveId);
		if (!dbSolve) {
			return;
		}

		deletion.requestDelete(dbSolve);
	}

	const timeClasses = [
		'text-[2.3rem]',
		'font-bold',
		dnf ? 'text-error' : plusTwo ? 'text-warning' : 'text-text',
	];

	return (
		<>
			<>
				<div className="relative flex h-full justify-center">
					<div className="box-border flex w-full flex-row items-start justify-between">
						<div className="mb-[15px]">
							<h5 className="text-text text-[0.9rem] font-medium opacity-70">
								Last Solve
							</h5>
							<h4 className={timeClasses.join(' ')}>{time}</h4>
							<h6 className="text-text text-base font-medium opacity-70">
								{cubeTypeName}
							</h6>
						</div>
						<div>
							<Scramble
								frontFace
								width="70px"
								scramble={scramble}
								cubeType={cubeType}
							/>
						</div>
					</div>

					<div className="absolute bottom-0 left-0 flex w-full flex-row items-center justify-between">
						<div className="flex flex-row gap-[5px]">
							<Button
								variant="secondary"
								onClick={showSolveInfo}
								size="icon-sm"
								aria-label="View solve details"
							>
								<Info weight="bold" />
							</Button>
							<Button
								variant="secondary"
								aria-pressed={plusTwo}
								className={cn({'text-warning': plusTwo})}
								onClick={plusTwoAction}
								size="sm"
							>
								{'+2'}
							</Button>
							<Button
								variant="secondary"
								aria-pressed={dnf}
								className={cn({'text-error': dnf})}
								onClick={dnfAction}
								size="sm"
							>
								{'DNF'}
							</Button>
						</div>
						<div className="flex flex-row gap-[5px]">
							<Button
								variant="destructive"
								title="Delete solve"
								onClick={deleteAction}
								size="sm"
							>
								{'Delete'}
							</Button>
						</div>
					</div>
				</div>
				<Dialog
					open={solveInfoDialog !== null}
					onOpenChange={(open) => {
						if (!open) {
							setSolveInfoDialog(null);
						}
					}}
				>
					{solveInfoDialog && (
						<DialogContent>
							<DialogTitle className="sr-only">Solve details</DialogTitle>
							<SolveInfo
								{...solveInfoDialog}
								onComplete={() => {
									setSolveInfoDialog((current) =>
										current === solveInfoDialog ? null : current,
									);
								}}
							/>
						</DialogContent>
					)}
				</Dialog>
			</>
			<DeleteSolveDialog {...deletion.dialogProps} />
		</>
	);
}

export default LastSolve;
