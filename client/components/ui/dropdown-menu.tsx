import {cn} from '@/util/cn';
import * as Primitive from '@radix-ui/react-dropdown-menu';
import {Check} from 'phosphor-react';
import React from 'react';
import {consumeEscapeUntilKeyUp, getTopDialog} from './dialog-keyboard';
import {popupItem, popupSurface, usePopupActivity} from './popup';

export function DropdownMenu({
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
			modal={false}
			{...props}
			open={open}
			onOpenChange={(value) => {
				setOpen(value);
				onOpenChange?.(value);
			}}
		/>
	);
}
export const DropdownMenuTrigger = Primitive.Trigger;
export function DropdownMenuContent({
	className,
	sideOffset = 4,
	onEscapeKeyDown,
	onCloseAutoFocus,
	...props
}: React.ComponentProps<typeof Primitive.Content>) {
	return (
		<Primitive.Portal>
			<Primitive.Content
				{...props}
				sideOffset={sideOffset}
				data-popup-content=""
				onEscapeKeyDown={(event) => {
					consumeEscapeUntilKeyUp();
					onEscapeKeyDown?.(event);
				}}
				onCloseAutoFocus={(event) => {
					// A menu action can open a dialog. Keep focus in that dialog instead of restoring the menu trigger.
					if (getTopDialog()?.contains(document.activeElement)) event.preventDefault();
					onCloseAutoFocus?.(event);
				}}
				className={cn(
					popupSurface,
					'z-[2000000] max-h-[min(24rem,var(--radix-dropdown-menu-content-available-height))] min-w-40 overflow-y-auto p-1',
					className,
				)}
			/>
		</Primitive.Portal>
	);
}
export function DropdownMenuItem({
	className,
	...props
}: React.ComponentProps<typeof Primitive.Item>) {
	return <Primitive.Item {...props} className={cn(popupItem, className)} />;
}
export function DropdownMenuCheckboxItem({
	className,
	children,
	...props
}: React.ComponentProps<typeof Primitive.CheckboxItem>) {
	return (
		<Primitive.CheckboxItem {...props} className={cn(popupItem, 'pl-8', className)}>
			<span className="absolute left-2 flex size-4 items-center justify-center">
				<Primitive.ItemIndicator>
					<Check className="size-4" />
				</Primitive.ItemIndicator>
			</span>
			{children}
		</Primitive.CheckboxItem>
	);
}

export const DropdownMenuRadioGroup = Primitive.RadioGroup;
export function DropdownMenuRadioItem({
	className,
	children,
	...props
}: React.ComponentProps<typeof Primitive.RadioItem>) {
	return (
		<Primitive.RadioItem {...props} className={cn(popupItem, 'pl-8', className)}>
			<span className="absolute left-2 flex size-4 items-center justify-center">
				<Primitive.ItemIndicator>
					<span className="block size-2 rounded-full bg-current" />
				</Primitive.ItemIndicator>
			</span>
			{children}
		</Primitive.RadioItem>
	);
}
