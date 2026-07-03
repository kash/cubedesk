import React, {ReactNode, useState} from 'react';
import Button from '@/components/common/Button';
import {IModalProps} from '@/components/common/modal/Modal';
import {resourceUri} from '@/util/storage';

interface WelcomePage {
	title: ReactNode;
	description: ReactNode;
	imgSrc: string;
	action?: ReactNode;
}

/*

1. Welcome
2. Timer
3. Stats
4. 1v1
5. Trainer
6. Import solves
7. Start cubing, Discord / Reddit

 */

const PAGES: WelcomePage[] = [
	{
		title: 'Welcome to CubeDesk',
		description: 'CubeDesk is a free',
		imgSrc: resourceUri('/images/setting/welcome.svg'),
	},
];

export default function WelcomeScreen(props: IModalProps) {
	const [pageIndex, setPageIndex] = useState(0);

	function closeModal() {
		props.onComplete?.(null);
	}

	function nextPage() {
		setPageIndex(pageIndex + 1);
	}

	const page = PAGES[pageIndex];
	const pageDiv = (
		<div>
			<h1>{page.title}</h1>
			<p>{page.description}</p>
			<img src={page.imgSrc} />
		</div>
	);

	// Check if on last page
	const isLastPage = pageIndex === PAGES.length - 1;
	let nextButton;
	if (isLastPage) {
		nextButton = <Button onClick={closeModal} text="Start Cubing!" />;
	} else {
		nextButton = <Button text="Next" onClick={nextPage} />;
	}

	return (
		<div>
			{pageDiv}
			<div>{nextButton}</div>
		</div>
	);
}
