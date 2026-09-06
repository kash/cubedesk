import {cn} from '@/util/cn';
import React from 'react';

export function Table({className, ...props}: React.ComponentProps<'table'>) {
	return (
		<div data-slot="table-container" className="relative w-full overflow-x-auto">
			<table
				data-slot="table"
				className={cn('text-text w-full caption-bottom text-sm', className)}
				{...props}
			/>
		</div>
	);
}
export function TableHeader({className, ...props}: React.ComponentProps<'thead'>) {
	return (
		<thead data-slot="table-header" className={cn('[&_tr]:border-b', className)} {...props} />
	);
}
export function TableBody({className, ...props}: React.ComponentProps<'tbody'>) {
	return (
		<tbody
			data-slot="table-body"
			className={cn('[&_tr:last-child]:border-0', className)}
			{...props}
		/>
	);
}
export function TableFooter({className, ...props}: React.ComponentProps<'tfoot'>) {
	return (
		<tfoot
			data-slot="table-footer"
			className={cn(
				'border-tmo-module/15 bg-tmo-module/5 border-t font-medium [&>tr]:last:border-b-0',
				className,
			)}
			{...props}
		/>
	);
}
export function TableRow({className, ...props}: React.ComponentProps<'tr'>) {
	return (
		<tr
			data-slot="table-row"
			className={cn(
				'border-tmo-module/15 hover:bg-tmo-module/5 data-[state=selected]:bg-tmo-module/10 border-b transition-colors',
				className,
			)}
			{...props}
		/>
	);
}
export function TableHead({className, ...props}: React.ComponentProps<'th'>) {
	return (
		<th
			data-slot="table-head"
			className={cn(
				'h-10 px-2 text-left align-middle font-medium whitespace-nowrap',
				className,
			)}
			{...props}
		/>
	);
}
export function TableCell({className, ...props}: React.ComponentProps<'td'>) {
	return <td data-slot="table-cell" className={cn('p-2 align-middle', className)} {...props} />;
}
export function TableCaption({className, ...props}: React.ComponentProps<'caption'>) {
	return (
		<caption
			data-slot="table-caption"
			className={cn('text-text/60 mt-4 text-sm', className)}
			{...props}
		/>
	);
}
