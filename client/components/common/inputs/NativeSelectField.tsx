import GenericInput, {
	GenericInputProps,
	InputProps,
} from '@/components/common/inputs/generic_input/GenericInput';
import {NativeSelect} from '@/components/ui/native-select';
import React, {ReactNode} from 'react';

interface Props extends GenericInputProps<HTMLSelectElement> {
	defaultOption?: string;
	children?: ReactNode;
}

export default function NativeSelectField(props: InputProps<Props>) {
	const {defaultOption, children} = props;

	let defaultOp: ReactNode = null;
	if (defaultOption) {
		defaultOp = <option value="">{defaultOption}</option>;
	}

	return (
		<GenericInput
			{...props}
			inputWrapper={(inputProps) => (
				<NativeSelect
					{...inputProps}
					disabled={props.disabled}
					aria-label={props.legend || 'Select option'}
					aria-invalid={!!props.error}
				>
					{defaultOp}
					{children}
				</NativeSelect>
			)}
		/>
	);
}
