import React from 'react';
import './Landing.scss';
import block from '../../styles/bem';
import LandingNav from './common/landing_nav/LandingNav';

const b = block('landing');

export default function Landing(props: any) {
	const {children} = props;

	return (
		<div className={b()}>
			<LandingNav />
			{children}
		</div>
	);
}
