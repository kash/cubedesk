import React from 'react';

interface Props {
	min: number;
	max: number;
	value: string;
	onChange: (e) => void;
}

export default function Slider(props: Props) {
	const {onChange, min, max, value} = props;

	return (
		<div>
			<input
				className="h-5 w-full appearance-none rounded-full bg-button outline-none transition-opacity duration-200 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-text [&::-webkit-slider-thumb]:shadow-[0_2px_6px_rgba(0,0,0,0.1)]"
				onChange={onChange}
				type="range"
				min={min}
				max={max}
				value={value}
			/>
		</div>
	);
}
