import HistoryDialog from '@/components/modules/history/HistoryDialog';
import {useStatsContext} from '@/components/stats/Stats';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent, DialogTitle} from '@/components/ui/dialog';
import {getCurrentAverage} from '@/db/solves/stats/solves/average/average';
import {getAveragePB} from '@/db/solves/stats/solves/average/average-pb';
import {SolveStat} from '@/db/solves/stats/solves/caching';
import {getTimeString} from '@/util/time';
import classNames from 'classnames';
import React from 'react';

interface Props {
	count: number;
	pb?: boolean;
	className?: string;
}

export default function AvgRow(props: Props) {
	const [historyDialog, setHistoryDialog] = React.useState<React.ComponentProps<
		typeof HistoryDialog
	> | null>(null);

	const context = useStatsContext();
	const filter = context.filterOptions;
	const {count, pb, className} = props;

	let avg: SolveStat | null;
	if (pb) {
		avg = getAveragePB(filter, count);
	} else {
		avg = getCurrentAverage(filter, count);
	}

	const localCount = count.toLocaleString();

	function openSolveDialog() {
		if (!avg) {
			return;
		}

		const descPrefix = pb ? 'Best ' : '';
		const desc = descPrefix + `Average of ${localCount}`;
		setHistoryDialog({solves: avg.solves ?? [], description: desc});
	}

	const highlightClass = 'font-medium text-text';
	const bestSpan = pb ? <span className={highlightClass}>Best</span> : null;

	return (
		<>
			<div className={classNames('stats-average-row', className)}>
				<p>
					{bestSpan} {pb ? 'a' : 'A'}verage of{' '}
					<span className={highlightClass}>{count.toLocaleString()}</span>
				</p>
				<Button
					variant="ghost"
					className="h-auto p-0 font-normal whitespace-normal hover:bg-transparent"
					onClick={openSolveDialog}
					type="button"
					disabled={!avg}
				>
					{getTimeString(avg?.time)}
				</Button>
			</div>
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
