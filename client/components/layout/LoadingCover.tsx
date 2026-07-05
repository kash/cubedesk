import LoadingIcon from '@/components/common/LoadingIcon';
import React from 'react';

interface Props {
	fadeOut?: boolean;
}

export default function LoadingCover(props: Props) {
	const {fadeOut} = props;

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
		<div className={coverClasses.join(' ')}>
			<span className="text-[1.7rem] text-inherit">
				<LoadingIcon />
			</span>
		</div>
	);
}
