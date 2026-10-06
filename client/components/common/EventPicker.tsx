import ComboboxField, {ComboboxFieldOptions} from '@/components/common/inputs/ComboboxField';
import {EventType} from '@/util/cubes/event_types';
import {getAllEventTypeNames, getDefaultEventTypeNames, getEventTypeInfoById} from '@/util/cubes/util';
import React from 'react';

interface Props {
	value: string;
	excludeSelected?: boolean;
	handlePrefix?: string;
	eventTypes?: string[];
	excludeCustomEventTypes?: boolean;
	onChange?: (eventType: EventType) => void;
	excludeOtherEventType?: boolean;
	pickerProps?: ComboboxFieldOptions;
}

export default function EventPicker(props: Props) {
	const {
		value,
		eventTypes,
		handlePrefix,
		excludeCustomEventTypes,
		excludeSelected,
		onChange,
		pickerProps,
		excludeOtherEventType,
	} = props;

	let eventTypeNames: string[];
	if (eventTypes) {
		eventTypeNames = eventTypes;
	} else if (excludeCustomEventTypes) {
		eventTypeNames = getDefaultEventTypeNames();
	} else {
		eventTypeNames = getAllEventTypeNames();
	}

	const options: {value: string; text: string}[] = [];
	for (const name of eventTypeNames) {
		const ct = getEventTypeInfoById(name);
		const disabled = ct?.id === value;

		if (
			!name ||
			!ct ||
			(excludeOtherEventType && name === 'other') ||
			(excludeSelected && disabled)
		) {
			continue;
		}

		options.push({
			value: ct.id,
			text: ct.name,
		});
	}

	const eventType = getEventTypeInfoById(value);

	let text = handlePrefix || '';
	text += eventType?.name || '';

	return (
		<ComboboxField
			{...pickerProps}
			label="Event type"
			value={value}
			text={text}
			options={options}
			onValueChange={(id) => {
				const cube = getEventTypeInfoById(id);
				if (cube) onChange?.(cube);
			}}
		/>
	);
}
