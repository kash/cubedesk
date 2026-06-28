import React, {useState} from 'react';

interface MatchOptions {
	cubeType: string;
}

interface CubeTypeOption {
	id: string;
	proOnly?: boolean;
}

interface Props {
	cubeTypes?: CubeTypeOption[];
	onUpdate: (op: MatchOptions) => any;
}

export default function MatchOptions(props: Props) {
	let firstCubeType = '333';
	if (props.cubeTypes) {
		firstCubeType = props.cubeTypes[0].id;
	}

	const [cubeType, setCubeType] = useState(firstCubeType);

	return (
		<div>
			<div></div>
		</div>
	);
}
