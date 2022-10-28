import React from 'react';
import './SmartManage.scss';
import block from '../../../../../styles/bem';
import {SmartDevice} from '../../../../../@types/generated/graphql';

const b = block('manage-smart-cube');

interface Props {
	cube: SmartDevice;
}

export default function SmartManage(props: Props) {
	const {cube} = props;
	const solveCount = cube.solves.length;

	return (
		<div className={b()}>
			<div className={b('left')}>
				<h4>{cube.name}</h4>
				<h5>Added on {new Date(cube.created_at).toDateString()}</h5>
			</div>
			<div className={b('right')}>
				<p>
					{solveCount} solve{solveCount === 1 ? '' : 's'}
				</p>
			</div>
		</div>
	);
}
