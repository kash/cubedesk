import {buttonVariants} from '@/components/ui/button';
import {cn} from '@/util/cn';
import {Slot} from '@radix-ui/react-slot';
import {CaretLeft, CaretRight, DotsThree} from 'phosphor-react';
import React from 'react';

export function Pagination({className, ...props}: React.ComponentProps<'nav'>) {
	return (
		<nav
			role="navigation"
			aria-label="Pagination"
			className={cn('mx-auto flex w-full justify-center', className)}
			{...props}
		/>
	);
}
export function PaginationContent({className, ...props}: React.ComponentProps<'ul'>) {
	return <ul className={cn('flex flex-row items-center gap-1', className)} {...props} />;
}
export function PaginationItem(props: React.ComponentProps<'li'>) {
	return <li {...props} />;
}
export function PaginationLink({
	className,
	isActive,
	asChild = false,
	...props
}: React.ComponentProps<'a'> & {isActive?: boolean; asChild?: boolean}) {
	const Component = asChild ? Slot : 'a';
	return (
		<Component
			aria-current={isActive ? 'page' : undefined}
			className={cn(
				buttonVariants({variant: isActive ? 'outline' : 'ghost', size: 'default'}),
				className,
			)}
			{...props}
		/>
	);
}
export function PaginationPrevious({
	children,
	...props
}: React.ComponentProps<typeof PaginationLink>) {
	return (
		<PaginationLink aria-label="Go to previous page" {...props}>
			{children || (
				<>
					<CaretLeft aria-hidden />
					Previous
				</>
			)}
		</PaginationLink>
	);
}
export function PaginationNext({children, ...props}: React.ComponentProps<typeof PaginationLink>) {
	return (
		<PaginationLink aria-label="Go to next page" {...props}>
			{children || (
				<>
					Next
					<CaretRight aria-hidden />
				</>
			)}
		</PaginationLink>
	);
}
export function PaginationEllipsis() {
	return (
		<span className="flex size-9 items-center justify-center">
			<DotsThree aria-hidden />
			<span className="sr-only">More pages</span>
		</span>
	);
}
