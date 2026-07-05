import Dropdown, {DropdownProps} from '@/components/common/inputs/dropdown/Dropdown';
import {IDropdownOption} from '@/components/common/inputs/dropdown/DropdownOption';
import {ScrambleType} from '@/util/cubes/cube_scrambles';
import {getAllScrambleTypeNames, getScrambleTypeById} from '@/util/cubes/util';
import {CaretDown} from 'phosphor-react';
import React from 'react';

interface Props {
	value: string;
	excludeSelected?: boolean;
	handlePrefix?: string;
	scrambleTypes?: string[];
	onChange?: (scrambleType: ScrambleType) => void;
	excludeOtherScrambleType?: boolean;
	dropdownProps?: DropdownProps;
}

export default function ScramblePicker(props: Props) {
	const {
		value,
		scrambleTypes,
		handlePrefix,
		excludeSelected,
		onChange,
		dropdownProps,
		excludeOtherScrambleType,
	} = props;

	let scrambleTypeNames: string[];
	if (scrambleTypes) {
		scrambleTypeNames = scrambleTypes;
	} else {
		scrambleTypeNames = getAllScrambleTypeNames();
	}

	const options: IDropdownOption[] = [];
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
			text: st.name,
			on: selected,
			onClick: () => onChange && onChange(st),
		});
	}

	const scrambleType = getScrambleTypeById(value);

	let text = scrambleType?.name;
	if (handlePrefix) {
		text = `${handlePrefix}${text}`;
	}

	return (
		<Dropdown
			text={text}
			legend="Scramble type"
			icon={<CaretDown />}
			openLeft
			dropdownMaxHeight={300}
			{...(dropdownProps || {})}
			options={options}
		/>
	);
}
