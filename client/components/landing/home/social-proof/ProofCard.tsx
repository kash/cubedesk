import React, {ReactNode} from 'react';
import {Link, Quotes} from 'phosphor-react';
import {resourceUri} from '@/util/storage';

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

	let imgTag: ReactNode = null;
	if (img) {
		imgTag = (
			<div className="mr-[15px] h-[110px] w-[170px]">
				<img
					className="h-full w-full rounded-[15px] object-cover shadow-[0_5px_25px_rgba(0,0,0,0.3)]"
					src={img}
					alt={imgAlt}
				/>
			</div>
		);
	}

	let linkIcon: ReactNode = null;
	if (link) {
		linkIcon = (
			<div className="absolute bottom-2.5 right-2.5 text-[1.2rem] text-[#444] opacity-50 transition-all duration-100 ease-in-out group-hover:text-primary group-hover:opacity-100">
				<Link weight="bold" />
			</div>
		);
	}

	const isQuote = !!quote;
	let quoteIcon: ReactNode = null;
	if (isQuote) {
		quoteIcon = (
			<div className="absolute left-[-9px] top-[-4px] text-[1.9rem] text-[#444] opacity-20">
				<Quotes weight="fill" />
			</div>
		);
	}

	return (
		<a
			href={link}
			target="_blank"
			className={[
				'group relative mr-[25px] box-border flex h-full cursor-default items-center justify-items-center rounded-[10px] border-4 border-solid border-[#e8e8e8] bg-[#eee] p-[13px] transition-all duration-100 ease-in-out max-[1000px]:m-0',
				link ? 'cursor-pointer hover:border-primary' : '',
			].join(' ')}
		>
			{linkIcon}
			<div className="relative flex flex-row">
				{imgTag}
				<div className={['relative max-w-[300px] min-w-[200px]', isQuote ? 'pl-[30px]' : ''].join(' ')}>
					{quoteIcon}
					<p
						className={[
							'text-left text-[1.1rem] font-medium leading-[1.55rem] text-[#444] opacity-80',
							isQuote ? 'italic' : '',
						].join(' ')}
					>
						{quote || title}
					</p>
					<div className="flex flex-row items-start">
						<img className="relative top-[3px] mr-[5px] w-5" src={logoNamePathMap[source]} alt={`Logo for ${source}`} />
						<span className="table break-all text-[1.1rem]">{username}</span>
					</div>
				</div>
			</div>
		</a>
	);
}
