import {useState} from 'react';
import {useEventListener} from '@/util/event_handler';

export function useTrainerDb() {
	const [changeCounter, setChangeCounter] = useState(0);
	useEventListener('trainerDbUpdatedEvent', () => setChangeCounter(changeCounter + 1));

	return changeCounter;
}
