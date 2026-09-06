import {Profile} from '@/types/profile';
import {RedditLogo, TwitchLogo, TwitterLogo, YoutubeLogo} from 'phosphor-react';
import React from 'react';

interface Props {
	profile: Profile;
}

export default function About(props: Props) {
	const {profile} = props;

	function addSocial(
		list: React.ReactNode[],
		key,
		name,
		icon: React.ReactNode,
		background,
		color,
	) {
		if (!profile[key]) {
			return null;
		}

		const classNames = [
			'rounded-full',
			'flex',
			'items-center',
			'px-3',
			'py-1',
			'text-xs font-medium',
			'mr-3 mb-3',
		];

		list.push(
			<a
				className={classNames.join(' ')}
				style={{
					backgroundColor: background,
					color: color,
				}}
				key={key}
				target="_blank"
				rel="noopener noreferrer"
				href={profile[key]}
			>
				{icon}
				<span className="ml-2 text-inherit">{name}</span>
			</a>,
		);
	}

	let social: React.ReactNode = null;
	const socialLinks: React.ReactNode[] = [];

	addSocial(
		socialLinks,
		'youtube_link',
		'YouTube',
		<YoutubeLogo weight="fill" />,
		'#FF0000',
		'white',
	);
	addSocial(
		socialLinks,
		'twitch_link',
		'Twitch',
		<TwitchLogo weight="fill" />,
		'#6441A4',
		'white',
	);
	addSocial(
		socialLinks,
		'twitter_link',
		'Twitter',
		<TwitterLogo weight="fill" />,
		'#1DA1F2',
		'white',
	);
	addSocial(
		socialLinks,
		'reddit_link',
		'Reddit',
		<RedditLogo weight="fill" />,
		'#FF5700',
		'white',
	);

	if (socialLinks.length) {
		social = (
			<div>
				<div className="flex flex-row flex-wrap">{socialLinks}</div>
			</div>
		);
	}

	const details = [
		['3x3 method', profile.three_method],
		['3x3 goal', profile.three_goal],
		['Main 3x3 cube', profile.main_three_cube],
		['Favorite event', profile.favorite_event],
	];

	return (
		<aside className="border-tmo-module/10 bg-module rounded-xl border p-5">
			<h2 className="mb-0 text-sm font-semibold">About</h2>
			<p className="text-text/60 mt-3 mb-0 text-sm leading-relaxed break-words whitespace-pre-wrap">
				{profile.bio || 'No bio yet.'}
			</p>
			<dl className="border-tmo-module/10 mt-5 grid grid-cols-2 gap-x-4 gap-y-5 border-t pt-5 lg:grid-cols-1">
				{details.map(([label, value]) => (
					<div key={label} className="min-w-0">
						<dt className="text-text/45 text-xs">{label}</dt>
						<dd className="text-text/80 mt-1 text-sm font-medium break-words">
							{value || '—'}
						</dd>
					</div>
				))}
			</dl>
			{social ? (
				<div className="border-tmo-module/10 mt-5 border-t pt-5">{social}</div>
			) : null}
		</aside>
	);
}
