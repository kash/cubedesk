import {LEGAL_CONTACT_EMAIL, LEGAL_LAST_UPDATED} from '@/components/docs/legal';
import {
	DocHeading,
	DocLink,
	DocList,
	DocParagraph,
	DocSubheading,
	DocTitle,
} from '@/components/docs/prose';
import React from 'react';

export default function Privacy() {
	return (
		<>
			<DocTitle lead={`Last updated: ${LEGAL_LAST_UPDATED}`}>Privacy Policy</DocTitle>

			<DocParagraph>
				This policy explains what information CubeDesk (&quot;we&quot;, &quot;us&quot;)
				collects when you use cubedesk.io, how we use it, who we share it with, and the
				choices you have. We try to collect as little as we need to run a cube timer.
			</DocParagraph>

			<DocHeading id="what-we-collect">What we collect</DocHeading>
			<DocSubheading>When you create an account</DocSubheading>
			<DocList>
				<li>Your email address, username, and password (stored only as a secure hash).</li>
				<li>
					The IP address you signed up from, and the country we look up from that IP
					address. We use these to prevent abuse and to pick sensible default settings.
				</li>
			</DocList>

			<DocSubheading>When you use CubeDesk</DocSubheading>
			<DocList>
				<li>
					Your solves, sessions, scrambles, settings, custom trainers, and anything else
					you save in the timer.
				</li>
				<li>
					Profile details you choose to add: a bio, profile picture, header image, cubing
					preferences, and links to your Reddit, Twitch, YouTube, X (Twitter), or Discord.
				</li>
				<li>Images you upload, such as a custom timer background.</li>
				<li>
					Messages you send in 1v1 and elimination match chat, friend requests, reports you
					file about other users, and match results.
				</li>
				<li>
					Which profiles and shared solves you view while signed in, which we use to show
					view counts.
				</li>
				<li>
					The ID and name of any Bluetooth smart cube or timer you connect, so we can
					reconnect to it.
				</li>
			</DocList>

			<DocSubheading>When you link another account</DocSubheading>
			<DocList>
				<li>
					<strong>WCA:</strong> your WCA ID, country, and public competition results.
				</li>
				<li>
					<strong>Discord:</strong> your Discord user ID, so other users can message you
					on Discord if you turn that on.
				</li>
				<li>
					The access tokens those services give us. You can unlink either one at any time
					from Account → Linked Accounts.
				</li>
			</DocList>

			<DocSubheading>When you use the timer without an account</DocSubheading>
			<DocParagraph>
				If you aren&apos;t signed in, your solves are stored in your browser. We also save
				those solves on our servers along with your IP address and a random browser ID, so
				you can bring them into a new account if you sign up later.
			</DocParagraph>

			<DocSubheading>Collected automatically</DocSubheading>
			<DocList>
				<li>
					Basic technical information, such as your IP address, browser, device type, and
					the pages you visit, as part of normal server logs and the analytics described
					below.
				</li>
				<li>
					Error reports when something breaks, which include technical details about your
					browser and what went wrong.
				</li>
			</DocList>

			<DocParagraph>
				If you use a StackMat timer, CubeDesk listens to your microphone to read the
				timer&apos;s signal. That audio is processed in your browser and is never recorded
				or sent to us.
			</DocParagraph>

			<DocHeading id="public-information">What other people can see</DocHeading>
			<DocParagraph>
				CubeDesk has public features. Anyone, including people who aren&apos;t signed in
				and search engines, can see:
			</DocParagraph>
			<DocList>
				<li>
					Your profile: username, bio, profile and header images, social links, Discord ID
					(if linked), join date, rating, badges, and top solves and averages.
				</li>
				<li>Your linked WCA results.</li>
				<li>Times you submit to leaderboards.</li>
				<li>Solves you share with a link.</li>
				<li>Custom trainers you make public.</li>
			</DocList>
			<DocParagraph>
				Your email address and IP address are never shown publicly. Only put information
				on your profile that you&apos;re comfortable with anyone seeing, and never share
				your real name, address, school, or phone number in your profile or in chat.
			</DocParagraph>

			<DocHeading id="how-we-use-it">How we use your information</DocHeading>
			<DocList>
				<li>To run CubeDesk: save your solves, sync them across devices, and show your stats.</li>
				<li>
					To run social features like profiles, friends, leaderboards, and 1v1 matches.
				</li>
				<li>
					To keep CubeDesk safe: prevent spam and cheating, review reports, enforce our{' '}
					<DocLink to="/terms">Terms of Service</DocLink>, and fix bugs.
				</li>
				<li>
					To send emails you need, such as password resets, and notifications you can turn
					off in Account → Notifications.
				</li>
				<li>To understand how CubeDesk is used so we can improve it.</li>
			</DocList>
			<DocParagraph>
				We don&apos;t sell your personal information, and we don&apos;t show you ads.
			</DocParagraph>

			<DocHeading id="service-providers">Who we share it with</DocHeading>
			<DocParagraph>
				We share information only with service providers that help us run CubeDesk, and
				only what they need to do that job:
			</DocParagraph>
			<DocList>
				<li>
					<strong>Amazon Web Services</strong> hosts our servers, database, uploaded
					images, and email delivery, in the United States.
				</li>
				<li>
					<strong>Sentry</strong> receives error reports so we can fix bugs.
				</li>
				<li>
					<strong>Plausible Analytics</strong> counts page visits. It doesn&apos;t use
					cookies or collect personal information.
				</li>
				<li>
					<strong>Google</strong> serves the fonts the site uses, which means your browser
					requests them from Google. We also use a Google Ads conversion tag to measure
					whether our own ads lead people to CubeDesk. That tag can set cookies, and Google
					handles that data under its own{' '}
					<DocLink to="https://policies.google.com/privacy">privacy policy</DocLink>.
				</li>
				<li>
					<strong>ifconfig.co</strong> looks up the country for the IP address you sign up
					from.
				</li>
			</DocList>
			<DocParagraph>
				We may also share information if the law requires it, to protect the safety of our
				users or the public, or as part of a merger or sale of CubeDesk. If that happens,
				this policy will still apply to your information.
			</DocParagraph>

			<DocHeading id="cookies">Cookies and local storage</DocHeading>
			<DocParagraph>
				We use a cookie to keep you signed in, and a short-lived cookie while you link a WCA
				or Discord account. Your settings, theme, scrambles, and a local copy of your solves
				are saved in your browser&apos;s local storage so the timer works quickly and
				offline. The Google Ads tag described above may set its own cookies. We don&apos;t
				use any other tracking cookies.
			</DocParagraph>

			<DocHeading id="retention">How long we keep it</DocHeading>
			<DocList>
				<li>
					Account data, solves, profile details, and chat messages are kept for as long as
					your account exists.
				</li>
				<li>
					When you delete your account from Account → Danger Zone, we delete your account
					and the data tied to it, including your solves, sessions, profile, friends, chat
					messages, and linked accounts.
				</li>
				<li>
					Some records can take longer to disappear from backups and from our providers&apos;
					logs, and we may keep limited records when we need them to prevent abuse or
					comply with the law.
				</li>
			</DocList>

			<DocHeading id="your-choices">Your choices and rights</DocHeading>
			<DocList>
				<li>You can edit your email, username, and profile at any time.</li>
				<li>You can export your solves and sessions from Settings → Data.</li>
				<li>You can turn off notification emails in Account → Notifications.</li>
				<li>You can unlink WCA or Discord from Account → Linked Accounts.</li>
				<li>You can delete your account at any time from Account → Danger Zone.</li>
			</DocList>
			<DocParagraph>
				Depending on where you live, you may also have the right to request a copy of your
				data, ask us to correct or delete it, or object to how we use it. To make a request,
				email <DocLink to={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</DocLink>{' '}
				from the address on your account. We won&apos;t treat you differently for
				exercising these rights.
			</DocParagraph>

			<DocSubheading>Users in the EU, EEA, and UK</DocSubheading>
			<DocParagraph>
				We process your information to provide the service you signed up for (contract),
				and for our legitimate interests in keeping CubeDesk secure, preventing abuse, and
				improving it. Your information is stored and processed in the United States. You
				have the right to complain to your local data protection authority.
			</DocParagraph>

			<DocHeading id="children">Children&apos;s privacy</DocHeading>
			<DocParagraph>
				CubeDesk is a general audience service and isn&apos;t directed to children under
				13. You must be at least 13 to create an account, or older if your country requires
				it. We don&apos;t knowingly collect personal information from children under 13.
			</DocParagraph>
			<DocParagraph>
				If we learn that someone under 13 has created an account, we will delete the
				account and its personal information. If you&apos;re a parent or guardian and
				believe your child under 13 has given us personal information, email{' '}
				<DocLink to={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</DocLink> with
				the account&apos;s username or email and we&apos;ll delete it.
			</DocParagraph>
			<DocParagraph>
				If you&apos;re between 13 and 18, please review this policy with a parent or
				guardian before signing up. Teens in California can ask us to remove content they
				posted publicly by emailing us.
			</DocParagraph>

			<DocHeading id="security">Security</DocHeading>
			<DocParagraph>
				We protect your information with encrypted connections, hashed passwords, and
				limited access to our systems. No service is perfectly secure, so please use a
				unique password for CubeDesk.
			</DocParagraph>

			<DocHeading id="changes">Changes to this policy</DocHeading>
			<DocParagraph>
				If we make meaningful changes, we&apos;ll update the date at the top of this page
				and let you know on the site or by email before the changes take effect.
			</DocParagraph>

			<DocHeading id="contact">Contact</DocHeading>
			<DocParagraph>
				Questions about privacy? Email{' '}
				<DocLink to={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</DocLink>.
			</DocParagraph>
		</>
	);
}
