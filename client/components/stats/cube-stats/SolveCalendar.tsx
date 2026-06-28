import React from 'react';

interface Props {
	cubeType: string;
}

export default function SolveCalendar(props: Props) {
	const {cubeType} = props;

	return (
		<div>
			{cubeType}
		</div>
	);
}
