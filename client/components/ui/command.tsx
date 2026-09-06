import {cn} from '@/util/cn';
import {Command as Primitive} from 'cmdk';
import {MagnifyingGlass} from 'phosphor-react';
import React from 'react';
import {popupItem} from './popup';

export function Command({className, ...props}: React.ComponentProps<typeof Primitive>) {
	return (
		<Primitive
			{...props}
			className={cn(
				'flex w-full flex-col overflow-hidden rounded-md bg-module text-text',
				className,
			)}
		/>
	);
}
export function CommandInput({className, ...props}: React.ComponentProps<typeof Primitive.Input>) {
	return (
		<div className="flex items-center gap-2 border-b border-tmo-module/15 px-3">
			<MagnifyingGlass className="size-4 shrink-0 opacity-60" />
			<Primitive.Input
				{...props}
				className={cn(
					'h-10 w-full bg-transparent py-3 text-sm outline-none placeholder:text-text/50',
					className,
				)}
			/>
		</div>
	);
}
export function CommandList({className, ...props}: React.ComponentProps<typeof Primitive.List>) {
	return (
		<Primitive.List
			{...props}
			className={cn('max-h-72 overflow-y-auto overflow-x-hidden p-1', className)}
		/>
	);
}
export function CommandEmpty(props: React.ComponentProps<typeof Primitive.Empty>) {
	return <Primitive.Empty {...props} className="py-6 text-center text-sm text-text/60" />;
}
export function CommandItem({className, ...props}: React.ComponentProps<typeof Primitive.Item>) {
	return (
		<Primitive.Item
			{...props}
			className={cn(
				popupItem,
				'data-[disabled=false]:pointer-events-auto data-[disabled=false]:opacity-100',
				className,
			)}
		/>
	);
}
