import {
	DocCallout,
	DocHeading,
	DocLink,
	DocList,
	DocParagraph,
	DocTitle,
} from '@/components/docs/prose';
import React from 'react';

export default function ConnectWcaAccount() {
	return (
		<>
			<DocTitle lead="Link your World Cube Association (WCA) account to show your official competition results on your CubeDesk profile, right next to your timer stats.">
				How to connect your WCA account
			</DocTitle>

			<DocHeading id="link-your-account">Link your WCA account</DocHeading>
			<DocList ordered>
				<li>
					<DocLink to="/login">Log in</DocLink> to CubeDesk.
				</li>
				<li>
					Go to <DocLink to="/account/linked-accounts">Account → Linked Accounts</DocLink>
					.
				</li>
				<li>
					On the <strong>WCA</strong> card, click <strong>Link account</strong>.
				</li>
				<li>
					Sign in to the World Cube Association website if you aren&apos;t already, then
					approve the request.
				</li>
				<li>
					The WCA sends you back to CubeDesk, and the WCA card shows{' '}
					<strong>Linked</strong>.
				</li>
			</DocList>
			<DocParagraph>
				You can also start linking from your own profile page by clicking{' '}
				<strong>Link WCA Account</strong>.
			</DocParagraph>

			<DocCallout>
				CubeDesk only asks the WCA for your public profile. It never sees your WCA password
				or email address, and it can&apos;t change anything on your WCA account.
			</DocCallout>

			<DocHeading id="what-shows-up">What shows up on your profile</DocHeading>
			<DocParagraph>
				After you link your account, your public CubeDesk profile shows:
			</DocParagraph>
			<DocList>
				<li>
					A <strong>WCA linked</strong> badge that links to your WCA profile
				</li>
				<li>
					An <strong>Official WCA</strong> card with your single and average personal
					bests for every event you&apos;ve competed in, including your national and world
					ranks
				</li>
				<li>How many competitions you&apos;ve been to, and your most recent one</li>
			</DocList>
			<DocParagraph>
				A WCA badge also appears next to your avatar on the{' '}
				<DocLink to="/community/leaderboards">leaderboards</DocLink> and in community lists,
				so other cubers can see you compete officially.
			</DocParagraph>

			<DocHeading id="results-not-showing">My results aren&apos;t showing</DocHeading>
			<DocList>
				<li>
					<strong>You haven&apos;t competed yet:</strong> you get a WCA ID after your
					first competition. Until then, your profile says your linked account
					doesn&apos;t have a WCA ID yet. Your results appear automatically once you have
					one.
				</li>
				<li>
					<strong>You just competed:</strong> official results are updated once a day, so
					newly published results can take a day to show up.
				</li>
				<li>
					<strong>&quot;Official results are temporarily unavailable&quot;:</strong>{' '}
					CubeDesk couldn&apos;t reach the results service. Click{' '}
					<strong>Try again</strong> or check back later.
				</li>
			</DocList>

			<DocHeading id="linking-errors">Problems linking your account</DocHeading>
			<DocParagraph>
				If something goes wrong while linking, CubeDesk shows{' '}
				<strong>Unable to link account</strong> with the reason. Most of the time, the link
				request was cancelled or expired. Requests expire after 10 minutes. Click{' '}
				<strong>Back to linked accounts</strong> and click <strong>Link account</strong>{' '}
				again.
			</DocParagraph>

			<DocHeading id="relink-or-unlink">Relink or unlink your account</DocHeading>
			<DocParagraph>
				Go to <DocLink to="/account/linked-accounts">Account → Linked Accounts</DocLink>.
				Click <strong>Relink</strong> to connect a different WCA account, or click{' '}
				<strong>Unlink</strong> and confirm to remove it. Unlinking removes the WCA card and
				badges from your profile and revokes CubeDesk&apos;s access on the WCA side.
			</DocParagraph>

			<DocHeading id="faq">Do I need a WCA account to use CubeDesk?</DocHeading>
			<DocParagraph>
				No. Linking your WCA account is optional and only adds your official results to your
				profile. Every CubeDesk feature works without it, including the timer, stats,
				trainer, 1v1 matches, and leaderboards.
			</DocParagraph>
		</>
	);
}
