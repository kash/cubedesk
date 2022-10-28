import React, {useMemo} from 'react';
import {FilterSolvesOptions} from '../../../db/solves/query';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {useSolveDb} from '../../../util/hooks/useSolveDb';
import Button from '../../common/button/Button';
import QuickStatsBlock from './QuickStatsBlock';
import {getQuickStatsGridSizes} from './util';
import {openModal} from '../../../actions/general';
import CustomizeStats from './customize_stats/CustomizeStats';
import {StatsModuleBlock} from '../../../../server/schemas/StatsModule.schema';

interface Props {
	filterOptions: FilterSolvesOptions;
}

export default function QuickStats(props: Props) {
	const {filterOptions} = props;
	const dispatch = useDispatch();

	const stats = useSelector((state: RootStateOrAny) => state?.stats);
	const statsModuleBlocks = stats.blocks as StatsModuleBlock[];
	const blockCount = statsModuleBlocks.length;
	const blockSizes = useMemo(() => getQuickStatsGridSizes(blockCount), [blockCount]);

	useSolveDb();

	const classes = ['grid', `grid-rows-4`, `grid-cols-4`, 'gap-1', 'w-full', 'h-full'];
	const className = classes.join(' ');

	const blocks = [];

	for (let i = 0; i < blockCount; i++) {
		const statsBlock = statsModuleBlocks[i];
		const colSpan = blockSizes[i][0];
		const rowSpan = blockSizes[i][1];

		blocks.push(
			<div
				key={`stats-block-${i}`}
				style={{
					gridColumn: `span ${colSpan}`,
					gridRow: `span ${rowSpan}`,
				}}
			>
				<QuickStatsBlock
					statOptions={statsBlock}
					filterOptions={filterOptions}
					colSpan={colSpan}
					rowSpan={rowSpan}
				/>
			</div>
		);
	}

	function openCustomizer() {
		dispatch(
			openModal(<CustomizeStats filterOptions={filterOptions} />, {
				title: 'Customize Stats',
				description: 'Customize this here and now',
			})
		);
	}

	return (
		<div className="w-full h-full relative group">
			<div className={className}>{blocks}</div>
			<div className="absolute top-0 right-0 group-hover:opacity-100 opacity-0">
				<Button onClick={openCustomizer} text="Customize Stats" secondary glow />
			</div>
		</div>
	);
}
