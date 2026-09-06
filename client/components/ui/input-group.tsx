import {Input} from '@/components/ui/input';
import {cn} from '@/util/cn';
import React from 'react';

export function InputGroup({className, ...props}: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="input-group"
			className={cn('relative flex w-full items-center', className)}
			{...props}
		/>
	);
}

export function InputGroupAddon({className, ...props}: React.ComponentProps<'span'>) {
	return (
		<span
			data-slot="input-group-addon"
			aria-hidden="true"
			className={cn(
				'text-text/50 pointer-events-none absolute inset-y-0 left-3 flex items-center [&_svg]:size-4',
				className,
			)}
			{...props}
		/>
	);
}

export function InputGroupInput({className, ...props}: React.ComponentProps<typeof Input>) {
	return <Input className={cn('pl-9', className)} {...props} />;
}
