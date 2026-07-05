import {useState} from 'react';
import {useEventListener} from '@/util/event_handler';

export function useSolveDb() {
	const [changeCounter, setChangeCounter] = useState(0);
	useEventListener('solveDbUpdatedEvent', () => setChangeCounter(changeCounter + 1));

	return changeCounter;
}
