import {cn} from '@/util/cn';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import React from 'react';

export function Switch({className, ...props}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
	return (
		<SwitchPrimitive.Root
			data-slot="switch"
			className={cn(
				'peer focus-visible:ring-primary/50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-text/15 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
				className,
			)}
			{...props}
		>
			<SwitchPrimitive.Thumb
				data-slot="switch-thumb"
				className="data-[state=checked]:bg-tmo-primary pointer-events-none block size-4 rounded-full bg-white ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
			/>
		</SwitchPrimitive.Root>
	);
}
