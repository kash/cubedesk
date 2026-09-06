import {cn} from '@/util/cn';
import React from 'react';

export function AlertTitle({className, ...props}: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="alert-title"
			className={cn('font-medium tracking-tight', className)}
			{...props}
		/>
	);
}

export function AlertDescription({className, ...props}: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="alert-description"
			className={cn('text-text/70 text-sm [&_p]:leading-relaxed', className)}
			{...props}
		/>
	);
}

export function Alert({
	className,
	variant = 'default',
	...props
}: React.ComponentProps<'div'> & {variant?: 'default' | 'destructive'}) {
	return (
		<div
			data-slot="alert"
			role={variant === 'destructive' ? 'alert' : 'status'}
			className={cn(
				'border-tmo-module/15 bg-module text-text relative grid w-full gap-2 rounded-lg border p-4 text-sm [&>svg]:size-4',
				{
					'border-error/30 text-error [&_[data-slot=alert-description]]:text-error/80':
						variant === 'destructive',
				},
				className,
			)}
			{...props}
		/>
	);
}
