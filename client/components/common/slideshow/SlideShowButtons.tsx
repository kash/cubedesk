import React, {useContext, ReactNode} from 'react';
import Button from '@/components/common/Button';
import {SlideShowContext} from './SlideShow';
import classNames from 'classnames';

export default function SlideShowButtons() {
	const {
		showCloseButton: showCloseButton,
		firstSlide,
		lastSlide,
		lastButtonText,
		onComplete,
		setCurrentSlideIndex,
		currentSlideIndex,
	} = useContext(SlideShowContext);

	function prevSlide() {
		if (currentSlideIndex > 0) {
			setCurrentSlideIndex(currentSlideIndex - 1);
		}
	}

	function nextSlide() {
		if (lastSlide) {
			onComplete();
		} else {
			setCurrentSlideIndex(currentSlideIndex + 1);
		}
	}

	let closeButton: ReactNode = null;
	if (showCloseButton) {
		closeButton = (
			<div className="opacity-60 transition-opacity hover:opacity-100">
				<Button large transparent onClick={onComplete} text="Close" />
			</div>
		);
	}

	let nextButtonText = 'Next';
	if (lastSlide) {
		if (lastButtonText) {
			nextButtonText = lastButtonText;
		} else {
			nextButtonText = 'Done';
		}
	}

	return (
		<div className="flex w-full flex-row items-center justify-between">
			<div>{closeButton}</div>
			<div className="flex flex-row items-center">
				<div
					className={classNames('mr-3', 'transition-opacity', {
						'opacity-0': firstSlide,
					})}
				>
					<Button
						large
						transparent
						onClick={prevSlide}
						disabled={currentSlideIndex <= 0}
						text="Prev"
					/>
				</div>
				<Button primary large onClick={nextSlide} text={nextButtonText} />
			</div>
		</div>
	);
}
