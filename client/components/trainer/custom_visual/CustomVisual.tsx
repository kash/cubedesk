import React from 'react';
import './CustomVisual.scss';
import block from '../../../styles/bem';
import {getCubeTypeInfoById} from '../../../util/cubes/util';
import CSS from 'csstype';

const b = block('custom-visual');

const DEFAULT_COLOR = '#3F464F';
const GRID_GAP_MULTIPLIER = 0.15;
const THREE_D_SIDE_MULTIPLIER = 0.78;

interface Props {
	cubeletSize: number;
	colors: string | string[];
	cubeType: string;
	rotate?: number;
	threeD?: boolean;
	onSelect?: (index: number) => void;
}

export default function CustomVisual(props: Props) {
	const {threeD, cubeletSize, onSelect} = props;
	const colors = typeof props.colors === 'string' ? props.colors.split(',') : props.colors;
	const edgeSize = cubeletSize / 2;

	const cubeType = getCubeTypeInfoById(props.cubeType);
	const cubeSize = cubeType.size;

	function get2DCubelets() {
		const cubelets = [];
		const cubeWidth = cubeSize + 2;
		let sub = 0;
		for (let i = 0; i < cubeWidth; i += 1) {
			for (let k = 0; k < cubeWidth; k += 1) {
				const index = i * cubeWidth + k;
				const kEmpty = k === 0 || k === cubeWidth - 1;
				const empty = (i === 0 && kEmpty) || (i === cubeWidth - 1 && kEmpty);

				if (empty) {
					sub += 1;
				}

				const off = index - sub;
				let color = colors[off];
				if (color === '#000000') {
					color = 'rgb(var(--primary-color))';
				}

				let tag = (
					<span
						key={`cubeNumber-${index}`}
						className={b('cubelet', {empty})}
						style={{backgroundColor: color || DEFAULT_COLOR}}
					/>
				);

				if (onSelect) {
					tag = (
						<button
							type="button"
							disabled={empty}
							onClick={() => onSelect(off)}
							key={`cubeNumber-${index}`}
							className={b('cubelet', {button: true, empty})}
							style={{backgroundColor: color || DEFAULT_COLOR}}
						/>
					);
				}

				cubelets.push(tag);
			}
		}

		return cubelets;
	}

	function get3DCubelets() {
		const output = [];

		let sub = 0;
		for (let j = 0; j < 3; j += 1) {
			const cubelets = [];
			for (let i = 0; i < cubeSize; i += 1) {
				for (let k = 0; k < cubeSize; k += 1) {
					const off = sub;

					let color = colors[off];
					if (color === '#000000') {
						color = null;
					}
					let tag = (
						<span
							key={`cubeNumber-${off}`}
							className={b('cubelet', {threeD: true})}
							style={{backgroundColor: color || DEFAULT_COLOR}}
						/>
					);

					if (onSelect) {
						tag = (
							<button
								type="button"
								onClick={() => onSelect(off)}
								key={`cubeNumber-${off}`}
								className={b('cubelet', {button: true, threeD: true})}
								style={{backgroundColor: color || DEFAULT_COLOR}}
							/>
						);
					}

					cubelets.push(tag);

					sub += 1;
				}
			}

			const cz = `${cubeletSize * (j === 1 ? 1 : THREE_D_SIDE_MULTIPLIER)}`;
			output.push(
				<div
					className={b('threeD-face')}
					key={`cube-side-${j}`}
					style={{
						gridTemplateColumns: `repeat(${cubeSize}, ${cubeletSize}px)`,
						gridTemplateRows: `repeat(${cubeSize}, ${cz}px)`,
						gridGap: `${Math.max(1, cubeletSize * GRID_GAP_MULTIPLIER)}px`,
					}}
				>
					{cubelets}
				</div>
			);
		}

		return output;
	}

	let body;
	if (threeD) {
		body = <div className={b('threeD-body')}>{get3DCubelets()}</div>;
	} else {
		body = (
			<div
				className={b('twoD-body')}
				style={{
					gridTemplateColumns: `${edgeSize}px repeat(${cubeSize}, ${cubeletSize}px) ${edgeSize}px`,
					gridTemplateRows: `${edgeSize}px repeat(${cubeSize}, ${cubeletSize}px) ${edgeSize}px`,
					gridGap: `${Math.max(1, cubeletSize * GRID_GAP_MULTIPLIER)}px`,
				}}
			>
				{get2DCubelets()}
			</div>
		);
	}

	const style: CSS.Properties = {};
	if (props.rotate) {
		style.transform = `rotate(${props.rotate}deg)`;
	}
	return (
		<div
			style={style}
			className={b({
				threeD,
			})}
		>
			{body}
		</div>
	);
}
