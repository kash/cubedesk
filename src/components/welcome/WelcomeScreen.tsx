import {Button} from '@/components/ui/button';
import './WelcomeScreen.scss';
import React, {ReactNode, useState} from 'react';
import {resourceUri} from '../../lib/util/storage';
import block from '../../styles/bem';
import {IModalProps} from '../common/modal/Modal';

const b = block('welcome-screen');

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

	const {onComplete} = props;

	const closeModal = React.useCallback(() => {
		if (onComplete) {
			onComplete(null);
		}
	}, [onComplete]);

	const nextPage = React.useCallback(() => {
		setPageIndex((i) => i + 1);
	}, []);

	const page = PAGES[pageIndex];
	const pageDiv = (
		<div className={b('page')}>
			<h1>{page.title}</h1>
			<p>{page.description}</p>
			<img src={page.imgSrc} />
		</div>
	);

	// Check if on last page
	const isLastPage = pageIndex === PAGES.length - 1;
	let nextButton;
	if (isLastPage) {
		nextButton = <Button onClick={closeModal}>Start Cubing!</Button>;
	} else {
		nextButton = <Button onClick={nextPage}>Next</Button>;
	}

	return (
		<div className={b()}>
			{pageDiv}
			<div className={b('bottom-buttons')}>{nextButton}</div>
		</div>
	);
}
