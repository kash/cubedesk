import {Slider as SliderControl} from '@/components/ui/slider';
import React from 'react';

interface Props {
	min: number;
	max: number;
	value: number;
	label: string;
	onValueChange: (value: number) => void;
}

export default function Slider({min, max, value, label, onValueChange}: Props) {
	return (
		<SliderControl
			min={min}
			max={max}
			step={1}
			value={[value]}
			aria-label={label}
			onValueChange={([next]) => onValueChange(next)}
			className="my-2 w-40 max-w-full"
		/>
	);
}
