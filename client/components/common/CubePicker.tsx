import ComboboxField, {ComboboxFieldOptions} from '@/components/common/inputs/ComboboxField';
import {CubeType} from '@/util/cubes/cube_types';
import {getAllCubeTypeNames, getCubeTypeInfoById, getDefaultCubeTypeNames} from '@/util/cubes/util';
import React from 'react';

interface Props {
	value: string;
	excludeSelected?: boolean;
	handlePrefix?: string;
	cubeTypes?: string[];
	excludeCustomCubeTypes?: boolean;
	onChange?: (cubeType: CubeType) => void;
	excludeOtherCubeType?: boolean;
	pickerProps?: ComboboxFieldOptions;
}

export default function CubePicker(props: Props) {
	const {
		value,
		cubeTypes,
		handlePrefix,
		excludeCustomCubeTypes,
		excludeSelected,
		onChange,
		pickerProps,
		excludeOtherCubeType,
	} = props;

	let cubeTypeNames: string[];
	if (cubeTypes) {
		cubeTypeNames = cubeTypes;
	} else if (excludeCustomCubeTypes) {
		cubeTypeNames = getDefaultCubeTypeNames();
	} else {
		cubeTypeNames = getAllCubeTypeNames();
	}

	const options: {value: string; text: string}[] = [];
	for (const name of cubeTypeNames) {
		const ct = getCubeTypeInfoById(name);
		const disabled = ct?.id === value;

		if (
			!name ||
			!ct ||
			(excludeOtherCubeType && name === 'other') ||
			(excludeSelected && disabled)
		) {
			continue;
		}

		options.push({
			value: ct.id,
			text: ct.name,
		});
	}

	const cubeType = getCubeTypeInfoById(value);

	let text = handlePrefix || '';
	text += cubeType?.name || '';

	return (
		<ComboboxField
			{...pickerProps}
			label="Cube type"
			value={value}
			text={text}
			options={options}
			onValueChange={(id) => {
				const cube = getCubeTypeInfoById(id);
				if (cube) onChange?.(cube);
			}}
		/>
	);
}
