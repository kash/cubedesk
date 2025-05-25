import React from 'react';
import './SignUpBanner.scss';
import block from '../../../../styles/bem';
import SignUpButton from '../signup_button/SignUpButton';
import FeatureCircles from '../feature/feature_circles/FeatureCircles';

const b = block('landing-signup-banner');

interface Props {}

export default function SignUpBanner(props: Props) {
	return (
		<div className={b()}>
			<FeatureCircles
				position="topLeft"
				primaryColor="#1e88e5"
				secondaryColor="#0097a7"
				featureTitle="Sign up"
				count={7}
				xOffset={70}
				yOffset={20}
			/>
			<div className={b('body')}>
				<h3>Sign up for free today!</h3>
				<SignUpButton />
			</div>
		</div>
	);
}
