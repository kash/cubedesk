import ScrambleVisual from '@/components/modules/scramble/ScrambleVisual';
import SolveInfo from '@/components/solve-info/SolveInfo';
import NumberBlock from '@/components/stats/common/NumberBlock';
import StatsGrid from '@/components/stats/common/StatsGrid';
import {useStatsContext} from '@/components/stats/Stats';
import {Dialog, DialogContent, DialogTitle} from '@/components/ui/dialog';
import {getTotalSolveCount, getTotalSolveTime} from '@/db/solves/stats/count';
import {getSinglePB} from '@/db/solves/stats/solves/single/single-pb';
import {Solve} from '@/types/solve';
import {getDateFromNow} from '@/util/dates';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import {getTimeString} from '@/util/time';
import {CalendarBlank, Hash, Timer, Trophy} from 'phosphor-react';
import React, {useMemo} from 'react';

export default function CubeStatsFeatured() {
	const [solveInfoDialog, setSolveInfoDialog] = React.useState<React.ComponentProps<
		typeof SolveInfo
	> | null>(null);

	const context = useStatsContext();

	const solveUpdate = useSolveDb();

	const singlePb = useMemo(() => {
		return getSinglePB(context.filterOptions);
		// The local solve database is mutable; its revision invalidates this query.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [context.filterOptions, solveUpdate]);

	const totalSolves = useMemo(() => {
		return getTotalSolveCount(context.filterOptions);
		// The local solve database is mutable; its revision invalidates this query.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [context.filterOptions, solveUpdate]);

	const timeSpentCubing = useMemo(() => {
		return getTotalSolveTime(context.filterOptions);
		// The local solve database is mutable; its revision invalidates this query.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [context.filterOptions, solveUpdate]);

	function openSolve(solve: Solve) {
		setSolveInfoDialog({solveId: solve.id});
	}

	const pbSolve = singlePb?.solve;
	const pbDate = new Date(pbSolve?.started_at ?? NaN);

	return (
		<>
			<div className="stats-cube-featured">
				<NumberBlock
					large
					onClick={pbSolve ? () => openSolve(pbSolve) : undefined}
					icon={<Trophy weight="bold" />}
					title="Single PB"
					value={getTimeString(singlePb?.time)}
					color="#23C586"
				>
					{pbSolve ? (
						<div className="stats-pb-details">
							<div className="stats-pb-date">
								<CalendarBlank size={18} />
								<div>
									<p>{pbDate.toLocaleDateString()}</p>
									<span>{getDateFromNow(pbDate)}</span>
								</div>
							</div>
							<div className="stats-pb-preview">
								<ScrambleVisual
									width="52px"
									frontFace
									scramble={pbSolve.scramble}
									cubeType={pbSolve.cube_type}
								/>
							</div>
						</div>
					) : (
						<p className="text-text/50 text-sm">
							Your first completed solve starts your record.
						</p>
					)}
				</NumberBlock>
				<StatsGrid rows={2} columns={1}>
					<NumberBlock
						center
						icon={<Hash weight="bold" />}
						title="Total Solves"
						value={totalSolves}
						color="#54ACE4"
					/>
					<NumberBlock
						center
						icon={<Timer weight="bold" />}
						title="Time Spent Cubing"
						value={
							timeSpentCubing < 60
								? `${getTimeString(timeSpentCubing)}s`
								: getTimeString(timeSpentCubing)
						}
						color="#6D7D90"
					/>
				</StatsGrid>
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
	);
}
