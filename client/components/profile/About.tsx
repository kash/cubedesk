import React from 'react';
import {YoutubeLogo, TwitterLogo, RedditLogo, TwitchLogo} from 'phosphor-react';
import Emblem from '@/components/common/emblem/Emblem';
import {Profile} from '@/@types/generated/graphql';

interface Props {
	profile: Profile;
}

export default function About(props: Props) {
	const {profile} = props;

	function addSocial(list: React.ReactNode[], key, name, icon: React.ReactNode, background, color) {
		if (!profile[key]) {
			return null;
		}

		const classNames = ['rounded-full', 'flex', 'items-center', 'px-3', 'py-1', 'font-bold', 'mr-3 mb-3'];

		list.push(
			<a
				className={classNames.join(' ')}
				style={{
					backgroundColor: background,
					color: color,
				}}
				key={key}
				target="_blank"
				href={profile[key]}
			>
				{icon}
				<span className="ml-2 text-inherit">{name}</span>
			</a>
		);
	}

	let social: React.ReactNode = null;
	const socialLinks: React.ReactNode[] = [];

	addSocial(socialLinks, 'youtube_link', 'YouTube', <YoutubeLogo weight="fill" />, '#FF0000', 'white');
	addSocial(socialLinks, 'twitch_link', 'Twitch', <TwitchLogo weight="fill" />, '#6441A4', 'white');
	addSocial(socialLinks, 'twitter_link', 'Twitter', <TwitterLogo weight="fill" />, '#1DA1F2', 'white');
	addSocial(socialLinks, 'reddit_link', 'Reddit', <RedditLogo weight="fill" />, '#FF5700', 'white');

	if (socialLinks.length) {
		social = (
			<div>
				<Emblem text="Socials" />
				<div className="flex flex-row flex-wrap">{socialLinks}</div>
			</div>
		);
	}

	return (
		<div className="relative my-[35px]">
			<h2>About me</h2>
			<div className="mt-2.5 grid grid-cols-[repeat(auto-fit,minmax(400px,auto))] gap-[30px]">
				<div className="space-y-2.5">
					{social}
					<div>
						<Emblem text="Bio" />
						<p className="mt-2.5 text-[1.3rem] leading-[1.7rem] text-text opacity-90">
							{profile.bio || <i className="italic">No bio yet</i>}
						</p>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-2.5">
					<div className="box-border flex flex-col items-start rounded bg-module p-2.5">
						<Emblem text="3x3 Method" />
						<span className="mt-[5px] table text-[1.3rem] font-semibold text-text">{profile.three_method || '-'}</span>
					</div>
					<div className="box-border flex flex-col items-start rounded bg-module p-2.5">
						<Emblem text="3x3 Goal" />
						<span className="mt-[5px] table text-[1.3rem] font-semibold text-text">{profile.three_goal || '-'}</span>
					</div>
					<div className="box-border flex flex-col items-start rounded bg-module p-2.5">
						<Emblem text="Main 3x3 Cube" />
						<span className="mt-[5px] table text-[1.3rem] font-semibold text-text">{profile.main_three_cube || '-'}</span>
					</div>
					<div className="box-border flex flex-col items-start rounded bg-module p-2.5">
						<Emblem text="Favorite Event" />
						<span className="mt-[5px] table text-[1.3rem] font-semibold text-text">{profile.favorite_event || '-'}</span>
					</div>
				</div>
			</div>
		</div>
	);
}
