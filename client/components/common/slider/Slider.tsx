import React from 'react';
import './Slider.scss';

interface Props {
	min: number;
	max: number;
	value: string;
	onChange: (e) => void;
}

export default function Slider(props: Props) {
	const {onChange, min, max, value} = props;

	return (
		<div className="cd-common__slider">
			<input
				className="cd-common__slider__slider"
				onChange={onChange}
				type="range"
				min={min}
				max={max}
				value={value}
			/>
		</div>
	);
}
