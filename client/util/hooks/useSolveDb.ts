import {useEventListener} from '@/util/event_handler';
import {useState} from 'react';

export function useSolveDb() {
	const [changeCounter, setChangeCounter] = useState(0);
	useEventListener('solveDbUpdatedEvent', () => setChangeCounter((count) => count + 1));

	return changeCounter;
}
