import {cn} from '@/util/cn';
import React from 'react';

export function Skeleton({className, ...props}: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="skeleton"
			className={cn('bg-tmo-module/10 animate-pulse rounded-md', className)}
			{...props}
		/>
	);
}
