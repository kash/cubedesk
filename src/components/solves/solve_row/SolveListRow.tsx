import {Solve} from '@/generated/zod';
import React, {useCallback} from 'react';
import './SolveListRow.scss';
import {useDispatch} from 'react-redux';
import {openModal} from '../../../lib/actions/general';
import {getCubeTypeName} from '../../../lib/util/cubes/util';
import {getDateFromNow} from '../../../lib/util/dates';
import {getTimeString} from '../../../lib/util/time';
import block from '../../../styles/bem';
import Emblem from '../../common/emblem/Emblem';
import Tag from '../../common/tag/Tag';
import Scramble from '../../modules/scramble/ScrambleVisual';
import SolveInfo from '../../solve-info/SolveInfo';

const b = block('solve-list-row');

interface Props {
	solve: Solve;
}

export default function SolveListRow(props: Props) {
	const {solve} = props;

	const dispatch = useDispatch();

	const openSolve = useCallback(() => {
		dispatch(openModal(<SolveInfo solveId={solve.id} />));
	}, [dispatch, solve.id]);

	const time = getTimeString(solve);
	const dnf = solve.dnf;
	const plusTwo = solve.plus_two;
	const scramble = solve.scramble;
	const smart = solve.is_smart_cube;
	const cubeType = getCubeTypeName(solve.cube_type) || 'None';
	const createdAt = getDateFromNow(solve.started_at);

	let plusTwoEmblem = null;
	let dnfEmblem = null;
	let smartEmblem = null;

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
		<div className={b()} onClick={openSolve}>
			<div className={b('left')}>
				<h4 className={b('time', {dnf, plusTwo})}>{time}</h4>
				<span>{createdAt}</span>
			</div>
			<div className={b('center')}>
				<Emblem text={cubeType} />
			</div>
			<div className={b('scramble')}>
				<div className={b('scramble-body')}>
					<Scramble
						frontFace
						width="60px"
						scramble={scramble}
						cubeType={solve.cube_type}
					/>
				</div>
			</div>
			<div className={b('badges')}>
				{dnfEmblem}
				{plusTwoEmblem}
				{smartEmblem}
			</div>
		</div>
	);
}
