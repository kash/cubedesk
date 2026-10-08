import {LEGAL_CONTACT_EMAIL, LEGAL_LAST_UPDATED} from '@/components/docs/legal';
import {DocHeading, DocLink, DocList, DocParagraph, DocTitle} from '@/components/docs/prose';
import React from 'react';

export default function Terms() {
	return (
		<>
			<DocTitle lead={`Last updated: ${LEGAL_LAST_UPDATED}`}>Terms of Service</DocTitle>

			<DocParagraph>
				These terms are an agreement between you and CubeDesk (&quot;we&quot;,
				&quot;us&quot;) and cover your use of cubedesk.io and everything on it (the
				&quot;Service&quot;). By using CubeDesk or creating an account, you agree to these
				terms and to our <DocLink to="/privacy">Privacy Policy</DocLink>. If you don&apos;t
				agree, please don&apos;t use CubeDesk.
			</DocParagraph>

			<DocHeading id="eligibility">Who can use CubeDesk</DocHeading>
			<DocList>
				<li>
					You must be at least 13 years old to create an account, or older if the law in
					your country requires a higher age to use online services without a
					parent&apos;s consent.
				</li>
				<li>
					If you&apos;re under 18, or under the age of majority where you live, a parent
					or guardian must review and agree to these terms for you.
				</li>
				<li>You can&apos;t use CubeDesk if we&apos;ve previously banned your account.</li>
			</DocList>

			<DocHeading id="your-account">Your account</DocHeading>
			<DocList>
				<li>Give us a real email address that you control.</li>
				<li>
					Keep your password secret. You&apos;re responsible for what happens on your
					account, so tell us right away if you think someone else has accessed it.
				</li>
				<li>
					Don&apos;t pick a username that impersonates someone else, infringes a
					trademark, or is offensive.
				</li>
				<li>One person per account, and don&apos;t sell or share your account.</li>
			</DocList>

			<DocHeading id="your-content">Your content</DocHeading>
			<DocParagraph>
				You own the solves, profile details, images, messages, trainers, and anything else
				you add to CubeDesk (&quot;your content&quot;). You give us a worldwide,
				royalty-free license to store, display, and share your content as needed to run
				CubeDesk, for example to show your public profile, leaderboard entries, and shared
				solves. This license ends when you delete the content or your account, except for
				copies other people already shared or that remain in backups for a limited time.
			</DocParagraph>
			<DocParagraph>
				Only upload content you have the right to share, and remember that profiles,
				leaderboards, and shared solves are public.
			</DocParagraph>

			<DocHeading id="community-rules">Community rules</DocHeading>
			<DocParagraph>When you use CubeDesk, don&apos;t:</DocParagraph>
			<DocList>
				<li>
					Harass, bully, threaten, or discriminate against anyone, in chat or anywhere
					else.
				</li>
				<li>
					Post anything sexual, violent, hateful, illegal, or otherwise inappropriate for
					a community that includes teenagers.
				</li>
				<li>
					Ask other users for personal information, or share your own or anyone
					else&apos;s, such as a real name, address, school, phone number, or photos.
				</li>
				<li>
					Cheat, including submitting fake or manipulated times, using software or other
					help in matches, or manipulating ratings and leaderboards.
				</li>
				<li>Spam, advertise, or impersonate other people or CubeDesk.</li>
				<li>
					Hack, overload, scrape, or interfere with CubeDesk, or use bots or automated
					tools without our permission.
				</li>
			</DocList>
			<DocParagraph>
				You can report users who break these rules with the Report option on their profile.
			</DocParagraph>

			<DocHeading id="moderation">Moderation and termination</DocHeading>
			<DocParagraph>
				We may remove content, reset results, or suspend or ban accounts that break these
				terms or put other users at risk. We&apos;ll usually explain why, but we don&apos;t
				have to. You can stop using CubeDesk and delete your account at any time from
				Account → Danger Zone.
			</DocParagraph>

			<DocHeading id="third-party-services">Other services and devices</DocHeading>
			<DocParagraph>
				CubeDesk works with services and hardware we don&apos;t control, such as the World
				Cube Association, Discord, and Bluetooth smart cubes and timers. Your use of those
				is governed by their own terms, and we aren&apos;t responsible for them. Results
				from CubeDesk aren&apos;t official WCA results.
			</DocParagraph>

			<DocHeading id="copyright">Copyright complaints</DocHeading>
			<DocParagraph>
				If you believe something on CubeDesk infringes your copyright, email our copyright
				agent at{' '}
				<DocLink to={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</DocLink> with:
			</DocParagraph>
			<DocList>
				<li>Your contact information and a physical or electronic signature.</li>
				<li>A description of the copyrighted work.</li>
				<li>The link to the content you believe infringes it.</li>
				<li>
					A statement that you have a good-faith belief the use isn&apos;t authorized, and
					a statement, under penalty of perjury, that your notice is accurate and that
					you&apos;re the owner or authorized to act for the owner.
				</li>
			</DocList>
			<DocParagraph>
				We remove infringing content and ban accounts that repeatedly infringe.
			</DocParagraph>

			<DocHeading id="our-rights">CubeDesk&apos;s content and feedback</DocHeading>
			<DocParagraph>
				The CubeDesk name, logo, design, and software belong to us and our licensors. If
				you send us ideas or feedback, we can use them without owing you anything.
			</DocParagraph>

			<DocHeading id="changes-to-the-service">Changes to the Service</DocHeading>
			<DocParagraph>
				CubeDesk is free, and we&apos;re always changing it. We may add, change, or remove
				features, or stop offering the Service. Keep your own export of any solves you
				can&apos;t afford to lose from Settings → Data.
			</DocParagraph>

			<DocHeading id="disclaimers">Disclaimers</DocHeading>
			<DocParagraph>
				CubeDesk is provided &quot;as is&quot; and &quot;as available&quot;, without
				warranties of any kind, including warranties of merchantability, fitness for a
				particular purpose, and non-infringement. We don&apos;t promise that it will always
				be available, accurate, or free of errors, or that your data will never be lost.
			</DocParagraph>

			<DocHeading id="liability">Limitation of liability</DocHeading>
			<DocParagraph>
				To the fullest extent the law allows, CubeDesk won&apos;t be liable for any
				indirect, incidental, special, consequential, or punitive damages, or for lost data
				or profits, arising from your use of the Service. Our total liability for any claim
				is limited to $100. Some places don&apos;t allow these limits, so they may not
				apply to you.
			</DocParagraph>

			<DocHeading id="governing-law">Governing law</DocHeading>
			<DocParagraph>
				These terms are governed by the laws of the State of Washington, United States,
				without regard to its conflict of law rules. If you have a dispute with us, please
				contact us first so we can try to resolve it informally. If you live in the EU or
				UK, you also keep the protections of the consumer laws where you live.
			</DocParagraph>

			<DocHeading id="changes">Changes to these terms</DocHeading>
			<DocParagraph>
				We may update these terms. If we make meaningful changes, we&apos;ll update the
				date at the top of this page and let you know on the site or by email before they
				take effect. If you keep using CubeDesk after that, you accept the new terms.
			</DocParagraph>

			<DocHeading id="contact">Contact</DocHeading>
			<DocParagraph>
				Questions about these terms? Email{' '}
				<DocLink to={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</DocLink>.
			</DocParagraph>
		</>
	);
}
