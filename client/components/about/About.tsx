import Header from '@/components/layout/Header';
import SocialIcon from '@/components/layout/nav/SocialIcon';
import {useMe} from '@/util/hooks/useMe';
import {useTheme} from '@/util/hooks/useTheme';
import {resourceUri} from '@/util/storage';
import {ArrowLeft} from 'phosphor-react';
import React from 'react';
import {Link, Redirect} from 'react-router-dom';

const TITLE = "About CubeDesk - Free Online Rubik's Cube Timer";
const DESCRIPTION =
	"CubeDesk is a free online Rubik's Cube timer for speedcubers. Track solves with WCA-style scrambles, analyze stats and averages, train algorithms, race friends 1v1, and connect smart cubes.";

const ASCII_CUBE = `
                                             :::::::
                                         :::::::::::::::
                                     :::::::::::::::::::::::
                                    :::::::::::::::::::::::
                             :::::::    :::::::::::::::      :::::::
                         :::::::::::::::    :::::::      :::::::::::::::
                     :::::::::::::::::::::::         :::::::::::::::::::::::
                    :::::::::::::::::::::::         :::::::::::::::::::::::
             :::::::    :::::::::::::::      :::::::    :::::::::::::::      :::::::
         :::::::::::::::    :::::::      :::::::::::::::    :::::::      :::::::::::::::
     :::::::::::::::::::::::         :::::::::::::::::::::::         :::::::::::::::::::::::
    :::::::::::::::::::::::         :::::::::::::::::::::::         :::::::::::::::::::::::
 ##     :::::::::::::::      :::::::    :::::::::::::::      :::::::    :::::::::::::::      ++
 ######     :::::::      :::::::::::::::    :::::::      :::::::::::::::    :::::::      ++++++
 ##########          :::::::::::::::::::::::         :::::::::::::::::::::::         ++++++++++
 ##############     :::::::::::::::::::::::         :::::::::::::::::::::::      ++++++++++++++
 ##############  ##     :::::::::::::::      :::::::    :::::::::::::::      ++  ++++++++++++++
 ##############  ######     :::::::      :::::::::::::::    :::::::      ++++++  ++++++++++++++
 ##############  ##########          :::::::::::::::::::::::         ++++++++++  ++++++++++++++
 ##############  ##############     :::::::::::::::::::::::      ++++++++++++++  ++++++++++++++
     ##########  ##############  ##     :::::::::::::::      ++  ++++++++++++++  ++++++++++
 ##      ######  ##############  ######     :::::::      ++++++  ++++++++++++++  ++++++      ++
 ######      ##  ##############  ##########          ++++++++++  ++++++++++++++  ++      ++++++
 ##########      ##############  ##############  ++++++++++++++  ++++++++++++++      ++++++++++
 ##############      ##########  ##############  ++++++++++++++  ++++++++++      ++++++++++++++
 ##############  ##      ######  ##############  ++++++++++++++  ++++++      ++  ++++++++++++++
 ##############  ######      ##  ##############  ++++++++++++++  ++      ++++++  ++++++++++++++
 ##############  ##########      ##############  ++++++++++++++      ++++++++++  ++++++++++++++
 ##############  ##############      ##########  ++++++++++      ++++++++++++++  ++++++++++++++
     ##########  ##############  ##      ######  ++++++      ++  ++++++++++++++  ++++++++++
 ##      ######  ##############  ######      ##  ++      ++++++  ++++++++++++++  ++++++      ++
 ######      ##  ##############  ##########          ++++++++++  ++++++++++++++  ++      ++++++
 ##########      ##############  ##############  ++++++++++++++  ++++++++++++++      ++++++++++
 ##############      ##########  ##############  ++++++++++++++  ++++++++++      ++++++++++++++
 ##############  ##      ######  ##############  ++++++++++++++  ++++++      ++  ++++++++++++++
 ##############  ######      ##  ##############  ++++++++++++++  ++      ++++++  ++++++++++++++
 ##############  ##########      ##############  ++++++++++++++      ++++++++++  ++++++++++++++
 ##############  ##############      ##########  ++++++++++      ++++++++++++++  ++++++++++++++
     ##########  ##############  ##      ######  ++++++      ++  ++++++++++++++  ++++++++++
         ######  ##############  ######      ##  ++      ++++++  ++++++++++++++  ++++++
             ##  ##############  ##########          ++++++++++  ++++++++++++++  ++
                 ##############  ##############  ++++++++++++++  ++++++++++++++
                     ##########  ##############  ++++++++++++++  ++++++++++
                         ######  ##############  ++++++++++++++  ++++++
                             ##  ##############  ++++++++++++++  ++
                                 ##############  ++++++++++++++
                                     ##########  ++++++++++
                                         ######  ++++++
                                             ##  ++`;

const STRUCTURED_DATA = {
	'@context': 'https://schema.org',
	'@type': 'WebApplication',
	name: 'CubeDesk',
	url: process.env.BASE_URI,
	applicationCategory: 'UtilitiesApplication',
	operatingSystem: 'Any',
	description: DESCRIPTION,
	offers: {
		'@type': 'Offer',
		price: '0',
		priceCurrency: 'USD',
	},
};

