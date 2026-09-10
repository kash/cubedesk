import HistoryDialog from '@/components/modules/history/HistoryDialog';
import Scramble from '@/components/modules/scramble/ScrambleVisual';
import SolveInfo from '@/components/solve-info/SolveInfo';
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
import {ArrowUpRight, Trash} from 'phosphor-react';
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
			<div className="absolute top-3 right-3 z-10">
				<Button
					variant="ghost"
					onClick={deletePb}
					size="icon-sm"
					className="text-text/35 hover:bg-error/10 hover:text-error opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100 aria-busy:opacity-100 [@media(hover:none)]:opacity-100"
					aria-label={`Remove ${cubeType?.name} ${single ? 'single' : 'average'}`}
					disabled={deleting}
					aria-busy={deleting}
				>
					<>{deleting ? <Spinner aria-hidden="true" /> : <Trash size={15} />}</>
				</Button>
			</div>
		);
	}

	if (!cubeType) {
		return null;
	}

	return (
		<>
			<Card className="group border-tmo-module/10 hover:border-tmo-module/25 relative gap-0 overflow-hidden rounded-xl p-0 shadow-none transition-colors">
				<button
					type="button"
					className="text-text focus-visible:ring-primary w-full p-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset"
					onClick={openSolve}
				>
					<div className="mb-5 flex items-center gap-2 pr-7">
						<span className="text-sm font-semibold">{cubeType.name}</span>
						<span className="bg-tmo-module/5 text-text/50 rounded-md px-1.5 py-0.5 text-[10px] font-medium">
							{single ? 'Single' : 'Average of 5'}
						</span>
					</div>
					<div className="flex items-center justify-between gap-3">
						<span className="text-4xl font-semibold tracking-tight tabular-nums">
							{getTimeString(time, 2)}
						</span>
						<div className="size-12 shrink-0 opacity-90">
							<Scramble
								frontFace
								compact
								scramble={scramble}
								cubeType={cubeType.id}
							/>
						</div>
					</div>
					<div className="border-tmo-module/10 text-text/40 mt-5 flex items-center justify-between border-t pt-3 text-xs">
						<span>
							{new Date(createdAt).toLocaleDateString(undefined, {
								month: 'short',
								day: 'numeric',
								year: 'numeric',
							})}
						</span>
						<ArrowUpRight
							size={14}
							className="group-hover:text-text transition-colors"
						/>
					</div>
				</button>
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
