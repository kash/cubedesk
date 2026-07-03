import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import CustomVisual from '@/components/trainer/CustomVisual';

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
			className={classNames(
				'mb-[5px] h-[35px] w-[35px] rounded opacity-40 transition-all duration-100 ease-in-out',
				color === selectedColor && 'rounded-full opacity-100 shadow-[0_0_20px]'
			)}
			style={{backgroundColor: color, color}}
		/>
	));

	return (
		<div className="mb-[30px] mt-10 flex flex-col items-center">
			<div className="mb-[30px] flex flex-row flex-wrap gap-x-2.5">{colorPicker}</div>
			<div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-[10px] bg-module">
				<CustomVisual
					cubeletSize={40}
					colors={colors}
					cubeType={cubeType}
					onSelect={clickCubelet}
					threeD={threeD}
				/>
				<span className="pattern-grid-md absolute left-1/2 top-1/2 z-0 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 rotate-45 text-primary/10" />
			</div>
		</div>
	);
}
