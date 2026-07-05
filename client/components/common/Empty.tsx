import {useTheme} from '@/util/hooks/useTheme';
import {resourceUri} from '@/util/storage';
import React, {ReactNode} from 'react';

interface Props {
	text?: string;
}

export default function Empty(props: Props) {
	const {text} = props;
	const moduleColor = useTheme('module_color');

	let body: ReactNode = null;
	if (text) {
		body = <p className="mt-3.75 text-sm text-text opacity-60">{text}</p>;
	}

	const imgClass = 'mt-7.5 h-auto w-22.5 opacity-40';

	let img = <img className={imgClass} src={resourceUri('/images/empty_cube_white.svg')} alt="Empty result" />;
	if (!moduleColor.isDark) {
		img = <img className={imgClass} src={resourceUri('/images/empty_cube_black.svg')} alt="Empty result" />;
	}

	return (
		<div className="flex w-full flex-col items-center">
			{img}
			{body}
		</div>
	);
}
