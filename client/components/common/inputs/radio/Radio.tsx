import React from 'react';
import './Radio.scss';
import block from '../../../../styles/bem';
import GenericInput, {GenericInputProps, InputProps} from '../generic_input/GenericInput';

const b = block('common-radio');

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
		<div className={b('input')}>
			<input
				onChange={props.onChange}
				type="radio"
				id={op.id}
				name={name}
				value={op.value}
				checked={value === op.id}
			/>
			<label htmlFor={op.id}>{op.label}</label>
		</div>
	));

	return <GenericInput {...props} inputWrapper={() => <div className={b()}>{inputs}</div>} />;
}
