import HistoryDialog from '@/components/modules/history/HistoryDialog';
import {
	getStatsBlockDescription,
	getStatsBlockValueFromFilter,
} from '@/components/modules/quick-stats/util';
import SolveInfo from '@/components/solve-info/SolveInfo';
import {Dialog, DialogContent, DialogTitle} from '@/components/ui/dialog';
import {FilterSolvesOptions} from '@/db/solves/query';
import {StatsModuleBlock} from '@/types/stats-module';
import {useSettings} from '@/util/hooks/useSettings';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import {useColor} from '@/util/hooks/useTheme';
import {getTimeString} from '@/util/time';
import CSS from 'csstype';
import jsonStr from 'json-stable-stringify';
import React, {ReactNode, useMemo} from 'react';

interface Props {
	filterOptions?: FilterSolvesOptions;
	statOptions: StatsModuleBlock;
	rowSpan: number;
	colSpan: number;
	interactive?: boolean;
}

export default function QuickStatsBlock(props: Props) {
	const [historyDialog, setHistoryDialog] = React.useState<React.ComponentProps<
		typeof HistoryDialog
	> | null>(null);
	const [solveInfoDialog, setSolveInfoDialog] = React.useState<React.ComponentProps<
		typeof SolveInfo
	> | null>(null);

	const {filterOptions, statOptions, interactive = true} = props;
	const ValueElement = interactive ? 'button' : 'span';

	const sessionId = useSettings('session_id');
	const solveDb = useSolveDb();

	const [statsBlockSolvesFilter, statsBlockDescription] = useMemo(() => {
		return [
			getStatsBlockValueFromFilter(statOptions, filterOptions, sessionId),
			getStatsBlockDescription(statOptions, filterOptions),
		];
	}, [jsonStr(filterOptions), statOptions, sessionId, solveDb]);

	const solveCount = statsBlockSolvesFilter?.solves?.length;

	const blockClasses = [
		'grid',
		'grid-rows-[max-content_1fr]',
		'bg-tmo-module/5',
		'rounded-md',
		'w-full',
		'h-full',
		'p-1.5',
	];

	const buttonClasses = [
		'relative',
		'border-b-2',
		'border-solid',
		'border-transparent',
		'-translate-y-1/2',
		'top-[45%]',
		'p-0',
		'p-y-1',
		'font-bold',
		'table',
		'text-left',
		'text-text',
	];

	const buttonStyle: CSS.Properties = {
		fontSize: 'clamp(12px, min(33.333333cqh, 22.222222cqw), 70px)',
		lineHeight: 0.9,
	};
	const colorHex = useColor(statOptions.colorName, 'button_color');
	if (colorHex) {
		buttonStyle.color = colorHex.hex;
	}

	if (statsBlockSolvesFilter?.solve || solveCount) {
		buttonClasses.push('hover:border-current');
	}

	const statValue = getTimeString(statsBlockSolvesFilter?.time ?? 0);

	function openSolve(e) {
		const singleSolve = statsBlockSolvesFilter?.solve;

		if (solveCount && solveCount > 1) {
			setHistoryDialog({
				time: statsBlockSolvesFilter?.time,
				solves: statsBlockSolvesFilter?.solves ?? [],
				description: statsBlockDescription,
			});
		} else if (solveCount && singleSolve) {
			setSolveInfoDialog({solveId: singleSolve.id});
		} else {
			e.preventDefault();
		}
	}

	return (
		<>
			<div className="relative h-full w-full">
				{/* The grid sizes the outer block; containment only applies to its contents. */}
				<div className="absolute inset-0 [container-type:size]">
					<div className={blockClasses.join(' ')}>
						<div className="flex flex-row">
							<StatDescription statOptions={statOptions} />
						</div>
						<div className="relative flex h-full w-full items-start justify-center">
							<ValueElement
								onClick={interactive ? openSolve : undefined}
								className={buttonClasses.join(' ')}
								style={buttonStyle}
							>
								{statValue}
							</ValueElement>
						</div>
					</div>
				</div>
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

interface DescProps {
	statOptions: StatsModuleBlock;
}

function StatDescription(props: DescProps) {
	const {statOptions} = props;

	if (!statOptions) {
		return null;
	}

	const {statType, averageCount, sortBy, session} = statOptions;

	const text: ReactNode[] = [];
	if (session) {
		text.push('ses.');
	}

	if (statType === 'average') {
		if (averageCount) {
			text.push('ao' + String(averageCount));
		} else {
			text.push('avg');
		}
	}

	if (sortBy === 'best') {
		text.push('pb');
	} else if (sortBy === 'worst') {
		text.push('worst');
	}

	return <span className="px-0.5 text-[0.8rem] text-text/70">{text.join(' ')}</span>;
}
