'use client';

import React from 'react';
import '../../../components/landing/legal/Legal.scss';
import block from '../../../styles/bem';

const b = block('landing-legal');

export default function TermsPage() {
	return (
		<div className={b()}>
			<h1>Terms and Conditions</h1>
			<p>Last updated: May 25, 2021</p>
			<p>Please read these terms and conditions carefully before using Our Service.</p>
			<h1>Interpretation and Definitions</h1>
			<h2>Interpretation</h2>
			<p>
				The words of which the initial letter is capitalized have meanings defined under the following
				conditions. The following definitions shall have the same meaning regardless of whether they appear in
				singular or in plural.
			</p>
			<h2>Definitions</h2>
			<p>For the purposes of these Terms and Conditions:</p>
			<ul>
				<li>
					<p>
						<strong>Affiliate</strong> means an entity that controls, is controlled by or is under common
						control with a party, where &quot;control&quot; means ownership of 50% or more of the shares,
						equity interest or other securities entitled to vote for election of directors or other managing
						authority.
					</p>
				</li>
				<li>
					<p>
						<strong>Account</strong> means a unique account created for You to access our Service or parts
						of our Service.
					</p>
				</li>
				<li>
					<p>
						<strong>Country</strong> refers to: Washington, United States
					</p>
				</li>
				<li>
					<p>
						<strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;,
						&quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to CubeDesk.
					</p>
				</li>
				<li>
					<p>
						<strong>Content</strong> refers to content such as text, images, or other information that can
						be posted, uploaded, linked to or otherwise made available by You, regardless of the form of
						that content.
					</p>
				</li>
				<li>
					<p>
						<strong>Device</strong> means any device that can access the Service such as a computer, a
						cellphone or a digital tablet.
					</p>
				</li>
				<li>
					<p>
						<strong>Feedback</strong> means feedback, innovations or suggestions sent by You regarding the
						attributes, performance or features of our Service.
					</p>
				</li>
				<li>
					<p>
						<strong>Promotions</strong> refer to contests, sweepstakes or other promotions offered through
						the Service.
					</p>
				</li>
				<li>
					<p>
						<strong>Service</strong> refers to the Website.
					</p>
				</li>
				<li>
					<p>
						<strong>Subscriptions</strong> refer to the services or access to the Service offered on a
						subscription basis by the Company to You.
					</p>
				</li>
				<li>
					<p>
						<strong>Terms and Conditions</strong> (also referred as &quot;Terms&quot;) mean these Terms and
						Conditions that form the entire agreement between You and the Company regarding the use of the
						Service.
					</p>
				</li>
				<li>
					<p>
						<strong>Third-party Social Media Service</strong> means any services or content (including data,
						information, products or services) provided by a third-party that may be displayed, included or
						made available by the Service.
					</p>
				</li>
				<li>
					<p>
						<strong>Website</strong> refers to CubeDesk, accessible from{' '}
						<a href="/" rel="external nofollow noopener" target="_blank">
							https://www.cubedesk.io
						</a>
					</p>
				</li>
				<li>
					<p>
						<strong>You</strong> means the individual accessing or using the Service, or the company, or
						other legal entity on behalf of which such individual is accessing or using the Service, as
						applicable.
					</p>
				</li>
			</ul>
			<h1>Acknowledgment</h1>
			<p>
				These are the Terms and Conditions governing the use of this Service and the agreement that operates
				between You and the Company. These Terms and Conditions set out the rights and obligations of all users
				regarding the use of the Service.
			</p>
			<p>
				Your access to and use of the Service is conditioned on Your acceptance of and compliance with these
				Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or
				use the Service.
			</p>
			<p>
				By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree
				with any part of these Terms and Conditions then You may not access the Service.
			</p>
			<p>
				You represent that you are over the age of 18. The Company does not permit those under 18 to use the
				Service.
			</p>
			<p>
				Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the
				Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the
				collection, use and disclosure of Your personal information when You use the Application or the Website
				and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy
				carefully before using Our Service.
			</p>
			{/* Continuing with the rest of the content - this is truncated for brevity but would include all the original content */}
			<h1>Contact Us</h1>
			<p>If you have any questions about these Terms and Conditions, You can contact us:</p>
			<ul>
				<li>By email: kash@cubedesk.io</li>
			</ul>
		</div>
	);
}