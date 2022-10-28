import React, {useEffect, useMemo, useRef, useState} from 'react';
import {FilterSolvesOptions} from '../../../db/solves/query';
import {StatsModuleBlock} from '../../../../server/schemas/StatsModule.schema';
import {getStatsBlockDescription, getStatsBlockValueFromFilter} from './util';
import {useColor} from '../../../util/hooks/useTheme';
import {useMe} from '../../../util/hooks/useMe';
import jsonStr from 'json-stable-stringify';
import {useSettings} from '../../../util/hooks/useSettings';
import {getTimeString} from '../../../util/time';
import {useDispatch} from 'react-redux';
import {openModal} from '../../../actions/general';
import SolveInfo from '../../solve_info/SolveInfo';
import HistoryModal from '../history/history_modal/HistoryModal';
import CSS from 'csstype';
import {useSolveDb} from '../../../util/hooks/useSolveDb';

interface Props {
	filterOptions?: FilterSolvesOptions;
	statOptions: StatsModuleBlock;
	rowSpan: number;
	colSpan: number;
}

export default function QuickStatsBlock(props: Props) {
	const {rowSpan, filterOptions, colSpan, statOptions} = props;

	const dispatch = useDispatch();
	const sessionId = useSettings('session_id');
	const [fontSize, setFontSize] = useState(25);
	const me = useMe();
	const statsBlockDiv = useRef<HTMLDivElement>();
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
		fontSize: `${fontSize}px`,
		lineHeight: 0.9,
	};
	const colorHex = useColor(statOptions.colorName, 'button_color');
	if (me?.is_pro && colorHex) {
		buttonStyle.color = colorHex.hex;
	}

	if (statsBlockSolvesFilter?.solve || solveCount) {
		buttonClasses.push('hover:border-current');
	}

	const statValue = getTimeString(statsBlockSolvesFilter?.time);

	useEffect(() => {
		const width = statsBlockDiv.current.clientWidth;
		const height = statsBlockDiv.current.clientHeight;

		const newFontSizeBasedOnHeight = height / 3;
		const newFontSizeBasedOnWidth = width / 4.5;
		const newFontSize = Math.min(newFontSizeBasedOnHeight, newFontSizeBasedOnWidth);

		const absoluteMaxFontSize = 70;
		const absoluteMinFontSize = 12;

		setFontSize(Math.min(absoluteMaxFontSize, Math.max(newFontSize, absoluteMinFontSize)));
	}, [rowSpan, colSpan]);

	function openSolve(e) {
		if (solveCount > 1) {
			dispatch(
				openModal(
					<HistoryModal
						time={statsBlockSolvesFilter?.time}
						solves={statsBlockSolvesFilter.solves}
						description={statsBlockDescription}
					/>
				)
			);
		} else if (solveCount) {
			dispatch(openModal(<SolveInfo solveId={statsBlockSolvesFilter.solve.id} />));
		} else {
			e.preventDefault();
		}
	}

	return (
		<div className={blockClasses.join(' ')} ref={statsBlockDiv}>
			<div className="flex flex-row">
				<StatDescription statOptions={statOptions} />
			</div>
			<div className="relative w-full h-full flex items-start justify-center">
				<button onClick={openSolve} className={buttonClasses.join(' ')} style={buttonStyle}>
					{statValue}
				</button>
			</div>
		</div>
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

	const text = [];
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

	return <span className="text-[0.8rem] px-0.5 text-text/70">{text.join(' ')}</span>;
}
