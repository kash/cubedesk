import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import React from 'react';
import GenericInput, {GenericInputProps, InputProps} from './generic_input/GenericInput';
import {useI18n} from '@/i18n';

export interface SelectOption {
	value: string;
	text: string;
	disabled?: boolean;
	endContent?: React.ReactNode;
}
export interface SelectFieldProps extends Omit<
	InputProps<GenericInputProps<HTMLButtonElement>>,
	'value' | 'onChange'
> {
	value: string;
	onValueChange: (value: string) => void;
	options: SelectOption[];
	text?: string;
	label?: string;
	openLeft?: boolean;
	maxHeight?: string | number;
	triggerProps?: React.ComponentProps<typeof SelectTrigger>;
	contentClassName?: string;
	align?: 'start' | 'center' | 'end';
}
export default function SelectField({
	value,
	onValueChange,
	options,
	text,
	label,
	openLeft,
	maxHeight,
	triggerProps,
	contentClassName,
	align,
	...props
}: SelectFieldProps) {
	const {t} = useI18n();
	const translatedText = text ? t(text) : text;
	const translatedPlaceholder = props.placeholder ? t(props.placeholder) : props.placeholder;
	return (
		<GenericInput
			{...props}
			inputWrapper={() => (
				<Select
					value={value}
					onValueChange={onValueChange}
					disabled={props.disabled}
					name={props.name}
				>
					<SelectTrigger
						{...triggerProps}
						aria-label={t(label || props.legend || props.placeholder || 'Select option')}
						aria-invalid={!!props.error}
						onFocus={props.onFocus || triggerProps?.onFocus}
						onBlur={props.onBlur || triggerProps?.onBlur}
						onClick={(event) => {
							event.stopPropagation();
							triggerProps?.onClick?.(event);
						}}
					>
						<SelectValue placeholder={translatedPlaceholder || translatedText}>
							{translatedText}
						</SelectValue>
					</SelectTrigger>
					<SelectContent
						align={align || (openLeft ? 'start' : 'end')}
						className={contentClassName}
						style={maxHeight ? {maxHeight} : undefined}
					>
						{options.map((option) => (
							<SelectItem
								key={option.value}
								value={option.value}
								disabled={option.disabled}
								endContent={option.endContent}
							>
								{t(option.text)}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			)}
		/>
	);
}
