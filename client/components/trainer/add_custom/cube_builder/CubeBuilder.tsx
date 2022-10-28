import React, {useEffect, useState} from 'react';
import './CubeBuilder.scss';
import block from '../../../../styles/bem';
import {getCubeTypeInfoById} from '../../../../util/cubes/util';
import CustomVisual from '../../custom_visual/CustomVisual';

const b = block('custom-cube-builder');

const DEFAULT_COLOR = '#3F464F';
const COLORS = ['#FF9826', '#43FF43', '#FF4343', '#246BFD', '#FFFF49', '#FFFFFF', '#3F464F'];

interface Props {
	cubeType: string;
	initColors: string;
	threeD: boolean;
	onUpdate: (colors: string) => void;
}

export default function CubeBuilder(props: Props) {
	const {cubeType, initColors, threeD, onUpdate} = props;
	const cubeTypeInfo = getCubeTypeInfoById(cubeType);

	const [colors, setColors] = useState(getDefaultColorList());
	const [selectedColor, setSelectedColor] = useState(COLORS[0]);

	useEffect(() => {
		updateColorsFromInit();
	}, []);

	useEffect(() => {
		updateColorsFromInit();
	}, [cubeType, threeD]);

	function updateColorsFromInit() {
		let newCols = getDefaultColorList();
		if (initColors && initColors.length) {
			if (typeof initColors === 'string') {
				newCols = initColors.split(',');
			} else if (Array.isArray(initColors)) {
				newCols = initColors;
			}
		}

		setColors(newCols);
	}

	useEffect(() => {
		onUpdate(colors.filter((c) => !!c).join(','));
	}, [colors.join(',')]);

	function getDefaultColorList() {
		if (threeD) {
			return new Array((cubeTypeInfo.size + 2) ** 2 - 4).fill(DEFAULT_COLOR);
		} else {
			return new Array(cubeTypeInfo.size ** 2 + cubeTypeInfo.size * 4).fill(DEFAULT_COLOR);
		}
	}

	function clickCubelet(cubeletIndex: number) {
		const newColors = [...colors];

		if (newColors[cubeletIndex] === selectedColor) {
			newColors[cubeletIndex] = DEFAULT_COLOR;
		} else {
			newColors[cubeletIndex] = selectedColor;
		}

		setColors(newColors);
	}

	const colorPicker = COLORS.map((color) => (
		<button
			type="button"
			onClick={() => setSelectedColor(color)}
			key={color}
			className={b('color-cubelet', {selected: color === selectedColor})}
			style={{backgroundColor: color, color}}
		/>
	));

	return (
		<div className={b()}>
			<div className={b('colors')}>{colorPicker}</div>
			<div className={b('visual')}>
				<CustomVisual
					cubeletSize={40}
					colors={colors}
					cubeType={cubeType}
					onSelect={clickCubelet}
					threeD={threeD}
				/>
				<span className={b('visual-background').mix('pattern-grid-md')} />
			</div>
		</div>
	);
}
