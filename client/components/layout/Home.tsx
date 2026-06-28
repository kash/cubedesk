import React from 'react';
import {useMe} from '@/util/hooks/useMe';
import LandingHome from '@/components/landing/home/LandingHome';
import App from '@/components/layout/App';
import Landing from '@/components/landing/Landing';
import DefaultTimer from '@/components/timer/DefaultTimer';

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
