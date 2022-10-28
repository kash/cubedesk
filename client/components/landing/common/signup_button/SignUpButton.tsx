import React from 'react';
import './SignUpButton.scss';
import block from '../../../../styles/bem';

const b = block('landing-signup-button');

export default function SignUpButton() {
	return (
		<div className={b('wrapper')}>
			<a href="/demo" className={b()}>
				<span>Try Demo</span>
				<i className="ph-arrow-right" />
			</a>
		</div>
	);
}
