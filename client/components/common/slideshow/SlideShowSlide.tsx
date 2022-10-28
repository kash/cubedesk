import React, {ReactNode} from 'react';
import SlideShowDots from './SlideShowDots';
import SlideShowButtons from './SlideShowButtons';
import TextBody from '../text_body/TextBody';

export interface SlideShowSlideProps {
	imgSrc: string;
	body: ReactNode;
	title: string;
}

export default function SlideShowSlide(props: SlideShowSlideProps) {
	const {imgSrc, body, title} = props;

	return (
		<div className="flex flex-row w-full h-[500px]">
			<div className="h-full w-[500px] min-w-[500px] relative">
				<img
					alt={title}
					className="object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full w-full h-full shadow-lg"
					src={imgSrc}
				/>
				<div className="absolute left-1/2 -translate-x-1/2 bottom-3">
					<SlideShowDots />
				</div>
			</div>
			<div className="p-8 h-full w-full">
				<div className="w-full h-full relative flex flex-col justify-between">
					<div className="w-full">
						<TextBody title={title}>{body}</TextBody>
					</div>
					<SlideShowButtons />
				</div>
			</div>
		</div>
	);
}
