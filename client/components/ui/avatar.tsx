import {cn} from '@/util/cn';
import * as Primitive from '@radix-ui/react-avatar';
import React from 'react';
export function Avatar({className, ...props}: React.ComponentProps<typeof Primitive.Root>) {
	return (
		<Primitive.Root
			data-slot="avatar"
			className={cn('relative flex size-8 shrink-0 overflow-hidden rounded-full', className)}
			{...props}
		/>
	);
}
export function AvatarImage({className, ...props}: React.ComponentProps<typeof Primitive.Image>) {
	return (
		<Primitive.Image
			data-slot="avatar-image"
			className={cn('aspect-square size-full object-cover', className)}
			{...props}
		/>
	);
}
export function AvatarFallback({
	className,
	...props
}: React.ComponentProps<typeof Primitive.Fallback>) {
	return (
		<Primitive.Fallback
			data-slot="avatar-fallback"
			className={cn(
				'bg-tmo-module/10 flex size-full items-center justify-center rounded-full',
				className,
			)}
			{...props}
		/>
	);
}
