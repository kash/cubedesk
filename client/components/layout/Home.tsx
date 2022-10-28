import React from 'react';
import {useMe} from '../../util/hooks/useMe';
import LandingHome from '../landing/home/LandingHome';
import App from './App';
import Landing from '../landing/Landing';
import DefaultTimer from '../timer/DefaultTimer';

export default function Home(props: any) {
	const me = useMe();

	if (me) {
		return (
			<App {...props}>
				<DefaultTimer />
			</App>
		);
	} else {
		return (
			<Landing {...props}>
				<LandingHome />
			</Landing>
		);
	}
}
