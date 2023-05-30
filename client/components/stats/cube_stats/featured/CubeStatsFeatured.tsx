import React, {useContext, useMemo} from 'react';
import './CubeStatsFeatured.scss';
import {Timer, Hash, Trophy, CalendarBlank} from '@phosphor-icons/react';
import block from '../../../../styles/bem';
import NumberBlock from '../../common/number_block/NumberBlock';
import ScrambleVisual from '../../../modules/scramble/ScrambleVisual';
import {getDateFromNow} from '../../../../util/dates';
import {StatsContext} from '../../Stats';
import {getSinglePB} from '../../../../db/solves/stats/solves/single/single_pb';
import {getTotalSolveCount, getTotalSolveTime} from '../../../../db/solves/stats/count';
import {useSolveDb} from '../../../../util/hooks/useSolveDb';
import {getTimeString} from '../../../../util/time';
import {useDispatch} from 'react-redux';
import {openModal} from '../../../../actions/general';
import SolveInfo from '../../../solve_info/SolveInfo';
import {Solve} from '../../../../../server/schemas/Solve.schema';

const b = block('stats-featured');

export default function CubeStatsFeatured() {
	const dispatch = useDispatch();
	const context = useContext(StatsContext);

	const solveUpdate = useSolveDb();

	const singlePb = useMemo(() => {
		return getSinglePB(context.filterOptions);
	}, [context.filterOptions, solveUpdate]);

	const totalSolves = useMemo(() => {
		return getTotalSolveCount(context.filterOptions);
	}, [context.filterOptions, solveUpdate]);

	const timeSpentCubing = useMemo(() => {
		return getTotalSolveTime(context.filterOptions);
	}, [context.filterOptions, solveUpdate]);

	function openSolve(solve: Solve) {
		dispatch(openModal(<SolveInfo solveId={solve.id} />));
	}

	const pbDate = new Date(singlePb?.solve.started_at);

	return (
		<div className={b()}>
			<NumberBlock
				large
				onClick={() => openSolve(singlePb?.solve)}
				icon={<Trophy weight="bold" />}
				title="Single PB"
				value={getTimeString(singlePb?.time)}
				color="#23C586"
			>
				<div className={b('single-pb')}>
					<div className={b('spb-info')}>
						<ul>
							<li>
								<CalendarBlank />
								<div>
									<p>{pbDate.toLocaleDateString()}</p>
									<span>({getDateFromNow(pbDate)})</span>
								</div>
							</li>
						</ul>
					</div>
					<div className={b('spb-scramble')}>
						<ScrambleVisual
							width="60px"
							frontFace
							scramble={singlePb?.solve?.scramble}
							cubeType={singlePb?.solve?.cube_type}
						/>
					</div>
				</div>
			</NumberBlock>
			<div className={b('right')}>
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
					value={getTimeString(timeSpentCubing)}
					color="#6D7D90"
				/>
			</div>
		</div>
	);
}
