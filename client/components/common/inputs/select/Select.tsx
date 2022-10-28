import React, {ReactNode} from 'react';
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
					<i className="ph-caret-down-fill text-inherit cursor-pointer absolute -translate-y-1/2 right-1.5 top-1/2 pointer-events-none" />
				</div>
			}
		/>
	);
}
