import {AllSettings, getSetting} from '@/db/settings/query';
import {useEventListener} from '@/util/event_handler';
import {useState} from 'react';

export function useSettings<T extends keyof AllSettings>(key: T): AllSettings[T] {
	const [, setChangeCounter] = useState(0);
	const value = getSetting(key);
	useEventListener(
		'settingsDbUpdatedEvent',
		(setVal) => {
			if (setVal?.id === key) {
				setChangeCounter((count) => count + 1);
			}
		},
		[key],
	);

	return value;
}
