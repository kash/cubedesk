import {cn} from '@/util/cn';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import React from 'react';

export function Separator({
	className,
	orientation = 'horizontal',
	decorative = true,
	...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
	return (
		<SeparatorPrimitive.Root
			data-slot="separator"
			decorative={decorative}
			orientation={orientation}
			className={cn(
				'bg-tmo-module/15 shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
				className,
			)}
			{...props}
		/>
	);
}