function Paragraph(props: {children: React.ReactNode}) {
	return (
		<p className="text-text/80 m-0 font-mono text-sm leading-7 opacity-100">{props.children}</p>
	);
}

export default function About() {
	const me = useMe();
	const backgroundColor = useTheme('background_color');
	const logoColor = backgroundColor.isDark ? 'white' : 'black';

	// The about page is only available in demo mode for now
	if (me) {
		return <Redirect to="/" />;
	}

	return (
		<div className="bg-background text-text relative min-h-screen overflow-x-hidden">
			<Header path="/about" title={TITLE} description={DESCRIPTION}>
				<link rel="canonical" href={`${process.env.BASE_URI}/about`} />
				<script type="application/ld+json">{JSON.stringify(STRUCTURED_DATA)}</script>
			</Header>

			<div className="flex justify-center pt-16 sm:pt-20">
				<Link
					to="/"
					className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
				>
					<img
						className="h-auto w-[135px]"
						src={resourceUri(`/images/branding/cubedesk-lockup-${logoColor}.svg`)}
						alt="CubeDesk"
					/>
				</Link>
			</div>

			<main className="mx-auto w-full max-w-2xl px-6 pt-12 pb-16 sm:pt-16">
				<Link
					to="/"
					className="text-text/50 hover:text-text/90 focus-visible:outline-primary mb-8 inline-flex items-center gap-2 rounded-sm font-mono text-xs leading-7 tracking-[0.1em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
				>
					<ArrowLeft aria-hidden="true" size="1.1em" weight="bold" className="-ml-px" />
					TIMER
				</Link>

				<article className="relative z-10 flex flex-col gap-6">
					<h1 className="sr-only">
						CubeDesk is a Rubik&apos;s Cube timer built for speedcubers
					</h1>

					<Paragraph>
						CubeDesk started as a passion project and remains one to this day. In November
						2020, as I was getting back into cubing, I realized there were no good-looking
						timers on the market. I used Ruwix Timer to time myself and always felt it could
						be more: a better design, more configuration, persistence, a trainer, etc. I
						never even bothered with csTimer because of its outdated UI and how difficult it
						was to configure. So I decided to build one myself.
					</Paragraph>

					<Paragraph>
						It started as a desktop app that lived only on my computer, until I shared some
						screenshots on Reddit. To my surprise, everyone wanted it. I got lots of
						comments and DMs asking me to make it available, so I did. I released it for $5,
						and it was incredible to actually see people buy it and give me feedback.
					</Paragraph>

					<Paragraph>
						The following year, I turned it into a web app to make updates more seamless and
						development and debugging less cumbersome. Since then, CubeDesk has come to be
						known as the cleanest, fastest, and most configurable Rubik&apos;s Cube timer
						available. To fund development, I offered a Pro version, which I sunset in 2026
						so that every user would have access to every feature. I also made the code open
						source, which encouraged several people to submit their own changes and get them
						merged.
					</Paragraph>

					<Paragraph>
						It&apos;s an honor to work on a site used by thousands of people a day, and I
						don&apos;t plan on stopping. My vision for CubeDesk is to create the most
						user-friendly, complete, and compatible timer and Rubik&apos;s Cube community on the
						internet. Thank you for being here, and I hope you enjoy using this free timer.
					</Paragraph>

					<div className="flex flex-col gap-3">
						<Paragraph>
							<a
								href="/user/kash"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-text font-mono font-normal text-inherit underline decoration-text/30 underline-offset-4 transition-colors"
							>
								@kash
							</a>
						</Paragraph>
						<div className="-ml-2 flex items-center gap-1">
							<SocialIcon
								name="GitHub"
								href="https://github.com/kash/cubedesk"
								darkPath={resourceUri('/images/logos/github_logo_white.svg')}
								lightPath={resourceUri('/images/logos/github_logo_black.svg')}
							/>
							<SocialIcon
								name="Discord"
								href="https://discord.gg/wdVbhDnsQV"
								darkPath={resourceUri('/images/logos/discord_logo_white.svg')}
								lightPath={resourceUri('/images/logos/discord_logo_black.svg')}
							/>
							<SocialIcon
								name="Reddit"
								href="https://www.reddit.com/r/cubedesk"
								darkPath={resourceUri('/images/logos/reddit_logo_white.svg')}
								lightPath={resourceUri('/images/logos/reddit_logo_black.svg')}
							/>
						</div>
					</div>
				</article>

				<div
					aria-hidden="true"
					className="pointer-events-none mt-16 flex justify-center overflow-hidden contain-inline-size select-none sm:mt-12"
				>
					<pre className="text-text font-mono text-[2px] leading-[1.15] opacity-[0.3] sm:text-[4px]">
						{ASCII_CUBE}
					</pre>
				</div>
			</main>
		</div>
	);
}
