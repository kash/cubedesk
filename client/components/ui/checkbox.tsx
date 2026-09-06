import {cn} from '@/util/cn';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {Check, Minus} from 'phosphor-react';
import React from 'react';

export function Checkbox({
	className,
	...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
	return (
		<CheckboxPrimitive.Root
			data-slot="checkbox"
			className={cn(
				'peer border-tmo-module/30 bg-module focus-visible:border-primary focus-visible:ring-primary/50 aria-invalid:border-error aria-invalid:ring-error/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-tmo-primary data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-tmo-primary flex size-4 shrink-0 items-center justify-center rounded-[4px] border p-0 shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
				className,
			)}
			{...props}
		>
			<CheckboxPrimitive.Indicator
				data-slot="checkbox-indicator"
				className="group grid place-content-center text-current"
			>
				<Check
					aria-hidden
					weight="bold"
					className="size-3.5 group-data-[state=indeterminate]:hidden"
				/>
				<Minus
					aria-hidden
					weight="bold"
					className="hidden size-3.5 group-data-[state=indeterminate]:block"
				/>
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	);
}
