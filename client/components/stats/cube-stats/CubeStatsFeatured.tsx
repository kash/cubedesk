import {openModal} from '@/actions/general';
import ScrambleVisual from '@/components/modules/scramble/ScrambleVisual';
import SolveInfo from '@/components/solve-info/SolveInfo';
import NumberBlock from '@/components/stats/common/NumberBlock';
import {useStatsContext} from '@/components/stats/Stats';
import {getTotalSolveCount, getTotalSolveTime} from '@/db/solves/stats/count';
import {getSinglePB} from '@/db/solves/stats/solves/single/single-pb';
import {Solve} from '@/types/solve';
import {getDateFromNow} from '@/util/dates';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import {getTimeString} from '@/util/time';
import {CalendarBlank, Hash, Timer, Trophy} from 'phosphor-react';
import React, {useMemo} from 'react';
import {useDispatch} from 'react-redux';

export default function CubeStatsFeatured() {
	const dispatch = useDispatch();
	const context = useStatsContext();

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

	const pbSolve = singlePb?.solve;
	const pbDate = new Date(pbSolve?.started_at ?? NaN);

	return (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(200px,auto))] gap-2.5">
			<NumberBlock
				large
				onClick={() => pbSolve && openSolve(pbSolve)}
				icon={<Trophy weight="bold" />}
				title="Single PB"
				value={getTimeString(singlePb?.time ?? 0)}
				color="#23C586"
			>
				<div className="mt-[15px] flex w-full flex-row items-end justify-between">
					<div className="flex flex-col justify-between">
						<ul>
							<li className="flex flex-row items-center text-text">
								<CalendarBlank className="text-[1.8rem]" />
								<div className="ml-[5px] flex flex-col text-inherit">
									<p className="m-0 p-0 text-base font-bold">{pbDate.toLocaleDateString()}</p>
									<span className="table text-[0.9rem] text-inherit opacity-50">({getDateFromNow(pbDate)})</span>
								</div>
							</li>
						</ul>
					</div>
					<div className="flex items-end">
						<ScrambleVisual
							width="60px"
							frontFace
							scramble={pbSolve?.scramble}
							cubeType={pbSolve?.cube_type}
						/>
					</div>
				</div>
			</NumberBlock>
			<div className="grid grid-rows-2 gap-2.5">
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
