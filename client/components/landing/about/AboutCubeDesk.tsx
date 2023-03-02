import React from 'react';
import LandingInfo from '../info/LandingInfo';
import {resourceUri} from '../../../util/storage';

export default function AboutCubeDesk() {
	return (
		<LandingInfo>
			<div>
				<h1>About CubeDesk</h1>
				<h3>CubeDesk started like most other apps — with a problem.</h3>
				<p>
					While we were all in lockdown, I (
					<a target="_blank" href="/user/kash">
						@kash
					</a>
					) decided to pick up cubing. It had been several years since I had picked up a cube, but I could
					still figure out how to solve one, albeit not as fast as I used to.
				</p>
				<p>
					As I got better and more involved with the cubing community, I started to realize the lack of robust
					and modern software in the Rubik's Cube world. I couldn’t even find a timer that I liked. Everything
					out there was either too complicated, too simple, or just looked old. So, I decided to put my
					programming knowledge to use and build an app for myself. My goal was to create the best Rubik’s
					Cube timer that I could. The first version of the app was built for desktop and had a grand total of
					1 user (me).
				</p>
				<hr />
				<p>
					After a few weeks of adding some more features that I personally wanted, I decided to make a post on{' '}
					<a target="_blank" href="https://reddit.com/r/Cubers">
						r/Cubers
					</a>
					. Little did I know that this post would lead to over a year of development, multiple iterations of
					the app, the accumulation of tens of thousands of users, and lots of plans on the horizon.
				</p>
				<p>
					The post that I made on Reddit showed a very basic timer with 3 static modules. It wasn’t much, and
					definitely lacked a ton of the features that other established timers had, but Reddit loved it and
					asked if I could make it public for download.
				</p>
				<img src={resourceUri('/images/landing/about/about_desktop_v1.png')} alt="First version of CubeDesk" />
				<p>
					Since I had made CubeDesk just for myself, it lacked a ton of functionality that real users would
					expected. Also, it had a bunch of bugs that I had learned to deal with. So, in order to feel good
					about releasing an actual app, I decided to spend some time cleaning up the code and polishing the
					design.
				</p>
				<p>
					After a few weeks of working on the app after work and on the weekends, it was finally ready. The
					first version was released! Over the first 2-3 months, the app got <em>dozens</em> of downloads.
					Now, compared to the numbers today, that wasn’t much, but it was so satisfying seeing others excited
					about the app, chatting in the{' '}
					<a target="_blank" href="https://discord.gg/wdVbhDnsQV">
						Discord server
					</a>
					, and actually using CubeDesk as their main timer.
				</p>
				<hr />
				<p>
					As time went on, I realized that I would need to scale CubeDesk to more users and release updates
					faster, which drove me to change CubeDesk from being a desktop app to a web app. Although some
					people didn’t like this at first, it brought a ton of possibilities: Seamless updates, multiplayer
					capabilities, faster development, and less work for new users to get on the app.
				</p>
				<img src={resourceUri('/images/landing/about/about_web_today.png')} alt="CubeDesk today" />
				<hr />
				<p>
					Today, CubeDesk isn’t just a timer — it's a community. With 1v1 capabilities, leaderboards, and
					friending functionality, CubeDesk has turned into something that could be as big as{' '}
					<a target="_blank" href="https://chess.com">
						Chess.com
					</a>{' '}
					was for chess. Who knows, maybe one day CubeDesk could be used in classrooms or cubing competitions.
					The future is looking bright.
				</p>
			</div>
		</LandingInfo>
	);
}
