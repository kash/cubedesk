import React, {useMemo, useState} from 'react';
import QuickStatsBlock from '../QuickStatsBlock';
import {getQuickStatsGridSizes, saveStatsModuleBlocks, STATS_GRID_SIZE} from '../util';
import Button from '../../../common/button/Button';
import CustomizeStatsEditor from './CustomizeStatsEditor';
import HorizontalLine from '../../../common/horizontal_line/HorizontalLine';
import {StatsModuleBlock} from '../../../../../server/schemas/StatsModule.schema';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {addStatsModuleBlock, removeStatsModuleBlock} from '../../../../actions/stats';
import {defaultStatsModuleBlocks} from '../../../../reducers/stats';
import {toastError} from '../../../../util/toast';
import {FilterSolvesOptions} from '../../../../db/solves/query';
import jsonStr from 'json-stable-stringify';

interface Props {
	filterOptions: FilterSolvesOptions;
}

export default function CustomizeStats(props: Props) {
	const {filterOptions} = props;

	const dispatch = useDispatch();
	const [selectedIndex, setSelectedIndex] = useState(0);

	const stats = useSelector((state: RootStateOrAny) => state?.stats);
	const statsModuleBlocks = stats.blocks as StatsModuleBlock[];
	const blockCount = statsModuleBlocks.length;
	const blockSizes = useMemo(() => getQuickStatsGridSizes(blockCount), [blockCount]);

	const classes = ['grid', `grid-rows-4`, 'w-full', 'h-80', `grid-cols-4`, 'gap-1', 'w-full', 'h-full'];
	const className = classes.join(' ');

	const canAddBlocks = blockCount < STATS_GRID_SIZE ** 2;

	const blocks = [];

	function addBlockToGrid() {
		if (!canAddBlocks) {
			return;
		}

		const setNewIndex = blockCount;
		const newBlock = defaultStatsModuleBlocks[Math.floor(blockCount % defaultStatsModuleBlocks.length)];
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

		const buttonClasses = ['group', 'relative', 'p-0', 'rounded'];
		if (selected) {
			buttonClasses.push('border-solid', 'relative', 'rounded-md', 'border-4', 'border-primary/80');
		}

		blocks.push(
			<button
				key={`stats-block-${i}`}
				className={buttonClasses.join(' ')}
				onClick={(e) => selectStatsBlock(e, i)}
				style={{
					gridColumn: `span ${colSpan}`,
					gridRow: `span ${rowSpan}`,
				}}
			>
				<div className="w-full h-full pointer-events-none">
					<QuickStatsBlock
						statOptions={statOptions}
						filterOptions={filterOptions}
						rowSpan={rowSpan}
						colSpan={colSpan}
					/>
				</div>
			</button>
		);
	}

	const selectedStatOptions = statsModuleBlocks[selectedIndex];

	return (
		<div>
			<div className="mb-4 table w-full">
				<div className={className}>{blocks}</div>
				<div className="mx-auto mt-4 table">
					<Button disabled={!canAddBlocks} glow small primary onClick={addBlockToGrid} text="Add block" />
				</div>
			</div>
			<HorizontalLine />
			<div>
				<CustomizeStatsEditor
					key={`${jsonStr(selectedStatOptions)}-${selectedIndex}`}
					hideRemoveButton={blockCount <= 1}
					removeStatsBlock={removeStatsBlock}
					stat={selectedStatOptions}
					index={selectedIndex}
				/>
			</div>
		</div>
	);
}
