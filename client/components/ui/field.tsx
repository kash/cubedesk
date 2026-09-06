import {Label} from '@/components/ui/label';
import {cn} from '@/util/cn';
import React from 'react';

export function Field({className, ...props}: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="field"
			className={cn('flex w-full min-w-0 flex-col gap-2', className)}
			{...props}
		/>
	);
}

export function FieldLabel(props: React.ComponentProps<typeof Label>) {
	return <Label data-slot="field-label" {...props} />;
}

export function FieldDescription({className, ...props}: React.ComponentProps<'p'>) {
	return (
		<p
			data-slot="field-description"
			className={cn('text-text/60 m-0 text-sm', className)}
			{...props}
		/>
	);
}

export function FieldError({className, children, ...props}: React.ComponentProps<'div'>) {
	if (!children) return null;
	return (
		<div
			role="alert"
			data-slot="field-error"
			className={cn('text-error text-sm', className)}
			{...props}
		>
			{children}
		</div>
	);
}
