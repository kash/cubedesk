import React from 'react';
import './Landing.scss';
import block from '../../styles/bem';
import LandingNav from './common/landing_nav/LandingNav';
import {useRouteMatch} from 'react-router-dom';

const b = block('landing');

const showBorderNavForPath = {
	'/help': true,
	'/help/:category/:slug': true,
	'/help/:category/:slug/:slug2': true,
};

export default function Landing(props: any) {
	const {children} = props;
	const match = useRouteMatch();

	return (
		<div className={b()}>
			<LandingNav showBorder={showBorderNavForPath[match.path]} />
			{children}
		</div>
	);
}
