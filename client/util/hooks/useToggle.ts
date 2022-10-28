import {useState} from 'react';

export function useToggle(initialValue: boolean = false): [boolean, (newVal?: boolean) => void] {
	const [value, setValue] = useState<boolean>(initialValue);

	function toggleValue(newVal: boolean = null) {
		if (newVal === null) {
			setValue(!value);
		} else {
			setValue(newVal);
		}
	}

	return [value, toggleValue];
}
