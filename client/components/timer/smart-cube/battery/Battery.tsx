import {cn} from '@/util/cn';
import React from 'react';

interface Props {
	level: number;
}

export default function Battery(props: Props) {
	const level = Math.min(Math.max(props.level, 0), 100);
	const low = level < 20;
	const color = {'bg-success': !low, 'bg-warning': low};

	return (
		<div
			className="flex flex-row items-center"
			role="img"
			aria-label={`Battery ${level}%`}
			title={`${level}%`}
		>
			{/* The gap between the outline and the fill keeps partial charge readable at this size */}
			<div
				className={cn('h-3 w-6 rounded-[3px] border p-px', {
					'border-success': !low,
					'border-warning': low,
				})}
			>
				<div style={{width: `${level}%`}} className={cn('h-full rounded-[1px]', color)} />
			</div>
			<div className={cn('h-1 w-0.5 rounded-r-[1px]', color)} />
		</div>
	);
}
