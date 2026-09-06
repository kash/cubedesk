import {Combobox, ComboboxProps} from '@/components/ui/combobox';
import React from 'react';
import GenericInput, {GenericInputProps, InputProps} from './generic_input/GenericInput';

export type ComboboxFieldOptions = Pick<
	InputProps<GenericInputProps<HTMLButtonElement>>,
	'legend' | 'info' | 'noMargin' | 'fullWidth' | 'disabled' | 'error'
> & {
	openLeft?: boolean;
	triggerProps?: ComboboxProps['triggerProps'];
};
export default function ComboboxField({
	legend,
	info,
	noMargin,
	fullWidth,
	error,
	openLeft,
	...props
}: ComboboxProps & ComboboxFieldOptions) {
	return (
		<GenericInput
			legend={legend}
			info={info}
			noMargin={noMargin}
			fullWidth={fullWidth}
			error={error}
			inputWrapper={() => (
				<Combobox {...props} align={openLeft === false ? 'end' : 'start'} />
			)}
		/>
	);
}
