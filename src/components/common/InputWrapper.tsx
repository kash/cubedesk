import FormError from '@/components/common/FormError';
import {Label} from '@/components/ui/label';
import {cn} from '@/lib/utils';
import React, {forwardRef} from 'react';
import {FieldError, Merge} from 'react-hook-form';

interface InputWrapperProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	description?: string;
	htmlFor?: string;
	error?: FieldError | Merge<FieldError, unknown> | string;
}

const InputWrapper = forwardRef<HTMLInputElement, InputWrapperProps>(
	({htmlFor, description, label, className, children, ...props}, ref) => {
		const error = typeof props.error === 'string' ? props.error : props.error?.message;

		return (
			<div className={cn('flex flex-col', className)} ref={ref} {...props}>
				{label && (
					<Label className="mb-1" htmlFor={htmlFor}>
						{label}
					</Label>
				)}
				{description && <p className="text-muted-foreground mb-1 text-sm">{description}</p>}
				{children}
				<FormError error={error} />
			</div>
		);
	},
);
InputWrapper.displayName = 'InputWrapper';

export {InputWrapper};
