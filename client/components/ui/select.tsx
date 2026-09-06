import {cn} from '@/util/cn';
import * as Primitive from '@radix-ui/react-select';
import {CaretDown, CaretUp, Check} from 'phosphor-react';
import React from 'react';
import {consumeEscapeUntilKeyUp, getTopDialog} from './dialog-keyboard';
import {pickerTrigger, popupItem, popupSurface, usePopupActivity} from './popup';

export function Select({
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
export const SelectValue = Primitive.Value;
export const SelectGroup = Primitive.Group;
export function SelectTrigger({
	className,
	children,
	...props
}: React.ComponentProps<typeof Primitive.Trigger>) {
	return (
		<Primitive.Trigger {...props} className={cn(pickerTrigger, className)}>
			{children}
			<Primitive.Icon asChild>
				<CaretDown className="size-4 opacity-60" />
			</Primitive.Icon>
		</Primitive.Trigger>
	);
}
export function SelectContent({
	className,
	children,
	position = 'popper',
	sideOffset = 4,
	onEscapeKeyDown,
	onCloseAutoFocus,
	...props
}: React.ComponentProps<typeof Primitive.Content>) {
	return (
		<Primitive.Portal>
			<Primitive.Content
				{...props}
				position={position}
				sideOffset={sideOffset}
				data-popup-content=""
				onCloseAutoFocus={(event) => {
					if (getTopDialog()?.contains(document.activeElement)) event.preventDefault();
					onCloseAutoFocus?.(event);
				}}
				onEscapeKeyDown={(event) => {
					consumeEscapeUntilKeyUp();
					onEscapeKeyDown?.(event);
				}}
				className={cn(
					popupSurface,
					'z-[2000000] max-h-[min(24rem,var(--radix-select-content-available-height))] min-w-[var(--radix-select-trigger-width)] overflow-hidden',
					className,
				)}
			>
				<Primitive.ScrollUpButton className="flex justify-center py-1">
					<CaretUp />
				</Primitive.ScrollUpButton>
				<Primitive.Viewport className="p-1">{children}</Primitive.Viewport>
				<Primitive.ScrollDownButton className="flex justify-center py-1">
					<CaretDown />
				</Primitive.ScrollDownButton>
			</Primitive.Content>
		</Primitive.Portal>
	);
}
export function SelectItem({
	className,
	children,
	endContent,
	...props
}: React.ComponentProps<typeof Primitive.Item> & {endContent?: React.ReactNode}) {
	return (
		<Primitive.Item {...props} className={cn(popupItem, 'pr-8', className)}>
			<Primitive.ItemText>{children}</Primitive.ItemText>
			{endContent && <span className="ml-auto pl-6" aria-hidden="true">{endContent}</span>}
			<Primitive.ItemIndicator className="absolute right-2">
				<Check className="size-4" />
			</Primitive.ItemIndicator>
		</Primitive.Item>
	);
}
