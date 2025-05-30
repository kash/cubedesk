import {CalendarBlank, Hash, Timer, Trophy} from '@phosphor-icons/react/dist/ssr';
import './CubeStatsFeatured.scss';
import React, {useContext, useMemo} from 'react';
import {useDispatch} from 'react-redux';
import {openModal} from '../../../../lib/actions/general';
import {getTotalSolveCount, getTotalSolveTime} from '../../../../lib/db/solves/stats/count';
import {getSinglePB} from '../../../../lib/db/solves/stats/solves/single/single_pb';
import {getDateFromNow} from '../../../../lib/util/dates';
import {useSolveDb} from '../../../../lib/util/hooks/useSolveDb';
import {getTimeString} from '../../../../lib/util/time';
import {Solve} from '@/generated/zod';
import block from '../../../../styles/bem';
import ScrambleVisual from '../../../modules/scramble/ScrambleVisual';
import SolveInfo from '../../../solve-info/SolveInfo';
import NumberBlock from '../../common/number_block/NumberBlock';
import {StatsContext} from '../../Stats';

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
