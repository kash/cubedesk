import {cn} from '@/util/cn';
import * as Primitive from '@radix-ui/react-popover';
import React from 'react';
import {consumeEscapeUntilKeyUp} from './dialog-keyboard';
import {popupSurface, usePopupActivity} from './popup';

export function Popover({
	open: controlledOpen,
	defaultOpen = false,
	onOpenChange,
	...props
}: React.ComponentProps<typeof Primitive.Root>) {
	const [localOpen, setOpen] = React.useState(defaultOpen);
	const open = controlledOpen ?? localOpen;
	usePopupActivity(open);
	return (
		<Primitive.Root
			{...props}
			open={open}
			onOpenChange={(value) => {
				setOpen(value);
				onOpenChange?.(value);
			}}
		/>
	);
}
export const PopoverTrigger = Primitive.Trigger;
export const PopoverAnchor = Primitive.Anchor;
export function PopoverContent({
	className,
	align = 'center',
	sideOffset = 4,
	onEscapeKeyDown,
	...props
}: React.ComponentProps<typeof Primitive.Content>) {
	return (
		<Primitive.Portal>
			<Primitive.Content
				{...props}
				align={align}
				sideOffset={sideOffset}
				data-popup-content=""
				onEscapeKeyDown={(event) => {
					consumeEscapeUntilKeyUp();
					onEscapeKeyDown?.(event);
				}}
				className={cn(
					popupSurface,
					'z-[2000000] w-72 max-w-[calc(100vw-1rem)] p-4',
					className,
				)}
			/>
		</Primitive.Portal>
	);
}
