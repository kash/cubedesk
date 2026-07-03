import React, {ReactNode} from 'react';
import {cn} from '@/util/cn';

interface Props {
	icon: ReactNode;
	warning?: boolean;
	success?: boolean;
	error?: boolean;
	className?: string;
}

export default function Icon(props: Props) {
	const {icon, warning, error, success, className} = props;

	if (!icon) {
		return null;
	}

	return (
		<span
			className={cn(
				'text-sm text-tmo-button opacity-40',
				{
					'text-[#66bb6a] opacity-100': success,
					'text-[#ef6c00] opacity-100': warning,
					'text-[#e53935] opacity-100': error,
				},
				className
			)}
		>
			{icon}
		</span>
	);
}
