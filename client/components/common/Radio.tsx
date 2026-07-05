import GenericInput, {GenericInputProps, InputProps} from '@/components/common/inputs/generic_input/GenericInput';
import React from 'react';

export interface RadioOption {
	label: string;
	value: string | number;
	id: string;
}

interface Props extends GenericInputProps<HTMLInputElement> {
	name: string;
	value: string | number;
	options: RadioOption[];
}

export default function Radio(props: InputProps<Props>) {
	const {value, name, options} = props;

	const inputs = options.map((op) => (
		<div className="mb-2.5 last:mb-0">
			<input
				onChange={props.onChange}
				type="radio"
				id={op.id}
				name={name}
				value={op.value}
				checked={value === op.id}
				className="peer absolute opacity-0"
			/>
			<label
				htmlFor={op.id}
				className="relative cursor-pointer p-0 text-sm text-text before:mr-2 before:inline-block before:h-[13px] before:w-[13px] before:rounded-full before:border-2 before:border-solid before:border-black/10 before:bg-button before:align-text-top before:content-[''] peer-hover:before:opacity-70 peer-checked:before:bg-primary peer-checked:after:absolute peer-checked:after:left-[5px] peer-checked:after:top-[5px] peer-checked:after:h-2 peer-checked:after:w-2 peer-checked:after:rounded-full peer-checked:after:bg-text peer-checked:after:content-[''] peer-disabled:cursor-default peer-disabled:opacity-70"
			>
				{op.label}
			</label>
		</div>
	));

	return <GenericInput {...props} inputWrapper={() => <div>{inputs}</div>} />;
}
