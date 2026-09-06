import {addStatsModuleBlock, removeStatsModuleBlock} from '@/actions/stats';
import CustomizeStatsEditor from '@/components/modules/quick-stats/customize-stats/CustomizeStatsEditor';
import QuickStatsBlock from '@/components/modules/quick-stats/QuickStatsBlock';
import {
	getQuickStatsGridSizes,
	getStatsBlockDescription,
	saveStatsModuleBlocks,
	STATS_GRID_SIZE,
} from '@/components/modules/quick-stats/util';
import {Button} from '@/components/ui/button';
import {FilterSolvesOptions} from '@/db/solves/query';
import {RootState} from '@/reducers/reducers';
import {defaultStatsModuleBlocks} from '@/reducers/stats';
import {StatsModuleBlock} from '@/types/stats-module';
import {cn} from '@/util/cn';
import {toastError} from '@/util/toast';
import {Plus} from 'phosphor-react';
import React, {useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

interface Props {
	filterOptions: FilterSolvesOptions;
}

export default function CustomizeStats(props: Props) {
	const {filterOptions} = props;

	const dispatch = useDispatch();
	const [selectedIndex, setSelectedIndex] = useState(0);

	const stats = useSelector((state: RootState) => state?.stats);
	const statsModuleBlocks = stats.blocks as StatsModuleBlock[];
	const blockCount = statsModuleBlocks.length;
	const blockSizes = useMemo(() => getQuickStatsGridSizes(blockCount), [blockCount]);

	const classes = ['grid', `grid-rows-4`, 'w-full', 'h-72', `grid-cols-4`, 'gap-2'];
	const className = classes.join(' ');

	const canAddBlocks = blockCount < STATS_GRID_SIZE ** 2;

	const blocks: React.ReactNode[] = [];

	function addBlockToGrid() {
		if (!canAddBlocks) {
			return;
		}

		const setNewIndex = blockCount;
		const newBlock =
			defaultStatsModuleBlocks[Math.floor(blockCount % defaultStatsModuleBlocks.length)];
		dispatch(addStatsModuleBlock(newBlock));
		saveStatsBlockChanges();
		setSelectedIndex(setNewIndex);
	}

	function removeStatsBlock(index: number) {
		if (blockCount <= 1) {
			return;
		}

		const newIndex = Math.max(0, selectedIndex - 1);
		setSelectedIndex(newIndex);
		dispatch(removeStatsModuleBlock(index));
		saveStatsBlockChanges();
	}

	function saveStatsBlockChanges() {
		saveStatsModuleBlocks().catch((e) => {
			toastError(e.message);
		});
	}

	function selectStatsBlock(e, index: number) {
		e.preventDefault();
		setSelectedIndex(index);
	}

	for (let i = 0; i < blockCount; i++) {
		const colSpan = blockSizes[i][0];
		const rowSpan = blockSizes[i][1];
		const selected = selectedIndex === i;
		const statOptions = statsModuleBlocks[i];

		if (!statOptions) {
			continue;
		}

		blocks.push(
			<Button
				variant="ghost"
				type="button"
				aria-pressed={selected}
				aria-label={`Block ${i + 1}: ${getStatsBlockDescription(statOptions)}`}
				key={`stats-block-${i}`}
				className={cn(
					'h-auto p-0 font-normal whitespace-normal hover:bg-transparent',
					cn(
						'focus-visible:ring-text relative min-h-0 rounded-md p-0 ring-1 transition-shadow focus-visible:ring-2',
						{
							'ring-text/70': selected,
							'ring-tmo-module/10 hover:ring-tmo-module/30': !selected,
						},
					),
				)}
				onClick={(e) => selectStatsBlock(e, i)}
				style={{
					gridColumn: `span ${colSpan}`,
					gridRow: `span ${rowSpan}`,
				}}
			>
				<div className="pointer-events-none h-full w-full" inert>
					<QuickStatsBlock
						interactive={false}
						statOptions={statOptions}
						filterOptions={filterOptions}
						rowSpan={rowSpan}
						colSpan={colSpan}
					/>
				</div>
			</Button>,
		);
	}

	const selectedStatOptions = statsModuleBlocks[selectedIndex];

	return (
		<div className="text-text grid items-start gap-5 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
			<section className="border-tmo-module/10 bg-tmo-module/[0.025] rounded-xl border p-4 md:sticky md:top-0">
				<div className="mb-4 flex items-center justify-between gap-3">
					<div>
						<h3 className="m-0 text-sm font-semibold">Your stats layout</h3>
						<span className="text-text/45 text-xs">
							{blockCount} of {STATS_GRID_SIZE ** 2} blocks
						</span>
					</div>
					<Button
						variant="secondary"
						disabled={!canAddBlocks}
						onClick={addBlockToGrid}
						size="sm"
					>
						{<Plus size={14} />}
						{'Add block'}
					</Button>
				</div>
				<div className={className}>{blocks}</div>
				<p className="text-text/45 mt-4 mb-0 text-xs leading-relaxed">
					Select any block to edit its value and color. Your changes apply automatically.
				</p>
			</section>
			<div className="border-tmo-module/10 min-w-0 rounded-xl border p-4">
				<CustomizeStatsEditor
					key={`${blockCount}-${selectedIndex}`}
					hideRemoveButton={blockCount <= 1}
					removeStatsBlock={removeStatsBlock}
					stat={selectedStatOptions}
					index={selectedIndex}
				/>
			</div>
		</div>
	);
}
