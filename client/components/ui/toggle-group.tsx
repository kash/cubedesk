import {cn} from '@/util/cn';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import {cva, type VariantProps} from 'class-variance-authority';
import React from 'react';

const toggleVariants = cva(
	'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium text-text transition-colors hover:bg-tmo-module/10 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-tmo-module/15 data-[state=on]:text-text [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
	{
		variants: {
			variant: {
				default: 'bg-transparent',
				outline: 'border border-tmo-module/15 bg-module shadow-xs',
			},
			size: {default: 'h-9 min-w-9 px-3', sm: 'h-8 min-w-8 px-2', lg: 'h-10 min-w-10 px-3'},
		},
		defaultVariants: {variant: 'default', size: 'default'},
	},
);
type ToggleStyle = VariantProps<typeof toggleVariants>;
const ToggleGroupContext = React.createContext<ToggleStyle>({});

export function ToggleGroup({
	className,
	variant,
	size,
	children,
	...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> & ToggleStyle) {
	return (
		<ToggleGroupPrimitive.Root
			data-slot="toggle-group"
			className={cn('flex w-fit items-center gap-1 rounded-md', className)}
			{...props}
		>
			<ToggleGroupContext.Provider value={{variant, size}}>
				{children}
			</ToggleGroupContext.Provider>
		</ToggleGroupPrimitive.Root>
	);
}
export function ToggleGroupItem({
	className,
	variant,
	size,
	...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> & ToggleStyle) {
	const context = React.useContext(ToggleGroupContext);
	return (
		<ToggleGroupPrimitive.Item
			data-slot="toggle-group-item"
			className={cn(
				toggleVariants({variant: variant ?? context.variant, size: size ?? context.size}),
				className,
			)}
			{...props}
		/>
	);
}
