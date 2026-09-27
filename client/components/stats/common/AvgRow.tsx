import {useTranslation} from 'react-i18next';
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
	const {t} = useTranslation();
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

		const desc = t(pb ? 'stats.bestAverageOfCount' : 'stats.averageOfCount', {
			amount: localCount,
		});
		setHistoryDialog({solves: avg.solves ?? [], description: desc});
	}

	return (
		<>
			<div className={classNames('stats-average-row', className)}>
				<p>
					{t(pb ? 'stats.bestAverageOfCount' : 'stats.averageOfCount', {
						amount: localCount,
					})}
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
					<DialogContent closeLabel={t('common.closeDialog')}>
						<DialogTitle className="sr-only">{t('solves.solveHistory')}</DialogTitle>
						<HistoryDialog {...historyDialog} />
					</DialogContent>
				)}
			</Dialog>
		</>
	);
}
