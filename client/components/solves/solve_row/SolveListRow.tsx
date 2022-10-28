import React from 'react';
import {useDispatch} from 'react-redux';
import './SolveListRow.scss';
import {getTimeString} from '../../../util/time';
import {openModal} from '../../../actions/general';
import SolveInfo from '../../solve_info/SolveInfo';
import Emblem from '../../common/emblem/Emblem';
import {getDateFromNow} from '../../../util/dates';
import Scramble from '../../modules/scramble/ScrambleVisual';
import {getCubeTypeName} from '../../../util/cubes/util';
import block from '../../../styles/bem';
import Tag from '../../common/tag/Tag';
import {Solve} from '../../../../server/schemas/Solve.schema';

const b = block('solve-list-row');

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
					<Scramble frontFace width="60px" scramble={scramble} cubeType={solve.cube_type} />
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
