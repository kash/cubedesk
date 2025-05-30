import {Button} from '@/components/ui/button';
import classNames from 'classnames';
import React, {useContext} from 'react';
import {SlideShowContext} from './SlideShow';

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

	let closeButton = null;
	if (showCloseButton) {
		closeButton = (
			<div className="opacity-60 transition-opacity hover:opacity-100">
				<Button size="lg" variant="ghost" onClick={onComplete}>
					Close
				</Button>
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
						size="lg"
						variant="ghost"
						onClick={prevSlide}
						disabled={currentSlideIndex <= 0}
					>
						Prev
					</Button>
				</div>
				<Button variant="default" size="lg" onClick={nextSlide}>
					{nextButtonText}
				</Button>
			</div>
		</div>
	);
}
