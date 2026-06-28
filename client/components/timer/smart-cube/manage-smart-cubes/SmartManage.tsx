import React from 'react';
import {SmartDevice} from '@/@types/generated/graphql';

interface Props {
	cube: SmartDevice;
}

export default function SmartManage(props: Props) {
	const {cube} = props;
	const solveCount = cube.solves.length;

	return (
		<div className="flex w-full flex-row items-start justify-between border-b-2 border-button py-[15px] last:border-b-0">
			<div>
				<h4 className="text-[1.1rem] font-semibold text-text">{cube.name}</h4>
				<h5 className="text-[0.9rem] font-normal text-text opacity-80">
					Added on {new Date(cube.created_at).toDateString()}
				</h5>
			</div>
			<div>
				<p className="text-base text-text">
					{solveCount} solve{solveCount === 1 ? '' : 's'}
				</p>
			</div>
		</div>
	);
}
