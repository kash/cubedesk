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
				'bg-module text-text flex w-full flex-col overflow-hidden rounded-md',
				className,
			)}
		/>
	);
}
export function CommandInput({className, ...props}: React.ComponentProps<typeof Primitive.Input>) {
	return (
		<div className="border-tmo-module/15 flex items-center gap-2 border-b px-3">
			<MagnifyingGlass className="size-4 shrink-0 opacity-60" />
			<Primitive.Input
				{...props}
				className={cn(
					'placeholder:text-text/50 h-10 w-full bg-transparent py-3 text-sm outline-none',
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
			className={cn('max-h-72 overflow-x-hidden overflow-y-auto p-1', className)}
		/>
	);
}
export function CommandEmpty(props: React.ComponentProps<typeof Primitive.Empty>) {
	return <Primitive.Empty {...props} className="text-text/60 py-6 text-center text-sm" />;
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
