import GenericInput, {
	GenericInputProps,
} from '@/components/common/inputs/generic_input/GenericInput';
import {Label} from '@/components/ui/label';
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group';
import React from 'react';

export interface RadioOption {
	label: string;
	value: string | number;
	id: string;
}

type Props = Omit<GenericInputProps<HTMLInputElement>, 'inputWrapper' | 'onChange'> & {
	name: string;
	value: string | number;
	options: RadioOption[];
	onValueChange: (value: string) => void;
};

export default function Radio({value, name, options, onValueChange, disabled, ...props}: Props) {
	const id = React.useId();
	return (
		<GenericInput
			{...props}
			inputWrapper={() => (
				<RadioGroup
					name={name}
					value={String(value)}
					onValueChange={onValueChange}
					disabled={disabled}
					aria-label={props.legend || name}
				>
					{options.map((option) => (
						<div key={option.id} className="flex items-center gap-2">
							<RadioGroupItem
								id={`${id}-${option.id}`}
								value={String(option.value)}
							/>
							<Label
								htmlFor={`${id}-${option.id}`}
								className="cursor-pointer leading-5"
							>
								{option.label}
							</Label>
						</div>
					))}
				</RadioGroup>
			)}
		/>
	);
}
