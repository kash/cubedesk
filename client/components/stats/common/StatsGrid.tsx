import {cn} from '@/util/cn';
import React, {CSSProperties, ReactNode} from 'react';

interface Props {
	rows: number;
	columns: number;
	children: ReactNode;
	style?: CSSProperties;
	className?: string;
}

export default function StatsGrid({children, columns, style, className}: Props) {
	return (
		<div
			className={cn('stats-grid', className)}
			style={{'--stats-columns': columns, ...style} as CSSProperties}
		>
			{children}
		</div>
	);
}
