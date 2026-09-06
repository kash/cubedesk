import {cn} from '@/util/cn';
import {CircleNotch} from 'phosphor-react';
import React from 'react';
export function Spinner({className, ...props}: React.ComponentProps<typeof CircleNotch>) {
	return (
		<CircleNotch
			role="status"
			aria-label="Loading"
			className={cn('size-4 animate-spin', className)}
			{...props}
		/>
	);
}
