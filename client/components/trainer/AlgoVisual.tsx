import {getCubeTypeInfoById} from '@/util/cubes/util';
import {useSettings} from '@/util/hooks/useSettings';
import classNames from 'classnames';
import CSS from 'csstype';
import React, {ReactNode, useMemo} from 'react';

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

	const cubeType = getCubeTypeInfoById(props.cubeType ?? '');
	const cubeSize = cubeType?.size ?? 0;

	// TODO FUTURE imageLinks
	const cubeColors: string[] = useMemo(() => {
		const output = (colors ?? '').split(',');
		for (let i = 0; i < output.length; i += 1) {
			const color = output[i];
			if (color === '#000000') {
				output[i] = primaryColor;
			}
		}

		return output;
	}, [imageLink, colors]);

	function get2DCube() {
		const squares: ReactNode[] = [];

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
						className="rounded-[5px] bg-primary"
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
				className="grid h-[90px] w-[90px] gap-[3px]"
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
		const output: ReactNode[] = [];
		const facePositions = [
			{
				className: 'absolute left-[-84px] top-[54px]',
				transform: 'skew(0, 29deg) rotateY(46deg)',
			},
			{
				className: 'absolute left-[-14px] top-[-40px]',
				transform: 'rotate(-29.5deg) rotateY(39deg) rotateX(45deg) translate(-50%, 0)',
			},
			{
				className: 'absolute right-[-84px] top-[50px]',
				transform: 'skew(0, -29deg) rotateY(-46deg)',
			},
		];
		let sub = 0;
		for (let j = 0; j < 3; j += 1) {
			const cubelets: ReactNode[] = [];
			for (let i = 0; i < cubeSize; i += 1) {
				for (let k = 0; k < cubeSize; k += 1) {
					const off = sub;

					const backgroundColor = cubeColors[off] || '#3F464F';
					cubelets.push(
						<span
							className="table h-full w-full rounded-[5px] transition-all duration-200 ease-in-out hover:opacity-100"
							key={`cubeNumber-${off}${backgroundColor}`}
							style={{backgroundColor}}
						/>
					);

					sub += 1;
				}
			}

			output.push(
				<div
					className={classNames('grid min-h-[100px] min-w-[100px] gap-2', facePositions[j].className)}
					key={`cube-side-${j}`}
					style={{
						gridTemplateColumns: `30px repeat(${cubeSize}, 40px) 30px`,
						gridTemplateRows: `30px repeat(${cubeSize}, ${j !== 1 ? '35px' : '40px'}) `,
						transform: facePositions[j].transform,
					}}
				>
					{cubelets}
				</div>
			);
		}

		return (
			<div
				style={{zoom: 0.55, height: 190, marginTop: 35}}
				className="relative h-[90px] w-[90px]"
			>
				{output}
			</div>
		);
	}

	// Without a cube size (e.g. non-NxN puzzles) or colors there is nothing to draw
	if (!colors || !cubeColors.length || (!cubeSize && !icon)) {
		return null;
	}

	let body;
	if (icon) {
		body = (
			<div className="flex h-[130px] w-full items-center justify-center">
				<i className={`${icon} text-[4rem] text-text`} />
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
		<div style={style}>
			{body}
		</div>
	);
}
