import React, {isValidElement, ReactElement, ReactNode, useState} from 'react';
import './GenericInput.scss';
import block from '../../../styles/bem';
import CSS from 'csstype';
import InputLegend from '../old_input/input_legend/InputLegend';
import InputInfo from '../old_input/input_info/InputInfo';
import Error from '../old_error/Error';

const b = block('common-generic-input');

export interface GenericInputProps<T extends HTMLElement> {
	info?: string;
	legend?: string;
	value?: string;
	noMargin?: boolean;
	optional?: boolean;
	style?: CSS.Properties;
	tagLegend?: boolean;
	disabled?: boolean;
	error?: string | boolean;
	fullWidth?: boolean;
	placeholder?: string;
	success?: boolean;
	warning?: boolean;
	maxLength?: number;
	onFocus?: React.FocusEventHandler<T>;
	onBlur?: React.FocusEventHandler<T>;
	onChange?: React.ChangeEventHandler<T>;
	type?: React.HTMLInputTypeAttribute;
	name?: string;

	// ** Must be excluded from properties that can be passed from non-input components **
	input: ReactElement<T>; // Anything that can categories as an input (e.g. input, textarea, etc.)
	inputWrapper?: (input) => ReactNode;
}

export type InputProps<T extends GenericInputProps<any>> = Omit<T, 'input' | 'inputWrapper'>;

export default function GenericInput<T extends HTMLInputElement>(props: GenericInputProps<T>): ReactElement {
	const {
		info,
		legend,
		onChange,
		onFocus,
		onBlur,
		name,
		noMargin,
		optional,
		value,
		style,
		inputWrapper,
		fullWidth,
		error,
		type,
		placeholder,
		maxLength,
		tagLegend,
		input,
	} = props;

	const [val, setVal] = useState(value || '');

	function handleChange(e) {
		if (onChange) {
			onChange(e);
		}

		setVal(e.target.value);
	}

	let headerBody = null;
	if (optional || legend) {
		headerBody = (
			<div className={b('header')}>
				<InputLegend optional={optional} tag={tagLegend} text={legend} />
			</div>
		);
	}

	let footer = null;
	if (error && typeof error === 'string') {
		footer = <Error text={info} />;
	} else if (info) {
		footer = <InputInfo text={info} />;
	}

	if (footer) {
		footer = <div className={b('footer')}>{footer}</div>;
	}

	let inputWithProps: ReactNode = input;
	if (isValidElement(input)) {
		inputWithProps = React.cloneElement(input as JSX.Element, {
			value: val,
			type,
			name,
			maxLength,
			placeholder,
			onBlur,
			onFocus,
			onChange: handleChange,
		});
	}

	let inputBody: ReactNode = inputWithProps;
	if (inputWrapper) {
		inputBody = inputWrapper(inputWithProps);
	}

	return (
		<div style={style} className={b({noMargin, fullWidth})}>
			{headerBody}
			{inputBody}
			{footer}
		</div>
	);
}
