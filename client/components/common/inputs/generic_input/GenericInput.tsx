import React, {ReactElement, ReactNode} from 'react';
import CSS from 'csstype';
import Error from '@/components/common/inputs/Error';
import InputLegend from '@/components/common/inputs/input/InputLegend';
import InputInfo from '@/components/common/inputs/input/InputInfo';
import {cn} from '@/util/cn';

const DEFAULT_MAX_WIDTH = 350;

// Shared styles for the raw input/select/textarea elements rendered by leaf
// input components (Input, TextArea, Select).
export const inputClassNames =
	'box-border w-full rounded-md border-none bg-button p-2.5 text-base text-tmo-button transition-all duration-100 ease-in-out placeholder:text-tmo-button/35 focus:border-tmo-button disabled:opacity-60';

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

export default function GenericInput<T extends HTMLElement>(
	props: GenericInputProps<T>,
): ReactElement {
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

	let headerBody: ReactNode = null;
	if (optional || legend) {
		headerBody = (
			<div className="mb-1.5">
				<InputLegend optional={optional} tag={tagLegend} text={legend} />
			</div>
		);
	}

	let footer: ReactNode = null;
	if (error && typeof error === 'string') {
		footer = <Error text={info} />;
	} else if (info) {
		footer = <InputInfo text={info} />;
	}

	if (footer) {
		footer = <div className="mt-1">{footer}</div>;
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
		<div style={style} className={cn({'mb-0': noMargin, 'w-full': fullWidth})}>
			{headerBody}
			{inputBody}
			{footer}
		</div>
	);
}
