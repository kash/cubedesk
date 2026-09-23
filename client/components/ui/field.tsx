import {Label} from '@/components/ui/label';
import {cn} from '@/util/cn';
import React from 'react';
import {translateNode, useOptionalI18n} from '@/i18n';

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
	const {t} = useOptionalI18n();
	return (
		<p
			data-slot="field-description"
			className={cn('text-text/60 m-0 text-sm', className)}
			{...props}
			children={translateNode(props.children, t)}
		/>
	);
}

export function FieldError({className, children, ...props}: React.ComponentProps<'div'>) {
	const {t} = useOptionalI18n();
	if (!children) return null;
	return (
		<div
			role="alert"
			data-slot="field-error"
			className={cn('text-error text-sm', className)}
			{...props}
		>
			{translateNode(children, t)}
		</div>
	);
}
