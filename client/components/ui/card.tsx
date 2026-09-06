import {cn} from '@/util/cn';
import React from 'react';

export function Card({className, ...props}: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="card"
			className={cn(
				'bg-module text-text border-tmo-module/15 flex flex-col gap-6 rounded-xl border py-6 shadow-sm',
				className,
			)}
			{...props}
		/>
	);
}

export function CardHeader({className, ...props}: React.ComponentProps<'div'>) {
	return (
		<div data-slot="card-header" className={cn('grid gap-1.5 px-6', className)} {...props} />
	);
}

export function CardTitle({className, ...props}: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-title"
			className={cn('leading-none font-semibold', className)}
			{...props}
		/>
	);
}

export function CardDescription({className, ...props}: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-description"
			className={cn('text-text/60 text-sm', className)}
			{...props}
		/>
	);
}

export function CardContent({className, ...props}: React.ComponentProps<'div'>) {
	return <div data-slot="card-content" className={cn('px-6', className)} {...props} />;
}

export function CardFooter({className, ...props}: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-footer"
			className={cn('flex items-center px-6', className)}
			{...props}
		/>
	);
}
