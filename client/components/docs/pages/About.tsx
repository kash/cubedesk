import {DocParagraph as Paragraph} from '@/components/docs/prose';
import SocialIcon from '@/components/layout/nav/SocialIcon';
import {resourceUri} from '@/util/storage';
import React from 'react';

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

export default function About() {
	return (
		<>
			<h1 className="sr-only">CubeDesk is a Rubik&apos;s Cube timer built for speedcubers</h1>

			<Paragraph>
				CubeDesk started as a passion project and remains one to this day. In November 2020,
				as I was getting back into cubing, I realized there were no good-looking timers on
				the market. I used Ruwix Timer to time myself and always felt it could be more: a
				better design, more configuration, persistence, a trainer, etc. I never even
				bothered with csTimer because of its outdated UI and how difficult it was to
				configure. So I decided to build one myself.
			</Paragraph>

			<Paragraph>
				It started as a desktop app that lived only on my computer, until I shared some
				screenshots on Reddit. To my surprise, everyone wanted it. I got lots of comments
				and DMs asking me to make it available, so I did. I released it for $5, and it was
				incredible to actually see people buy it and give me feedback.
			</Paragraph>

			<Paragraph>
				The following year, I turned it into a web app to make updates more seamless and
				development and debugging less cumbersome. Since then, CubeDesk has come to be known
				as the cleanest, fastest, and most configurable Rubik&apos;s Cube timer available.
				To fund development, I offered a Pro version, which I sunset in 2026 so that every
				user would have access to every feature. I also made the code open source, which
				encouraged several people to submit their own changes and get them merged.
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
						className="hover:text-text decoration-text/30 font-mono font-normal text-inherit underline underline-offset-4 transition-colors"
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

			<div
				aria-hidden="true"
				className="pointer-events-none mt-16 flex justify-center overflow-hidden contain-inline-size select-none sm:mt-12"
			>
				<pre className="text-text font-mono text-[2px] leading-[1.15] opacity-[0.3] sm:text-[4px]">
					{ASCII_CUBE}
				</pre>
			</div>
		</>
	);
}
