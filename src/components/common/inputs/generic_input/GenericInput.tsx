import React, {ReactElement, ReactNode} from 'react';
import './GenericInput.scss';
import block from '../../../../styles/bem';
import CSS from 'csstype';
import Error from '../error/Error';
import InputLegend from '../input/input_legend/InputLegend';
import InputInfo from '../input/input_info/InputInfo';

const b = block('common-generic-input');

const DEFAULT_MAX_WIDTH = 350;

export interface GenericInputProps<T extends HTMLElement> {
	info?: string;
	legend?: string;
	value?: string | number;
	noMargin?: boolean;
	optional?: boolean;
	style?: CSS.Properties;
	tagLegend?: boolean;
	disabled?: boolean;
	error?: string | boolean;
	placeholder?: string;
	autoCorrect?: string;
	autoCapitalize?: string;
	fullWidth?: boolean;
	maxWidth?: number | boolean;
	success?: boolean;
	warning?: boolean;
	maxLength?: number;
	onFocus?: React.FocusEventHandler<T>;
	onBlur?: React.FocusEventHandler<T>;
	onChange?: React.ChangeEventHandler<T>;
	name?: string;

	// ** Must be excluded from properties that can be passed from non-input components **
	inputWrapper: (inputProps) => ReactNode;
}

export type InputProps<T extends GenericInputProps<any>> = Omit<T, 'inputWrapper'>;
export type GenericProps<T extends GenericInputProps<any>> = Omit<
	T,
	'value' | 'onChange' | 'onBlur' | 'onFocus' | 'maxLength' | 'disabled' | 'inputWrapper'
>;

export default function GenericInput<T extends HTMLElement>(props: GenericInputProps<T>): ReactElement {
	const {
		info,
		legend,
		onChange,
		onFocus,
		onBlur,
		name,
		noMargin,
		autoCapitalize,
		autoCorrect,
		fullWidth,
		optional,
		value,
		maxWidth,
		inputWrapper,
		error,
		placeholder,
		maxLength,
		tagLegend,
	} = props;

	const style = props.style || {};

	function handleChange(e) {
		if (onChange) {
			onChange(e);
		}
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

	if (maxWidth) {
		if (typeof maxWidth === 'number') {
			style.maxWidth = `${maxWidth}px`;
		} else {
			style.maxWidth = `${DEFAULT_MAX_WIDTH}px`;
		}
	}

	const inputBody = inputWrapper({
		value,
		name,
		maxLength,
		autoCorrect,
		autoCapitalize,
		placeholder,
		onBlur,
		onFocus,
		onChange: handleChange,
	});

	return (
		<div style={style} className={b({noMargin, fullWidth})}>
			{headerBody}
			{inputBody}
			{footer}
		</div>
	);
}
