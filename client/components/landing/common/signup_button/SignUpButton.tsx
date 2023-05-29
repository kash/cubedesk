import React from 'react';
import './SignUpButton.scss';
import {ArrowRight} from '@phosphor-icons/react';
import block from '../../../../styles/bem';

const b = block('landing-signup-button');

export default function SignUpButton() {
	return (
		<div className={b('wrapper')}>
			<a href="/demo" className={b()}>
				<span>Try Demo</span>
				<ArrowRight />
			</a>
		</div>
	);
}
