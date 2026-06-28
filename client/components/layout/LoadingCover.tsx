import React, {useEffect} from 'react';
import {getLocalStorage} from '@/util/data/local_storage';
import CSS from 'csstype';
import LoadingIcon from '@/components/common/LoadingIcon';

interface Props {
	fadeOut?: boolean;
}

export default function LoadingCover(props: Props) {
	const {fadeOut} = props;

	const [style, setStyle] = React.useState<CSS.Properties>({});

	useEffect(() => {
		if (fadeOut || typeof localStorage === 'undefined') return;

		const backgroundColor = getLocalStorage('background_color');
		const textColor = getLocalStorage('text_color');

		if (backgroundColor && backgroundColor.includes(',')) {
			style.backgroundColor = `rgb(${backgroundColor})`;
		}
		if (textColor && textColor.includes(',')) {
			style.color = `rgb(${textColor})`;
		}

		setStyle(style);
	}, [typeof localStorage]);

	const coverClasses = [
		'fixed',
		'left-0',
		'top-0',
		'z-[10000000]',
		'flex',
		'h-screen',
		'w-screen',
		'items-center',
		'justify-center',
		'bg-background',
		'text-text',
		fadeOut
			? '[transition:opacity_0.15s_0.4s_ease-in-out]'
			: '[transition:background-color_0.1s_ease-in-out,opacity_0.15s_0.4s_ease-in-out]',
	];

	if (fadeOut) {
		coverClasses.push('pointer-events-none', 'opacity-0');
	}

	return (
		<div style={style} className={coverClasses.join(' ')}>
			<span className="text-[1.7rem] text-inherit">
				<LoadingIcon />
			</span>
		</div>
	);
}
