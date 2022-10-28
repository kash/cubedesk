import React, {useContext} from 'react';
import {SlideShowContext} from './SlideShow';
import classNames from 'classnames';

export default function SlideShowDots() {
	const {slides, currentSlideIndex, setCurrentSlideIndex} = useContext(SlideShowContext);

	function clickDot(slideIndex: number) {
		setCurrentSlideIndex(slideIndex);
	}

	const dots = slides.map((_, index) => {
		const slideIsSelected = index === currentSlideIndex;

		return (
			<button onClick={() => clickDot(index)} className="p-3">
				<span
					className={classNames('w-5 h-5 rounded-full bg-black border-solid border-2 border-gray-800', {
						'bg-white': slideIsSelected,
					})}
				></span>
			</button>
		);
	});

	return <div className="flex flex-row">{dots}</div>;
}
