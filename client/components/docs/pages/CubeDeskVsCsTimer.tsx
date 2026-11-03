import {
	DocCallout,
	DocHeading,
	DocLink,
	DocList,
	DocParagraph,
	DocTitle,
} from '@/components/docs/prose';
import React from 'react';

interface ComparisonRow {
	feature: string;
	cubedesk: string;
	cstimer: string;
}

const COMPARISON_ROWS: ComparisonRow[] = [
	{feature: 'Price', cubedesk: 'Free, open source', cstimer: 'Free, open source'},
	{
		feature: 'Design',
		cubedesk: 'Modern, minimal, themeable',
		cstimer: 'Dense and functional, highly customizable',
	},
	{
		feature: 'Where solves are stored',
		cubedesk: 'Your account, synced across devices',
		cstimer: 'Your browser, with optional cloud backup',
	},
	{
		feature: 'Works without an account',
		cubedesk: 'Yes, in demo mode',
		cstimer: 'Yes, no account at all',
	},
	{
		feature: 'Events and scramble types',
		cubedesk: 'All WCA puzzles plus a few variants',
		cstimer: 'A huge list, including subsets and relays',
	},
	{
		feature: 'Stats',
		cubedesk: 'Charts, averages, PBs and per-event breakdowns',
		cstimer: 'Very detailed, with custom averages and tables',
	},
	{
		feature: 'Algorithm trainer',
		cubedesk: 'Built in, with community trainers',
		cstimer: 'Training scrambles for many subsets',
	},
	{
		feature: 'Online 1v1',
		cubedesk: 'Live matches, Elo ranking, elimination',
		cstimer: 'Not built in',
	},
	{
		feature: 'Smart cubes and timers',
		cubedesk: 'GAN, MoYu, QiYi, GoCube, Giiker, StackMat',
		cstimer: 'GAN, MoYu, QiYi, GoCube, Giiker, StackMat',
	},
	{
		feature: 'Profiles and friends',
		cubedesk: 'Public profiles, friends, WCA account link',
		cstimer: 'None',
	},
	{
		feature: 'Solving tools',
		cubedesk: 'Smart cube step breakdown and TPS',
		cstimer: 'Cross, EOLine and other solvers, metronome',
	},
];

