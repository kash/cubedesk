import {useTheme} from '@/util/hooks/useTheme';
import React from 'react';

interface SocialIconInterface {
	name: string;
	href: string;
	darkPath: string;
	lightPath: string;
}

export default function SocialIcon(props: SocialIconInterface) {
	const {darkPath, name, href, lightPath} = props;
	const moduleColor = useTheme('module_color');

	let path = darkPath;
	if (!moduleColor.isDark) {
		path = lightPath;
	}

	return (
		<a
			className="hover:bg-tmo-module/10 box-border flex flex-col items-center justify-center rounded-[5px] bg-transparent p-2 font-semibold opacity-70 transition-all duration-100 ease-in-out hover:opacity-100"
			href={href}
			target="_blank"
		>
			<img className="size-5 shrink-0 object-contain" src={path} alt={`${name} logo`} />
		</a>
	);
}
