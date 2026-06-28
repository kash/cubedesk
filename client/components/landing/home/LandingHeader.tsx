import React from 'react';
import SignUpButton from '@/components/landing/common/SignUpButton';
import {resourceUri} from '@/util/storage';

const stats = [
	{value: '40K', label: 'Cubers'},
	{value: '25M', label: 'Solves'},
	{value: '100K', label: '1v1 Matches'},
	{value: '15+ Years', label: 'Spent Cubing'},
];

const socialLinks = [
	{href: 'https://github.com/kash/cubedesk', logo: '/images/logos/github_logo.svg', label: 'GitHub'},
	{href: 'https://discord.gg/wdVbhDnsQV', logo: '/images/logos/discord_logo.svg', label: 'Discord'},
	{href: 'https://www.reddit.com/r/cubedesk', logo: '/images/logos/reddit_logo.svg', label: 'Reddit'},
	{href: 'https://www.instagram.com/cubedesk', logo: '/images/logos/instagram_logo.svg', label: 'Instagram'},
];

export default function LandingHeader() {
	return (
		<div className="mt-[70px] w-full pb-[30px]">
			<div className="mx-auto grid w-[95%] max-w-[1600px] grid-cols-[minmax(min-content,50%)_1fr] py-[100px] max-[1000px]:flex max-[1000px]:max-w-[1000px] max-[1000px]:items-center max-[1000px]:justify-center max-[1000px]:pb-0 max-[700px]:pt-[30px]">
				<div className="box-border flex flex-col items-center justify-center px-[50px] max-[700px]:px-0">
					<div className="flex flex-col items-start">
						<a
							className="mb-2 flex flex-row items-center rounded-full bg-[#1B1F23] py-2 pl-2 pr-4"
							href="https://github.com/kash/cubedesk"
							target="_blank"
						>
							<img
								className="w-5"
								src={resourceUri('/images/logos/github_logo_white.svg')}
								alt="GitHub logo"
							/>
							<span className="ml-1.5 text-sm text-white">CubeDesk is Open Source!</span>
						</a>
						<h1 className="text-left font-['Kontora',Poppins,Arial,'Helvetica_Neue',Helvetica,sans-serif] text-[clamp(2.5rem,4vw,4rem)] font-extrabold leading-[150%] text-[#333]">
							<span className="border-b-[7px] border-solid border-b-[rgba(44,182,125,0.4)] font-[inherit] text-[#2cb67d]">
								All the tools
							</span>{' '}
							you need to improve at cubing.
						</h1>
						<h2 className="mb-5 font-['Gelion',Arial,'Helvetica_Neue',Helvetica,sans-serif] text-[2.2rem] font-normal leading-[2.7rem] text-[#5c5c5c]">
							The most advanced Rubik's Cube timer, trainer, analytics, and community.
						</h2>
						<SignUpButton />
						<div className="mt-10 flex flex-row flex-wrap gap-x-2.5">
							{stats.map((stat) => (
								<div
									key={stat.label}
									className="mb-[14px] box-border flex flex-row items-center rounded-[20px] bg-[#eee] px-[18px] py-2 text-[1.1rem] font-bold"
								>
									<span className="mr-[5px] table font-[inherit] text-[#444]">{stat.value}</span>
									<p className="m-0 p-0 font-[inherit] opacity-80">{stat.label}</p>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center max-[1000px]:hidden">
					<img className="w-full max-w-[700px]" alt="Hero design for " src={resourceUri('/images/landing/hero.png')} />
				</div>
			</div>
			<div className="mt-[50px] flex flex-row flex-wrap justify-center gap-x-2.5">
				{socialLinks.map((link) => (
					<a
						key={link.label}
						className="mb-2.5 box-border flex flex-row items-center rounded-[25px] border-4 border-solid border-transparent bg-[#eee] px-[15px] py-[5px] text-[1.1rem] transition-all duration-100 ease-in-out hover:border-[#ddd]"
						href={link.href}
						target="_blank"
					>
						<img className="mr-2.5 w-[25px]" src={resourceUri(link.logo)} alt={`${link.label} logo`} />
						<span className="table font-bold">{link.label}</span>
					</a>
				))}
			</div>
		</div>
	);
}
