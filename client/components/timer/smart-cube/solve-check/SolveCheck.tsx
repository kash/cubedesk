import Button from '@/components/common/Button';
import {IModalProps} from '@/components/common/modal/Modal';
import {resourceUri} from '@/util/storage';
import React from 'react';

export default function SolveCheck(props: IModalProps) {
	return (
		<div className="mt-[15px] flex flex-col items-center">
			<img
				className="my-5 mb-[30px] w-full max-w-[150px]"
				src={resourceUri('/images/rubiks_cube_solve.svg')}
				alt="Solved speed cube"
			/>
			<Button text="My cube is solved" primary onClick={props.onComplete} />
		</div>
	);
}
