import React, {ReactNode} from 'react';
import {CaretDown} from 'phosphor-react';
import GenericInput, {GenericInputProps, InputProps} from '../../old_generic_input/GenericInput';

interface Props extends GenericInputProps<HTMLSelectElement> {
	defaultOption?: string;
	children?: ReactNode;
}

export default function Select(props: InputProps<Props>) {
	const {defaultOption, children} = props;

	let defaultOp = null;
	if (defaultOption) {
		defaultOp = <option value="">{defaultOption}</option>;
	}

	return (
		<GenericInput
			{...props}
			input={
				<div className="relative text-inherit">
					<select className="p-1 pr-4">
						{defaultOp}
						{children}
					</select>
					<CaretDown
						weight="fill"
						className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 cursor-pointer text-inherit"
					/>
				</div>
			}
		/>
	);
}
