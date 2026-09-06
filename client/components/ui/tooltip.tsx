import {cn} from '@/util/cn';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import React from 'react';

export function TooltipProvider({
	delayDuration = 0,
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
	return <TooltipPrimitive.Provider delayDuration={delayDuration} {...props} />;
}
export const TooltipRoot = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

export function TooltipContent({
	className,
	sideOffset = 6,
	children,
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
	return (
		<TooltipPrimitive.Portal>
			<TooltipPrimitive.Content
				data-slot="tooltip-content"
				sideOffset={sideOffset}
				collisionPadding={8}
				className={cn(
					'bg-text text-background z-[2000000] max-w-xs rounded-md px-3 py-1.5 text-xs shadow-md',
					className,
				)}
				{...props}
			>
				{children}
				<TooltipPrimitive.Arrow className="fill-text" />
			</TooltipPrimitive.Content>
		</TooltipPrimitive.Portal>
	);
}

export function Tooltip({children, title}: {children: React.ReactElement; title: string}) {
	return (
		<TooltipProvider>
			<TooltipRoot>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent side="right">{title}</TooltipContent>
			</TooltipRoot>
		</TooltipProvider>
	);
}
