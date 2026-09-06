import Emblem from '@/components/common/Emblem';
import {Badge} from '@/components/ui/badge';
import Scramble from '@/components/modules/scramble/ScrambleVisual';
import {Solve} from '@/types/solve';
import {getCubeTypeName} from '@/util/cubes/util';
import {getDateFromNow} from '@/util/dates';
import {getTimeString} from '@/util/time';
import classNames from 'classnames';
import React from 'react';

interface Props {
	onOpenSolve: (solve: Solve) => void;
	solve: Solve;
}

export default function SolveListRow(props: Props) {
	const {solve} = props;

	function openSolve() {
		props.onOpenSolve(solve);
	}

	const time = getTimeString(solve);
	const dnf = solve.dnf;
	const plusTwo = solve.plus_two;
	const scramble = solve.scramble;
	const smart = solve.is_smart_cube;
	const cubeType = getCubeTypeName(solve.cube_type) || 'None';
	const createdAt = getDateFromNow(solve.started_at ?? 0);

	let plusTwoEmblem: React.ReactNode = null;
	let dnfEmblem: React.ReactNode = null;
	let smartEmblem: React.ReactNode = null;

	if (plusTwo) {
		plusTwoEmblem = (
			<Badge size="sm" variant="warning">
				+2
			</Badge>
		);
	}

	if (dnf) {
		dnfEmblem = (
			<Badge size="sm" variant="destructive">
				DNF
			</Badge>
		);
	}

	if (smart) {
		smartEmblem = (
			<Badge size="sm" variant="unfilled">
				Smart Cube
			</Badge>
		);
	}

	return (
		<div
			className="bg-module grid cursor-pointer grid-cols-3 items-center px-4 py-2.5"
			onClick={openSolve}
		>
			<div>
				<h4
					className={classNames(
						'text-text mb-0 text-xl leading-tight font-bold',
						dnf && '!text-error',
						plusTwo && '!text-warning',
					)}
				>
					{time}
				</h4>
				<span className="text-text table text-xs opacity-80">{createdAt}</span>
			</div>
			<div className="flex w-full flex-col items-center justify-center gap-1">
				<Emblem small className="mb-0" text={cubeType} />
				{(dnf || plusTwo || smart) && (
					<div className="flex flex-wrap justify-center gap-1">
						{dnfEmblem}
						{plusTwoEmblem}
						{smartEmblem}
					</div>
				)}
			</div>
			<div className="flex w-full justify-end">
				<div>
					<Scramble
						frontFace
						width="44px"
						scramble={scramble}
						cubeType={solve.cube_type}
					/>
				</div>
			</div>
		</div>
	);
}
