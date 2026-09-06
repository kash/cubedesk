import CustomVisual from '@/components/trainer/CustomVisual';
import {Button} from '@/components/ui/button';
import {cn} from '@/util/cn';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import classNames from 'classnames';
import React, {useEffect, useState} from 'react';

const DEFAULT_COLOR = '#3F464F';
const COLORS = ['#FF9826', '#43FF43', '#FF4343', '#246BFD', '#FFFF49', '#FFFFFF', '#3F464F'];

interface Props {
	cubeType: string;
	// Null when the trainer being edited has no stored colors
	initColors: string | null;
	threeD: boolean;
	onUpdate: (colors: string) => void;
}

export default function CubeBuilder(props: Props) {
	const {cubeType, initColors, threeD, onUpdate} = props;
	// Non-NxN puzzles have no size; the builder then renders no cubelets
	const cubeSize = getCubeTypeInfoById(cubeType)?.size ?? 0;

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
			return new Array((cubeSize + 2) ** 2 - 4).fill(DEFAULT_COLOR);
		} else {
			return new Array(cubeSize ** 2 + cubeSize * 4).fill(DEFAULT_COLOR);
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
		<Button
			variant="ghost"
			aria-label={`Paint color ${color}`}
			aria-pressed={color === selectedColor}
			type="button"
			onClick={() => setSelectedColor(color)}
			key={color}
			className={cn(
				'h-auto p-0 font-normal whitespace-normal hover:bg-transparent',
				classNames(
					'mb-[5px] h-[35px] w-[35px] rounded opacity-40 transition-all duration-100 ease-in-out',
					color === selectedColor && 'rounded-full opacity-100 shadow-[0_0_20px]',
				),
			)}
			style={{backgroundColor: color, color}}
		/>
	));

	return (
		<div className="mt-10 mb-[30px] flex flex-col items-center">
			<div className="mb-[30px] flex flex-row flex-wrap gap-x-2.5">{colorPicker}</div>
			<div className="bg-module relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-[10px]">
				<CustomVisual
					cubeletSize={40}
					colors={colors}
					cubeType={cubeType}
					onSelect={clickCubelet}
					threeD={threeD}
				/>
				<span className="pattern-grid-md text-primary/10 absolute top-1/2 left-1/2 z-0 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 rotate-45" />
			</div>
		</div>
	);
}
