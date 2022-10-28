import React, {createContext, useState} from 'react';
import SlideShowSlide, {SlideShowSlideProps} from './SlideShowSlide';
import {reactState} from '../../../@types/react';

interface SlideShowProps {
	lastButtonText?: string;
	showCloseButton?: boolean;
	onComplete: () => void;
	slides: SlideShowSlideProps[];
}

export interface ISlideShowContext extends SlideShowProps {
	firstSlide: boolean;
	lastSlide: boolean;
	currentSlideProps: SlideShowSlideProps;
	currentSlideIndex: number;
	setCurrentSlideIndex: reactState<number>;
}

export const SlideShowContext = createContext<ISlideShowContext>(null);

export default function SlideShow(props: SlideShowProps) {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

	const {slides} = props;

	const firstSlide = currentSlideIndex <= 0;
	const lastSlide = currentSlideIndex >= slides.length - 1;
	const currentSlideProps = slides[currentSlideIndex];

	const context: ISlideShowContext = {
		...props,
		firstSlide,
		lastSlide,
		currentSlideProps,
		currentSlideIndex,
		setCurrentSlideIndex,
	};

	return (
		<SlideShowContext.Provider value={context}>
			<div className="relative w-full">
				<SlideShowSlide {...currentSlideProps} />
			</div>
		</SlideShowContext.Provider>
	);
}
