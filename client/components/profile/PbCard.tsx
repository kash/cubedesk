import HistoryDialog from '@/components/modules/history/HistoryDialog';
import Scramble from '@/components/modules/scramble/ScrambleVisual';
import SolveInfo from '@/components/solve-info/SolveInfo';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Card} from '@/components/ui/card';
import {Dialog, DialogContent, DialogTitle} from '@/components/ui/dialog';
import {Spinner} from '@/components/ui/spinner';
import {getAverage} from '@/db/solves/stats/solves/average/average';
import {Solve} from '@/types/solve';
import {TopAverage, TopSolve} from '@/types/top-solve';
import {PublicUserAccount} from '@/types/user';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import {useMe} from '@/util/hooks/useMe';
import {getTimeString} from '@/util/time';
import {toastError} from '@/util/toast';
import {trpc} from '@/util/trpc';
import React, {useMemo, useState} from 'react';

interface Props {
	solves: Solve[];
	user: PublicUserAccount;
	topRecord: TopSolve | TopAverage;
}

export default function PbCard(props: Props) {
	const [solveInfoDialog, setSolveInfoDialog] = React.useState<React.ComponentProps<
		typeof SolveInfo
	> | null>(null);
	const [historyDialog, setHistoryDialog] = React.useState<React.ComponentProps<
		typeof HistoryDialog
	> | null>(null);

	const {solves, user, topRecord} = props;

	const single = solves.length === 1;
	const firstSolve = solves[0];
	const scramble = firstSolve.scramble;

	const me = useMe();
	const [deleted, setDeleted] = useState(false);
	const [deleting, setDeleting] = useState(false);

	const cubeType = useMemo(() => getCubeTypeInfoById(firstSolve.cube_type), []);
	const time = useMemo(() => {
		if (single) {
			return firstSolve.time;
		}
		return getAverage(solves);
	}, []);

	const createdAt = Number(solves[solves.length - 1].started_at);

	function openSolve() {
		if (single) {
			setSolveInfoDialog({disabled: true, solveId: firstSolve.id});
		} else {
			setHistoryDialog({
				solves: solves,
				description: `Average of ${solves.length} by ${user.username}`,
			});
		}
	}

	async function deletePb(e) {
		e.preventDefault();
		e.stopPropagation();

		setDeleting(true);

		try {
			if (single) {
				await trpc.leaderboards.deleteTopSolve.mutate({
					id: topRecord.id as string,
				});
			} else {
				await trpc.leaderboards.deleteTopAverage.mutate({
					id: topRecord.id as string,
				});
			}

			setDeleted(true);
		} catch (e) {
			toastError(e);
		} finally {
			setDeleting(false);
		}
	}

	if (deleted) {
		return null;
	}

	let actions: React.ReactNode = null;
	if (me?.id === user.id) {
		actions = (
			<div className="absolute top-0.5 left-2.5">
				<Button
					variant="destructive"
					onClick={deletePb}
					size="sm"
					disabled={deleting}
					aria-busy={deleting}
				>
					{'Remove'}
					{deleting ? <Spinner aria-hidden="true" /> : null}
				</Button>
			</div>
		);
	}

	if (!cubeType) {
		return null;
	}

	return (
		<>
			<Card className="relative p-0">
				<Button
					variant="ghost"
					className="h-auto w-full justify-between p-5 text-left whitespace-normal"
					onClick={openSolve}
				>
					<div>
						<span className="text-text text-[3rem] font-bold">
							{getTimeString(time, 2)}
						</span>
						<span className="text-text mt-[5px] table text-[0.85rem] opacity-70">
							{new Date(createdAt).toDateString()}
						</span>
					</div>
					<div className="flex flex-col items-end">
						<div className="mb-[5px] h-[70px] w-[70px]">
							<Scramble frontFace scramble={scramble} cubeType={cubeType.id} />
						</div>
						<Badge
							size="sm"
							variant="unfilled"
						>{`${cubeType.name} ${single ? 'Single' : 'Average'}`}</Badge>
					</div>
				</Button>
				{actions}
			</Card>
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
			<Dialog
				open={historyDialog !== null}
				onOpenChange={(open) => {
					if (!open) {
						setHistoryDialog(null);
					}
				}}
			>
				{historyDialog && (
					<DialogContent>
						<DialogTitle className="sr-only">Solve history</DialogTitle>
						<HistoryDialog {...historyDialog} />
					</DialogContent>
				)}
			</Dialog>
		</>
	);
}
