import {openModal} from '@/actions/general';
import HistoryModal from '@/components/modules/history/HistoryModal';
import {StatsContext} from '@/components/stats/Stats';
import {getCurrentAverage} from '@/db/solves/stats/solves/average/average';
import {getAveragePB} from '@/db/solves/stats/solves/average/average-pb';
import {SolveStat} from '@/db/solves/stats/solves/caching';
import {getTimeString} from '@/util/time';
import classNames from 'classnames';
import React, {useContext} from 'react';
import {useDispatch} from 'react-redux';

interface Props {
	count: number;
	pb?: boolean;
	className?: string;
}

export default function AvgRow(props: Props) {
	const dispatch = useDispatch();

	const context = useContext(StatsContext);
	const filter = context.filterOptions;
	const {count, pb, className} = props;

	let avg: SolveStat;
	if (pb) {
		avg = getAveragePB(filter, count);
	} else {
		avg = getCurrentAverage(filter, count);
	}

	const localCount = count.toLocaleString();

	function openSolveModal() {
		if (!avg) {
			return;
		}

		const descPrefix = pb ? 'Best ' : '';
		const desc = descPrefix + `Average of ${localCount}`;
		dispatch(openModal(<HistoryModal solves={avg.solves} description={desc} />));
	}

	const highlightClass = 'inline-block font-bold text-info drop-shadow-[0_0_10px_rgba(var(--info-color),0.4)]';
	const bestSpan = pb ? <span className={highlightClass}>Best</span> : null;

	return (
		<div className={classNames('box-border flex flex-row items-center justify-between rounded-[5px] px-2.5 py-1.5', className)}>
			<p className="m-0 p-0 text-[1.2rem] opacity-100">
				{bestSpan} {pb ? 'a' : 'A'}verage of <span className={highlightClass}>{count.toLocaleString()}</span>
			</p>
			<button onClick={openSolveModal} className="text-[1.3rem] font-bold text-secondary">
				{getTimeString(avg?.time)}
			</button>
		</div>
	);
}