function ComparisonTable() {
	return (
		<div className="border-text/15 overflow-x-auto rounded-lg border">
			<table className="text-text/80 w-full border-collapse font-mono text-sm leading-6">
				<thead>
					<tr className="border-text/15 bg-text/5 border-b text-left">
						<th className="text-text px-4 py-2 font-mono font-semibold">Feature</th>
						<th className="text-text px-4 py-2 font-mono font-semibold">CubeDesk</th>
						<th className="text-text px-4 py-2 font-mono font-semibold">csTimer</th>
					</tr>
				</thead>
				<tbody>
					{COMPARISON_ROWS.map((row) => (
						<tr key={row.feature} className="border-text/10 border-b last:border-b-0">
							<td className="text-text px-4 py-2 align-top font-mono">
								{row.feature}
							</td>
							<td className="px-4 py-2 align-top font-mono">{row.cubedesk}</td>
							<td className="px-4 py-2 align-top font-mono">{row.cstimer}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default function CubeDeskVsCsTimer() {
	return (
		<>
			<DocTitle lead="csTimer and CubeDesk are both free, open source speedcubing timers, and both are great. They're built around different ideas, though. Here's an honest look at where each one shines so you can pick the one that fits how you practice.">
				CubeDesk vs csTimer
			</DocTitle>

			<DocHeading id="short-version">The short version</DocHeading>
			<DocList>
				<li>
					<strong>Pick CubeDesk</strong> if you want a clean, modern timer that keeps your
					solves in sync across every device, and you&apos;d like to race other cubers,
					train algorithms, and share your progress.
				</li>
				<li>
					<strong>Pick csTimer</strong> if you want the widest possible range of scramble
					types, deep stat customization, and built-in solving tools, and you prefer
					something that works with no account at all.
				</li>
			</DocList>
			<DocParagraph>
				You don&apos;t have to choose forever. You can{' '}
				<DocLink to="/guides/migrate-from-cstimer">import your csTimer history</DocLink>{' '}
				into CubeDesk in a couple of minutes and try both.
			</DocParagraph>

			<DocHeading id="at-a-glance">At a glance</DocHeading>
			<ComparisonTable />

			<DocHeading id="where-cubedesk-shines">Where CubeDesk shines</DocHeading>
			<DocList>
				<li>
					<strong>Design and ease of use.</strong> CubeDesk is built to be calm and
					uncluttered while you solve. Settings are grouped and labeled so you can find
					what you need without digging, and themes let you make the timer your own.
				</li>
				<li>
					<strong>Your solves follow you.</strong> Solves are saved to your account, so
					your laptop, phone, and the computer at your local club all show the same
					sessions and stats. Clearing your browser data doesn&apos;t wipe your history.
				</li>
				<li>
					<strong>Live 1v1 and leaderboards.</strong> Race a friend with a shared link,
					get matched against someone at your level, or join an elimination match. Ranked
					games feed an Elo rating on the{' '}
					<DocLink to="/community/leaderboards">leaderboards</DocLink>.
				</li>
				<li>
					<strong>Algorithm trainer.</strong> Drill OLL, PLL, ZBLL and more with visual
					cases, or build your own trainer and share it with the{' '}
					<DocLink to="/trainer/public-trainers">community</DocLink>.
				</li>
				<li>
					<strong>Profiles and sharing.</strong> Every cuber gets a public profile with
					their bests. You can add friends, share a single solve with a link, and{' '}
					<DocLink to="/guides/connect-wca-account">connect your WCA account</DocLink> to
					show your official results.
				</li>
				<li>
					<strong>Smart cube insights.</strong> With a{' '}
					<DocLink to="/supported-devices">supported smart cube</DocLink>, CubeDesk
					records every turn and breaks the solve into steps with move counts and TPS.
				</li>
			</DocList>

			<DocHeading id="where-cstimer-shines">Where csTimer shines</DocHeading>
			<DocList>
				<li>
					<strong>Scramble variety.</strong> csTimer has scramblers for nearly every
					puzzle and subset you can think of, from relays and big BLD to last layer and
					F2L training sets. CubeDesk covers the WCA events and a few variants, but
					csTimer goes much further.
				</li>
				<li>
					<strong>Stat depth.</strong> csTimer lets you define custom averages and inspect
					your data in a lot of different ways. If you love slicing numbers, it&apos;s
					hard to beat.
				</li>
				<li>
					<strong>Built-in tools.</strong> Cross, EOLine and first-block solvers, a
					metronome, multi-phase timing, and other extras are a click away.
				</li>
				<li>
					<strong>No account, ever.</strong> csTimer works entirely in your browser.
					CubeDesk has a demo mode you can use without signing up, but to keep your solves
					and use most features you&apos;ll want a free account.
				</li>
				<li>
					<strong>Lightweight and battle-tested.</strong> csTimer has been around for
					years, loads quickly on almost anything, and is the timer many top cubers grew
					up with.
				</li>
			</DocList>

			<DocHeading id="trade-offs">Trade-offs to know about</DocHeading>
			<DocParagraph>
				CubeDesk syncs your solves to the cloud, so it relies on an internet connection more
				than csTimer does. csTimer keeps everything in your browser, which is simple and
				private, but it means your history lives on one device unless you remember to export
				or upload it. If you switch browsers or clear your data, those solves can be lost.
			</DocParagraph>
			<DocParagraph>
				csTimer&apos;s flexibility comes with a learning curve. There are a lot of options,
				and the interface shows many of them at once. CubeDesk makes fewer, more opinionated
				choices, which keeps it easier to pick up but means some niche features you&apos;d
				find in csTimer aren&apos;t there.
			</DocParagraph>

			<DocHeading id="switching">Switching from csTimer</DocHeading>
			<DocParagraph>
				If you decide to give CubeDesk a try, you can bring your whole history with you.
				Your sessions, times, penalties, scrambles, and comments are all imported. Follow
				the <DocLink to="/guides/migrate-from-cstimer">migration guide</DocLink> to get
				started.
			</DocParagraph>

			<DocCallout>
				CubeDesk is free for everyone, with every feature included.{' '}
				<DocLink to="/signup">Create an account</DocLink> or{' '}
				<DocLink to="/">start timing</DocLink> right away.
			</DocCallout>
		</>
	);
}
