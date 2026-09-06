import {cn} from '@/util/cn';
import {Slot} from '@radix-ui/react-slot';
import {cva, type VariantProps} from 'class-variance-authority';
import React from 'react';

export const buttonVariants = cva(
	'inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-invalid:ring-error/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
	{
		variants: {
			variant: {
				default: 'bg-primary text-tmo-primary shadow-xs hover:bg-primary/90',
				secondary:
					'border border-tmo-module/15 bg-module text-text shadow-xs hover:bg-tmo-module/10',
				outline:
					'border border-tmo-module/15 bg-module text-text shadow-xs hover:bg-tmo-module/10',
				ghost: 'text-text hover:bg-tmo-module/10',
				destructive:
					'bg-error text-white shadow-xs hover:bg-error/90 focus-visible:ring-error/30',
				link: 'text-primary underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-9 px-4 py-2',
				xs: 'h-6 gap-1 rounded-md px-2 text-xs',
				sm: 'h-8 gap-1.5 px-3',
				lg: 'h-10 px-6',
				icon: 'size-9',
				'icon-xs': 'size-6',
				'icon-sm': 'size-8',
				'icon-lg': 'size-10',
			},
		},
		defaultVariants: {variant: 'default', size: 'default'},
	},
);

export type ButtonProps = React.ComponentProps<'button'> &
	VariantProps<typeof buttonVariants> & {asChild?: boolean};

export function Button({
	className,
	variant,
	size,
	asChild = false,
	type = 'button',
	disabled,
	...props
}: ButtonProps) {
	const Component = asChild ? Slot : 'button';
	return (
		<Component
			{...props}
			data-slot="button"
			className={cn(buttonVariants({variant, size}), className)}
			{...(!asChild ? {type, disabled} : {})}
			aria-disabled={disabled || props['aria-disabled']}
			// Anchors do not support native disabled. Capture also blocks a slotted child's handler.
			onClickCapture={(event) => {
				if (disabled) {
					event.preventDefault();
					event.stopPropagation();
					return;
				}
				props.onClickCapture?.(event);
			}}
			tabIndex={asChild && disabled ? -1 : props.tabIndex}
		/>
	);
}
