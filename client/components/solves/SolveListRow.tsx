import React from 'react';
import classNames from 'classnames';
import {useDispatch} from 'react-redux';
import {getTimeString} from '@/util/time';
import {openModal} from '@/actions/general';
import SolveInfo from '@/components/solve-info/SolveInfo';
import Emblem from '@/components/common/emblem/Emblem';
import {getDateFromNow} from '@/util/dates';
import Scramble from '@/components/modules/scramble/ScrambleVisual';
import {getCubeTypeName} from '@/util/cubes/util';
import Tag from '@/components/common/tag/Tag';
import {Solve} from '../../../server/schemas/Solve.schema';

interface Props {
	solve: Solve;
}

export default function SolveListRow(props: Props) {
	const {solve} = props;

	const dispatch = useDispatch();

	function openSolve() {
		dispatch(openModal(<SolveInfo solveId={solve.id} />));
	}

	const time = getTimeString(solve);
	const dnf = solve.dnf;
	const plusTwo = solve.plus_two;
	const scramble = solve.scramble;
	const smart = solve.is_smart_cube;
	const cubeType = getCubeTypeName(solve.cube_type) || 'None';
	const createdAt = getDateFromNow(solve.started_at);

	let plusTwoEmblem: React.ReactNode = null;
	let dnfEmblem: React.ReactNode = null;
	let smartEmblem: React.ReactNode = null;

	if (plusTwo) {
		plusTwoEmblem = <Tag small text="+2" backgroundColor="orange" />;
	}

	if (dnf) {
		dnfEmblem = <Tag small text="DNF" backgroundColor="red" />;
	}

	if (smart) {
		smartEmblem = <Tag small text="Smart Cube" />;
	}

	return (
		<div
			className="relative mb-[15px] grid cursor-pointer grid-cols-3 rounded-[5px] bg-module p-5"
			onClick={openSolve}
		>
			<div>
				<h4
					className={classNames(
						'text-[1.6rem] font-bold text-text',
						dnf && '!text-error',
						plusTwo && '!text-warning'
					)}
				>
					{time}
				</h4>
				<span className="table text-[0.9rem] text-text opacity-80">{createdAt}</span>
			</div>
			<div className="-mt-2.5 flex w-full items-center justify-center">
				<Emblem text={cubeType} />
			</div>
			<div className="flex w-full justify-end">
				<div>
					<Scramble frontFace width="60px" scramble={scramble} cubeType={solve.cube_type} />
				</div>
			</div>
			<div className="absolute bottom-2.5 left-1/2 flex -translate-x-1/2 flex-row gap-[5px]">
				{dnfEmblem}
				{plusTwoEmblem}
				{smartEmblem}
			</div>
		</div>
	);
}
