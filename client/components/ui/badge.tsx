import {cn} from '@/util/cn';
import {cva, type VariantProps} from 'class-variance-authority';
import React from 'react';

export const badgeVariants = cva(
	'inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border font-medium [&_svg]:size-4 [&_svg]:shrink-0',
	{
		variants: {
			variant: {
				default: 'border-transparent bg-primary text-tmo-primary',
				secondary: 'border-transparent bg-button text-text',
				outline: 'border-tmo-module/15 text-text',
				unfilled: 'border-transparent text-text',
				success:
					'border-green-500/20 bg-green-500/10 text-[color:color-mix(in_srgb,rgb(var(--theme-text))_65%,#22c55e)]',
				warning:
					'border-amber-500/20 bg-amber-500/10 text-[color:color-mix(in_srgb,rgb(var(--theme-text))_65%,#f59e0b)]',
				destructive:
					'border-red-500/20 bg-red-500/10 text-[color:color-mix(in_srgb,rgb(var(--theme-text))_65%,#ef4444)]',
				info: 'border-blue-500/20 bg-blue-500/10 text-[color:color-mix(in_srgb,rgb(var(--theme-text))_65%,#3b82f6)]',
			},
			size: {
				sm: 'h-6 px-2 text-xs',
				default: 'h-7 px-2.5 text-sm',
				button: 'h-9 px-3 text-sm',
			},
		},
		defaultVariants: {variant: 'secondary', size: 'default'},
	},
);

export function Badge({
	className,
	variant,
	size,
	...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
	return (
		<span
			data-slot="badge"
			className={cn(badgeVariants({variant, size}), className)}
			{...props}
		/>
	);
}
