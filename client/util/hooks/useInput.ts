import {useState} from 'react';

export function useInput(initialValue) {
	const [value, setValue] = useState(initialValue);

	function handleChange(e) {
		if (!e) {
			setValue('');
		} else if (typeof e === 'string') {
			setValue(e);
		} else if (e?.target) {
			setValue(e.target.value);
		}
	}

	return [value, handleChange];
}
