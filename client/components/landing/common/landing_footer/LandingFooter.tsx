import React from 'react';
import './LandingFooter.scss';
import block from '../../../../styles/bem';

const b = block('landing-footer');

export default function LandingFooter() {
	return (
		<div className={b()}>
			<ul>
				<li>
					<a href="mailto:kash@cubedesk.io">Email Support</a>
				</li>
				<li>
					<a href="/terms">Terms</a>
				</li>
				<li>
					<a href="/privacy">Privacy Policy</a>
				</li>
			</ul>
		</div>
	);
}
