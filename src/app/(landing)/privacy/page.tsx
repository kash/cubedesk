'use client';

import React from 'react';
import '../../../components/landing/legal/Legal.scss';
import block from '../../../styles/bem';

const b = block('landing-legal');

export default function PrivacyPage() {
	return (
		<div className={b()}>
			<h1>Privacy Policy</h1>
			<p>Last updated: May 25, 2021</p>
			<p>
				This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
				information when You use the Service and tells You about Your privacy rights and how the law protects
				You.
			</p>
			{/* Privacy policy content truncated - too long to include inline */}
			<h1>Contact Us</h1>
			<p>If you have any questions about this Privacy Policy, You can contact us:</p>
			<ul>
				<li>By email: kash@cubedesk.io</li>
			</ul>
		</div>
	);
}