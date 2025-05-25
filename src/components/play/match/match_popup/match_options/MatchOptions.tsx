import React, {useState} from 'react';
import './MatchOptions.scss';
import block from '../../../../../styles/bem';

const b = block('match-options');

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
		<div className={b()}>
			<div className={b('cube-types')}></div>
		</div>
	);
}
