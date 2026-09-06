import {cn} from '@/util/cn';
import React from 'react';

export function Empty({className, ...props}: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="empty"
			className={cn(
				'flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border border-dashed border-transparent p-6 text-center md:p-12',
				className,
			)}
			{...props}
		/>
	);
}

export function EmptyHeader({className, ...props}: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="empty-header"
			className={cn('flex max-w-sm flex-col items-center gap-2 text-center', className)}
			{...props}
		/>
	);
}

export function EmptyMedia({className, ...props}: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="empty-media"
			className={cn('mb-2 flex shrink-0 items-center justify-center', className)}
			{...props}
		/>
	);
}

export function EmptyTitle({className, ...props}: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="empty-title"
			className={cn('text-lg font-medium tracking-tight', className)}
			{...props}
		/>
	);
}

export function EmptyDescription({className, ...props}: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="empty-description"
			className={cn(
				'text-text/60 text-sm [&_a]:underline [&_a]:underline-offset-4',
				className,
			)}
			{...props}
		/>
	);
}

export function EmptyContent({className, ...props}: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="empty-content"
			className={cn(
				'flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm',
				className,
			)}
			{...props}
		/>
	);
}
