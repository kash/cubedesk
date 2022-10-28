import React, {useMemo} from 'react';
import './InputSelect.scss';
import Select from 'react-select';
import block from '../../../../styles/bem';
import GenericInput, {GenericInputProps, GenericProps} from '../generic_input/GenericInput';
import Button, {ButtonProps} from '../../button/Button';

const b = block('input-select');

export type InputSelectOption = {value: string; label: string};

interface Props extends GenericInputProps<HTMLInputElement> {
	values: InputSelectOption | InputSelectOption[] | string | string[];
	options: InputSelectOption[];
	onSelect: (newValue: InputSelectOption[] | InputSelectOption) => void;
	createButton?: ButtonProps;
	isMulti?: boolean;
}

export default function InputSelect(props: GenericProps<Props>) {
	const {isMulti, options, onSelect, createButton, values} = props;

	const genericProps = {...props};
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

	let createDiv = null;
	if (createButton) {
		createDiv = (
			<div className={b('create')}>
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
				<div className={b('wrapper')}>
					<Select
						className={b()}
						classNamePrefix={b()}
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
