import {Button} from '@/components/ui/button';
import {resourceUri} from '@/util/storage';
import React from 'react';

interface Props {
	onComplete?: () => void;
}

export default function SolveCheck(props: Props) {
	return (
		<div className="mt-[15px] flex flex-col items-center">
			<img
				className="my-5 mb-[30px] w-full max-w-[150px]"
				src={resourceUri('/images/rubiks_cube_solve.svg')}
				alt="Solved speed cube"
			/>
			<Button variant="default" onClick={props.onComplete}>
				{'My cube is solved'}
			</Button>
		</div>
	);
}
