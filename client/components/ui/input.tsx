import {cn} from '@/util/cn';
import React from 'react';
import {useOptionalI18n} from '@/i18n';

export const textControlStyles =
	'w-full min-w-0 rounded-md border border-tmo-module/15 bg-module px-3 py-2 text-base text-text shadow-xs outline-none transition-[color,box-shadow] placeholder:text-text/50 focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-primary/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-error aria-invalid:ring-error/20 md:text-sm';

export function Input({className, type = 'text', ...props}: React.ComponentProps<'input'>) {
	const {t} = useOptionalI18n();
	const translatedProps = {...props};
	if (typeof translatedProps.placeholder === 'string') {
		translatedProps.placeholder = t(translatedProps.placeholder);
	}
	if (typeof translatedProps['aria-label'] === 'string') {
		translatedProps['aria-label'] = t(translatedProps['aria-label']);
	}
	return (
		<input
			data-slot="input"
			type={type}
			className={cn(textControlStyles, 'h-9', className)}
			{...translatedProps}
		/>
	);
}
