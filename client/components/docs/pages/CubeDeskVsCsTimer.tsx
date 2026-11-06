import {
	DocCallout,
	DocHeading,
	DocLink,
	DocList,
	DocParagraph,
	DocSubheading,
	DocTable,
	DocTitle,
} from '@/components/docs/prose';
import React from 'react';

const COMPARISON_ROWS = [
	['Price', 'Free, every feature included', 'Free'],
	['Open source', 'Yes', 'Yes'],
	[
		'Account',
		'Free account to save solves. You can try the timer without one.',
		'No account needed',
	],
	[
		'Where your solves live',
		'Synced to your account, so they follow you to any device',
		'Stored in your browser. You can back them up to csTimer’s server or a file by hand.',
	],
	[
		'Design',
		'Clean, modern layout with themes, backgrounds and layouts',
		'Dense, older style interface with lots of options on screen',
	],
	[
		'Events',
		'All main WCA events, plus 3x3 Mirror and custom events',
		'Every WCA event plus a very large list of other puzzles and scramble types',
	],
	[
		'Stats',
		'Stats page, charts, time distribution, solves per day and smart cube stats',
		'Very configurable averages and session stats',
	],
	[
		'Algorithm trainer',
		'Built-in OLL, PLL and CLL trainers, custom trainers, and trainers shared by the community',
		'Scrambles for specific subsets (like PLL or ZBLL cases), but no case-by-case trainer',
	],
	[
		'Playing with others',
		'Live 1v1 matches, Elo leaderboard, friends and public profiles',
		'Built for solo practice',
	],
	[
		'WCA account',
		'Shows your official results and ranks on your profile',
		'Used for cloud backup',
	],
	[
		'Smart cubes and timers',
		'GAN, MoYu, QiYi, GoCube and Giiker cubes, GAN smart timers, StackMat',
		'Most popular Bluetooth cubes, GAN smart timers, StackMat',
	],
	['Works offline', 'Needs a connection', 'Yes, once the page has loaded'],
	[
		'Analysis tools',
		'Step-by-step time, TPS and recognition stats from smart cube solves',
		'Built-in cross, EOLine and block solvers, multi-phase splits, metronome',
	],
];

