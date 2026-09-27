import ComboboxField, {ComboboxFieldOptions} from '@/components/common/inputs/ComboboxField';
import {ScrambleType} from '@/util/cubes/cube_scrambles';
import {getAllScrambleTypeNames, getScrambleTypeById} from '@/util/cubes/util';
import React from 'react';

interface Props {
	value: string;
	excludeSelected?: boolean;
	handlePrefix?: string;
	scrambleTypes?: string[];
	onChange?: (scrambleType: ScrambleType) => void;
	excludeOtherScrambleType?: boolean;
	pickerProps?: ComboboxFieldOptions;
	labels: {label: string; placeholder: string; searchPlaceholder: string; emptyMessage: string};
}

export default function ScramblePicker(props: Props) {
	const {
		labels,
		value,
		scrambleTypes,
		handlePrefix,
		excludeSelected,
		onChange,
		pickerProps,
		excludeOtherScrambleType,
	} = props;

	let scrambleTypeNames: string[];
	if (scrambleTypes) {
		scrambleTypeNames = scrambleTypes;
	} else {
		scrambleTypeNames = getAllScrambleTypeNames();
	}

	const options: {value: string; text: string}[] = [];
	for (const name of scrambleTypeNames) {
		const st = getScrambleTypeById(name);
		const selected = st?.id === value;

		if (
			!name ||
			!st ||
			(excludeOtherScrambleType && name === 'other') ||
			(excludeSelected && selected)
		) {
			continue;
		}

		options.push({
			value: st.id,
			text: st.name,
		});
	}

	const scrambleType = getScrambleTypeById(value);

	let text = scrambleType?.name;
	if (handlePrefix) {
		text = `${handlePrefix}${text}`;
	}

	return (
		<ComboboxField
			{...pickerProps}
			label={labels.label}
			placeholder={labels.placeholder}
			searchPlaceholder={labels.searchPlaceholder}
			emptyMessage={labels.emptyMessage}
			value={value}
			text={text}
			options={options}
			onValueChange={(id) => {
				const scramble = getScrambleTypeById(id);
				if (scramble) onChange?.(scramble);
			}}
		/>
	);
}
