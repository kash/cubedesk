import React from 'react';
import './LandingHeader.scss';
import block from '../../../../styles/bem';
import SignUpButton from '../../common/signup_button/SignUpButton';
import {resourceUri} from '../../../../util/storage';

const b = block('landing-header');

export default function LandingHeader() {
	return (
		<div className={b()}>
			<div className={b('body')}>
				<div className={b('left')}>
					<div className={b('left-body')}>
						<h1>
							<span>All the tools</span> you need to improve at cubing.
						</h1>
						<h2>The most advanced Rubik's Cube timer, trainer, analytics, and community.</h2>
						<SignUpButton />
						<div className={b('stats')}>
							<div className={b('stat')}>
								<span>20K</span>
								<p>Cubers</p>
							</div>
							<div className={b('stat')}>
								<span>10M</span>
								<p>Solves</p>
							</div>
							<div className={b('stat')}>
								<span>25K</span>
								<p>1v1 Matches</p>
							</div>
							<div className={b('stat')}>
								<span>4 Years</span>
								<p>Spent Cubing</p>
							</div>
						</div>
					</div>
				</div>
				<div className={b('hero')}>
					<img alt="Hero design for " src={resourceUri('/images/landing/hero.png')} />
				</div>
			</div>
			<div className={b('social')}>
				<a href="https://discord.gg/wdVbhDnsQV" target="_blank">
					<img src={resourceUri('/images/logos/discord_logo.svg')} alt="Discord logo" />
					<span>Discord</span>
				</a>
				<a href="https://www.reddit.com/r/cubedesk" target="_blank">
					<img src={resourceUri('/images/logos/reddit_logo.svg')} alt="Reddit logo" />
					<span>Reddit</span>
				</a>
				<a href="https://www.instagram.com/cubedesk" target="_blank">
					<img src={resourceUri('/images/logos/instagram_logo.svg')} alt="Instagram logo" />
					<span>Instagram</span>
				</a>
			</div>
		</div>
	);
}
