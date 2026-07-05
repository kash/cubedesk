import {useEventListener} from '@/util/event_handler';
import {useState} from 'react';

export function useTrainerDb() {
	const [changeCounter, setChangeCounter] = useState(0);
	useEventListener('trainerDbUpdatedEvent', () => setChangeCounter(changeCounter + 1));

	return changeCounter;
}
