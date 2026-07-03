import React, {ReactNode, useMemo} from 'react';
import Select from 'react-select';
import GenericInput, {
	GenericInputProps,
	GenericProps,
	inputClassNames,
} from '@/components/common/inputs/generic_input/GenericInput';
import Button, {ButtonProps} from '@/components/common/Button';
import {cn} from '@/util/cn';

export type InputSelectOption = {value: string; label: string};

interface Props extends GenericInputProps<HTMLInputElement> {
	values: InputSelectOption | InputSelectOption[] | string | string[];
	options: InputSelectOption[];
	onSelect: (newValue: InputSelectOption[] | InputSelectOption) => void;
	createButton?: ButtonProps;
	isMulti?: boolean;
}

// react-select injects its default emotion styles at runtime, after the compiled
// Tailwind stylesheet. The `!` classes mirror the !important rules from the old CSS.
const selectClassNames = {
	control: () => cn(inputClassNames, '!bg-button !rounded-md'),
	valueContainer: () => '!p-0',
	indicatorSeparator: () => '!hidden',
	clearIndicator: () => '!hidden',
	dropdownIndicator: () => '!hidden',
	loadingIndicator: () => '!hidden',
	menu: () => '!mt-0.5 !cursor-pointer !bg-background',
	menuList: () => '!p-0',
	noOptionsMessage: () => '!px-0 !py-5 !opacity-60',
	placeholder: () => '!m-0',
	option: () => '!cursor-pointer !bg-transparent !text-text',
	multiValue: () => '!mr-2 !bg-primary',
	multiValueLabel: () => 'text-sm !text-white',
	multiValueRemove: () => 'cursor-pointer !bg-transparent',
	singleValue: () => 'text-sm !text-text',
	input: () => '!m-0 !cursor-pointer !p-0 !text-text',
};

export default function InputSelect(props: GenericProps<Props>) {
	const {isMulti, options, onSelect, createButton, values} = props;

	const genericProps: Partial<GenericProps<Props>> = {...props};
	delete genericProps.values;
	delete genericProps.onSelect;
	delete genericProps.isMulti;
	delete genericProps.options;

	const optionsMap = useMemo(() => {
		const map = {};
		for (const option of options) {
			map[option.value] = option;
		}

		return map;
	}, [options]);

	let createDiv: ReactNode = null;
	if (createButton) {
		createDiv = (
			<div className="absolute top-1.5 right-1.5">
				<Button {...createButton} />
			</div>
		);
	}

	let selectValue;
	if (Array.isArray(values) && values.length && typeof values[0] === 'string') {
		selectValue = [];

		for (const value of values as string[]) {
			selectValue.push(optionsMap[value]);
		}
	} else if (values && typeof values === 'string') {
		selectValue = options.find((option) => option.value === values);
	}

	return (
		<GenericInput
			{...genericProps}
			inputWrapper={() => (
				<div className="relative">
					<Select
						className="min-w-[150px]"
						classNames={selectClassNames}
						isMulti={isMulti}
						options={options as any}
						onChange={onSelect as any}
						value={selectValue as any}
					/>
					{createDiv}
				</div>
			)}
		/>
	);
}
