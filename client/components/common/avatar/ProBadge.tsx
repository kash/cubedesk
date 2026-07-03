import React from 'react';
import {cn} from '@/util/cn';

interface Props {
	small?: boolean;
	tiny?: boolean;
	large?: boolean;
}

export default function ProBadge(props: Props) {
	const {small, large, tiny} = props;

	return (
		<div
			className={cn(
				'absolute bottom-0 left-1/2 z-1000 -translate-x-1/2 translate-y-[30%] rounded bg-[#246bfd] px-1 py-px text-xs font-semibold tracking-wider text-white shadow-md',
				small && 'text-[0.52rem]',
				large && 'px-2 py-0.5 text-base',
				tiny && 'text-[0.45rem]'
			)}
		>
			PRO
		</div>
	);
}