export default function CubeDeskVsCsTimer() {
	return (
		<>
			<DocTitle lead="csTimer and CubeDesk are both free, open source speedcubing timers. csTimer is the long-time standard with a huge toolbox. CubeDesk is newer and focuses on a clean design, syncing across devices, training, and cubing with other people. Here's how they compare so you can pick the one that fits how you practice.">
				CubeDesk vs csTimer
			</DocTitle>

			<DocHeading id="at-a-glance">At a glance</DocHeading>
			<DocTable headers={['', 'CubeDesk', 'csTimer']} rows={COMPARISON_ROWS} />

			<DocHeading id="where-cubedesk-shines">Where CubeDesk shines</DocHeading>

			<DocSubheading>A timer that&apos;s easy to look at and easy to set up</DocSubheading>
			<DocParagraph>
				CubeDesk was built because existing timers felt cluttered. The timer screen shows
				what you need while you solve, and settings like inspection, freeze time, and
				decimal points are grouped in{' '}
				<DocLink to="/settings/timer">Settings → Timer</DocLink> with plain labels. You can
				change the theme, background, and layout in{' '}
				<DocLink to="/settings/appearance">Settings → Appearance</DocLink>.
			</DocParagraph>

			<DocSubheading>Your solves follow you</DocSubheading>
			<DocParagraph>
				Solves are saved to your account, so you can time on your laptop and check your
				stats on your phone later. Clearing your browser data or switching computers
				doesn&apos;t lose anything. You can still{' '}
				<DocLink to="/settings/data">export a backup</DocLink> whenever you want.
			</DocParagraph>

			<DocSubheading>A real algorithm trainer</DocSubheading>
			<DocParagraph>
				The trainer comes with OLL, PLL, and CLL sets. Pick the cases you&apos;re working
				on, then drill all of them, a single case, or just your favorites, with scrambles
				made for each case. You can build your own trainer for any set of algorithms, or use{' '}
				<DocLink to="/trainer/public-trainers">trainers other cubers have shared</DocLink>.
			</DocParagraph>

			<DocSubheading>Cubing with other people</DocSubheading>
			<DocParagraph>
				<DocLink to="/play">Play</DocLink> lets you race someone live in a head-to-head
				match, first to five wins, either against a random opponent or a friend you send a
				link to. Matches count toward an Elo rating with a{' '}
				<DocLink to="/community/leaderboards">leaderboard</DocLink>. You also get a public
				profile, a friends list, and links you can share for any solve.
			</DocParagraph>

			<DocSubheading>Smart cube stats</DocSubheading>
			<DocParagraph>
				With a <DocLink to="/supported-devices">supported smart cube</DocLink>, CubeDesk
				records every move. Each solve gets a step-by-step breakdown with time, turns, and
				TPS for each step, plus how much time went to recognition versus execution, without
				timing splits by hand.
			</DocParagraph>

			<DocSubheading>Your WCA results on your profile</DocSubheading>
			<DocParagraph>
				<DocLink to="/guides/connect-wca-account">Connect your WCA account</DocLink> to show
				your official personal bests, ranks, and competition history next to your practice
				times.
			</DocParagraph>

			<DocHeading id="where-cstimer-shines">Where csTimer shines</DocHeading>
			<DocParagraph>
				csTimer has been around for over a decade, and it&apos;s great at a lot of things.
				It&apos;s a better fit if any of these matter most to you:
			</DocParagraph>
			<DocList>
				<li>
					<strong>No account, ever.</strong> Open the page and start timing. Nothing
					leaves your browser unless you choose to back it up.
				</li>
				<li>
					<strong>Works offline.</strong> Once it has loaded, csTimer keeps working with
					no internet connection, which is handy at competitions or while travelling.
				</li>
				<li>
					<strong>More puzzles and scramble types.</strong> Beyond the WCA events, it has
					scrambles for many other puzzles and a long list of training subsets. CubeDesk
					doesn&apos;t have scrambles for events like 4x4 and 5x5 blindfolded,
					multi-blind, or fewest moves yet.
				</li>
				<li>
					<strong>Built-in solvers.</strong> Tools like the cross, EOLine, and first block
					solvers are useful for studying a scramble after a solve.
				</li>
				<li>
					<strong>Multi-phase timing without a smart cube.</strong> You can split a solve
					into phases by tapping the timer between steps.
				</li>
				<li>
					<strong>Deep stats settings.</strong> If you want to define your own averages
					and fine-tune exactly how stats are calculated, csTimer has more knobs to turn.
				</li>
				<li>
					<strong>It&apos;s the standard.</strong> Lots of tutorials, videos, and forum
					posts assume csTimer, so it&apos;s easy to follow along.
				</li>
			</DocList>

			<DocHeading id="which-should-you-use">Which one should you use?</DocHeading>
			<DocParagraph>
				Pick <strong>CubeDesk</strong> if you want a timer that looks good, keeps your
				solves safe across devices, helps you learn algorithms, and lets you race friends.
				That covers most cubers, from beginners learning their first PLLs to people chasing
				a sub-10 average.
			</DocParagraph>
			<DocParagraph>
				Pick <strong>csTimer</strong> if you need to time offline, practice an event or
				puzzle CubeDesk doesn&apos;t scramble yet, or rely on its solvers and detailed stats
				settings.
			</DocParagraph>
			<DocParagraph>
				You don&apos;t have to choose just one. Plenty of cubers keep csTimer around for its
				tools and use CubeDesk for daily practice.
			</DocParagraph>

			<DocHeading id="switching">Switching from csTimer</DocHeading>
			<DocCallout>
				You can bring your whole csTimer history with you, including sessions, times,
				penalties, scrambles, and comments. Follow the{' '}
				<DocLink to="/guides/migrate-from-cstimer">csTimer migration guide</DocLink>. It
				takes a couple of minutes.
			</DocCallout>
		</>
	);
}
