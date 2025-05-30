import React, {ReactNode} from 'react';
import TextBody from '../text_body/TextBody';
import SlideShowButtons from './SlideShowButtons';
import SlideShowDots from './SlideShowDots';

export interface SlideShowSlideProps {
	imgSrc: string;
	body: ReactNode;
	title: string;
}

export default function SlideShowSlide(props: SlideShowSlideProps) {
	const {imgSrc, body, title} = props;

	return (
		<div className="flex h-[500px] w-full flex-row">
			<div className="relative h-full w-[500px] min-w-[500px]">
				<img
					alt={title}
					className="absolute top-1/2 left-1/2 h-full max-h-full w-full max-w-full -translate-x-1/2 -translate-y-1/2 object-cover shadow-lg"
					src={imgSrc}
				/>
				<div className="absolute bottom-3 left-1/2 -translate-x-1/2">
					<SlideShowDots />
				</div>
			</div>
			<div className="h-full w-full p-8">
				<div className="relative flex h-full w-full flex-col justify-between">
					<div className="w-full">
						<TextBody title={title}>{body}</TextBody>
					</div>
					<SlideShowButtons />
				</div>
			</div>
		</div>
	);
}
