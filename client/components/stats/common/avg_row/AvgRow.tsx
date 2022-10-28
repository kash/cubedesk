import React, {useContext} from 'react';
import './AvgRow.scss';
import block from '../../../../styles/bem';
import {getCurrentAverage} from '../../../../db/solves/stats/solves/average/average';
import {StatsContext} from '../../Stats';
import {getAveragePB} from '../../../../db/solves/stats/solves/average/average_pb';
import {SolveStat} from '../../../../db/solves/stats/solves/caching';
import {getTimeString} from '../../../../util/time';
import {useDispatch} from 'react-redux';
import HistoryModal from '../../../modules/history/history_modal/HistoryModal';
import {openModal} from '../../../../actions/general';

const b = block('avg-row');

interface Props {
	count: number;
	pb?: boolean;
}

export default function AvgRow(props: Props) {
	const dispatch = useDispatch();

	const context = useContext(StatsContext);
	const filter = context.filterOptions;
	const {count, pb} = props;

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

	const bestSpan = pb ? <span className={b('blue')}>Best</span> : null;

	return (
		<div className={b()}>
			<p className={b('desc')}>
				{bestSpan} {pb ? 'a' : 'A'}verage of <span className={b('blue')}>{count.toLocaleString()}</span>
			</p>
			<button onClick={openSolveModal} className={b('value')}>
				{getTimeString(avg?.time)}
			</button>
		</div>
	);
}
