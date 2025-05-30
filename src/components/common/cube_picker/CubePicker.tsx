import {Cube} from '@phosphor-icons/react/dist/ssr';
import React from 'react';
import {CubeType} from '../../../lib/util/cubes/cube_types';
import {
	getAllCubeTypeNames,
	getCubeTypeInfoById,
	getDefaultCubeTypeNames,
} from '../../../lib/util/cubes/util';
import Dropdown, {DropdownProps} from '../inputs/dropdown/Dropdown';
import {IDropdownOption} from '../inputs/dropdown/dropdown_option/DropdownOption';

interface Props {
	value: string;
	excludeSelected?: boolean;
	handlePrefix?: string;
	cubeTypes?: string[];
	excludeCustomCubeTypes?: boolean;
	onChange?: (cubeType: CubeType) => void;
	excludeOtherCubeType?: boolean;
	dropdownProps?: Partial<DropdownProps>;
}

export default function CubePicker(props: Props) {
	const {
		value,
		cubeTypes,
		handlePrefix,
		excludeCustomCubeTypes,
		excludeSelected,
		onChange,
		dropdownProps,
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

	const options: IDropdownOption[] = [];
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
			text: ct.name,
			disabled,
			onClick: () => onChange && onChange(ct),
		});
	}

	const cubeType = getCubeTypeInfoById(value);

	let text = handlePrefix || '';
	text += cubeType?.name || '';

	return (
		<Dropdown
			text={text}
			icon={<Cube weight="bold" />}
			options={options}
			dropdownMaxHeight={300}
			{...(dropdownProps || {})}
		/>
	);
}
