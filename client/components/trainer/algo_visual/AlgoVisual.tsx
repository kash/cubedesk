import React, {useMemo} from 'react';
import './AlgoVisual.scss';
import {useSettings} from '../../../util/hooks/useSettings';
import {getCubeTypeInfoById} from '../../../util/cubes/util';
import block from '../../../styles/bem';
import CSS from 'csstype';

const b = block('cube-image');

interface Props {
	threeD?: boolean;
	icon?: string;
	rotate?: number;
	zoom?: number;
	cubeType?: string;
	colors?: string;
	imageLink?: string;
}

export default function AlgoVisual(props: Props) {
	const {colors, imageLink, rotate, icon, threeD} = props;

	const primaryColor = useSettings('primary_color');

	const cubeType = getCubeTypeInfoById(props.cubeType);
	const cubeSize = cubeType.size;

	// TODO FUTURE imageLinks
	const cubeColors: string[] = useMemo(() => {
		const output = colors.split(',');
		for (let i = 0; i < output.length; i += 1) {
			const color = output[i];
			if (color === '#000000') {
				output[i] = primaryColor;
			}
		}

		return output;
	}, [imageLink, colors]);

	function get2DCube() {
		const squares = [];

		let index = 0;
		const cubeWidth = cubeSize + 2;
		for (let i = 0; i < cubeWidth; i += 1) {
			for (let k = 0; k < cubeWidth; k += 1) {
				// Check if corner block
				if ((i === 0 || i === cubeWidth - 1) && k % (cubeWidth - 1) === 0) {
					squares.push(<span key={`cube-image-cubelet${index}${i}${k}`} />);
					continue;
				}

				const backgroundColor = cubeColors[index];

				squares.push(
					<span
						key={`cube-image-cubelet${index}${i}${k}${backgroundColor}`}
						className={b('cubelet')}
						style={{
							backgroundColor,
						}}
					/>
				);

				index++;
			}
		}

		const edgeSize = '8px';

		return (
			<div
				className={b('visual')}
				style={{
					gridTemplateColumns: `${edgeSize} repeat(${cubeSize}, 1fr) ${edgeSize}`,
					gridTemplateRows: `${edgeSize} repeat(${cubeSize}, 1fr) ${edgeSize}`,
				}}
			>
				{squares}
			</div>
		);
	}

	function get3DCube() {
		const output = [];
		let sub = 0;
		for (let j = 0; j < 3; j += 1) {
			const cubelets = [];
			for (let i = 0; i < cubeSize; i += 1) {
				for (let k = 0; k < cubeSize; k += 1) {
					const off = sub;

					const backgroundColor = cubeColors[off] || '#3F464F';
					cubelets.push(<span key={`cubeNumber-${off}${backgroundColor}`} style={{backgroundColor}} />);

					sub += 1;
				}
			}

			output.push(
				<div
					className={b('3d', {side: true, custom: true})}
					key={`cube-side-${j}`}
					style={{
						gridTemplateColumns: `30px repeat(${cubeSize}, 40px) 30px`,
						gridTemplateRows: `30px repeat(${cubeSize}, ${j !== 1 ? '35px' : '40px'}) `,
					}}
				>
					{cubelets}
				</div>
			);
		}

		return (
			<div
				style={{zoom: 0.55, height: 190, marginTop: 35}}
				className={b('3d-wrapper', {[cubeSize]: true, custom: true})}
			>
				{output}
			</div>
		);
	}

	if (!cubeColors || !cubeColors.length) {
		return null;
	}

	let body;
	if (icon) {
		body = (
			<div className={b('icon')}>
				<i className={icon} />
			</div>
		);
	} else if (threeD) {
		body = get3DCube();
	} else {
		body = get2DCube();
	}

	const style: CSS.Properties = {
		transform: `rotate(${rotate}deg)`,
	};

	return (
		<div className={b()} style={style}>
			{body}
		</div>
	);
}
