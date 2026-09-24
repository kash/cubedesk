import {cn} from '@/util/cn';
import * as LabelPrimitive from '@radix-ui/react-label';
import React from 'react';
import {translateNode, useOptionalI18n} from '@/i18n';

export function Label({className, children, ...props}: React.ComponentProps<typeof LabelPrimitive.Root>) {
	const {t} = useOptionalI18n();
	return (
		<LabelPrimitive.Root
			data-slot="label"
			className={cn(
				'text-text flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
				className,
			)}
			{...props}
			children={translateNode(children, t)}
		/>
	);
}
