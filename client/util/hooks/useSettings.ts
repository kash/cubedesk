import {AllSettings, getSetting} from '../../db/settings/query';
import {useState} from 'react';
import {useEventListener} from '../event_handler';

export function useSettings<T extends keyof AllSettings>(key: T): AllSettings[T] {
	const [changeCounter, setChangeCounter] = useState(0);
	const value = getSetting(key);
	useEventListener('settingsDbUpdatedEvent', () => setChangeCounter(changeCounter + 1));

	return value;
}
