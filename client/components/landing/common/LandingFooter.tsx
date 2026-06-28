import React from 'react';

export default function LandingFooter() {
	return (
		<div className="mt-[50px]">
			<ul className="flex flex-row">
				<li>
					<a className="opacity-70" href="mailto:kash@cubedesk.io">
						Email Support
					</a>
				</li>
				<li className="ml-5">
					<a className="opacity-70" href="/terms">
						Terms
					</a>
				</li>
				<li className="ml-5">
					<a className="opacity-70" href="/privacy">
						Privacy Policy
					</a>
				</li>
			</ul>
		</div>
	);
}
