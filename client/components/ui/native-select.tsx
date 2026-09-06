import {cn} from '@/util/cn';
import {CaretDown} from 'phosphor-react';
import React from 'react';
import {pickerTrigger} from './popup';

export function NativeSelect({className, ...props}: React.ComponentProps<'select'>) {
	return (
		<div className="relative w-full">
			<select
				{...props}
				className={cn(pickerTrigger, 'w-full appearance-none pr-9', className)}
			/>
			<CaretDown
				aria-hidden
				className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 opacity-60"
			/>
		</div>
	);
}
export const NativeSelectOption = (props: React.ComponentProps<'option'>) => <option {...props} />;
