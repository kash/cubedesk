import {cn} from '@/util/cn';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import React from 'react';

export function RadioGroup({
	className,
	...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
	return (
		<RadioGroupPrimitive.Root
			data-slot="radio-group"
			className={cn('grid gap-3', className)}
			{...props}
		/>
	);
}

export function RadioGroupItem({
	className,
	...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
	return (
		<RadioGroupPrimitive.Item
			data-slot="radio-group-item"
			className={cn(
				'peer border-tmo-module/30 bg-module text-primary focus-visible:border-primary focus-visible:ring-primary/50 aria-invalid:border-error aria-invalid:ring-error/20 flex aspect-square size-4 shrink-0 items-center justify-center rounded-full border p-0 shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
				className,
			)}
			{...props}
		>
			<RadioGroupPrimitive.Indicator
				data-slot="radio-group-indicator"
				className="flex items-center justify-center"
			>
				<span className="size-2 rounded-full bg-current" />
			</RadioGroupPrimitive.Indicator>
		</RadioGroupPrimitive.Item>
	);
}
