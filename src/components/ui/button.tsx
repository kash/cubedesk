import {cn} from '@/lib/utils';
import {Icon} from '@phosphor-icons/react';
import {CircleNotch} from '@phosphor-icons/react/dist/ssr';
import {Slot, Slottable} from '@radix-ui/react-slot';
import {cva, type VariantProps} from 'class-variance-authority';
import * as React from 'react';

const buttonVariants = cva(
	'inline-flex flex-row gap-2 cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors !disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90',
				destructive: 'bg-red-600 text-white shadow-xs hover:bg-red-700',
				outline:
					'border border-border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground',
				secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
				ghost: '',
				link: 'text-primary underline-offset-4 hover:underline',
			},
			size: {
				default: 'px-4 py-2',
				sm: 'rounded-md px-3 py-1.5 text-xs',
				lg: 'rounded-md px-8 py-2.5',
				icon: 'h-7 w-7 shrink-0',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	loading?: boolean;
	icon?: Icon;
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({className, loading, variant, size, asChild = false, ...props}, ref) => {
		const Comp = asChild ? Slot : 'button';
		const content = asChild ? <Slottable>{props.children}</Slottable> : props.children;

		let icon;
		if (loading) {
			icon = <CircleNotch weight="bold" className="animate-spin" />;
		} else if (props.icon) {
			icon = <props.icon weight="bold" />;
		}

		return (
			<Comp
				className={cn(buttonVariants({variant, size, className}))}
				ref={ref}
				{...props}
				disabled={loading || props.disabled}
			>
				{content}
				{icon}
			</Comp>
		);
	},
);
Button.displayName = 'Button';

export {Button, buttonVariants};
