import React, {useState} from 'react';
import './TextArea.scss';
import block from '../../../styles/bem';

interface Props {
	name?: string;
	fullWidth?: boolean;
	maxLength?: number;
	placeholder?: string;
	legend?: string;
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
	onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
	disabled?: boolean;
}

const b = block('common-textarea');

export default function OldTextArea(props: Props) {
	const {fullWidth, name, maxLength, placeholder, legend: legendText, disabled, onFocus, onBlur, onChange} = props;

	const [value, setValue] = useState(props.value || '');

	function handleFocus(e: React.FocusEvent<HTMLTextAreaElement>) {
		if (onFocus) {
			onFocus(e);
		}
	}

	function handleBlur(e: React.FocusEvent<HTMLTextAreaElement>) {
		if (onBlur) {
			onBlur(e);
		}
	}

	function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		if (maxLength && e.target.value.length > maxLength) {
			e.preventDefault();
			return;
		}

		if (onChange) {
			onChange(e);
		}

		setValue(e.target.value);
	}

	let maxLengthSpan = null;
	if (maxLength) {
		maxLengthSpan = (
			<span className={b('max-length', {over: value.length >= maxLength})}>{maxLength - value.length}</span>
		);
	}

	let legend = null;
	if (legendText) {
		legend = <legend>{legendText}</legend>;
	}

	return (
		<div className={b('wrapper', {'full-width': fullWidth})}>
			{legend}
			<textarea
				name={name}
				placeholder={placeholder}
				className={b()}
				disabled={disabled}
				onChange={handleChange}
				onBlur={handleBlur}
				onFocus={handleFocus}
				value={value}
			/>
			{maxLengthSpan}
		</div>
	);
}
