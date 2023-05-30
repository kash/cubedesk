import React from 'react';
import './ProofCard.scss';
import {Link, Quotes} from '@phosphor-icons/react';
import block from '../../../../../styles/bem';
import {resourceUri} from '../../../../../util/storage';

const b = block('landing-proof-card');

interface Props {
	quote?: string;
	title?: string;
	username: string;
	link?: string;
	img?: string;
	imgAlt?: string;
	source: 'youtube' | 'discord' | 'instagram' | 'reddit' | 'speedsolving';
}

const logoNamePathMap = {
	youtube: resourceUri('/images/logos/youtube_logo.svg'),
	speedsolving: resourceUri('/images/logos/speedsolving_logo.png'),
	instagram: resourceUri('/images/logos/instagram_logo.svg'),
	discord: resourceUri('/images/logos/discord_logo.svg'),
	reddit: resourceUri('/images/logos/reddit_logo.svg'),
};

export default function ProofCard(props: Props) {
	const {quote, username, link, img, title, imgAlt, source} = props;

	let imgTag = null;
	if (img) {
		imgTag = (
			<div className={b('img')}>
				<img src={img} alt={imgAlt} />
			</div>
		);
	}

	let linkIcon = null;
	if (link) {
		linkIcon = (
			<div className={b('link-icon')}>
				<Link weight="bold" />
			</div>
		);
	}

	const isQuote = !!quote;
	let quoteIcon = null;
	if (isQuote) {
		quoteIcon = (
			<div className={b('quote-icon')}>
				<Quotes weight="fill" />
			</div>
		);
	}

	return (
		<a href={link} target="_blank" className={b({link: !!link})}>
			{linkIcon}
			<div className={b('body')}>
				{imgTag}
				<div className={b('desc', {quote: isQuote})}>
					{quoteIcon}
					<p className={b('text', {quote: isQuote})}>{quote || title}</p>
					<div className={b('author')}>
						<img src={logoNamePathMap[source]} alt={`Logo for ${source}`} />
						<span>{username}</span>
					</div>
				</div>
			</div>
		</a>
	);
}
