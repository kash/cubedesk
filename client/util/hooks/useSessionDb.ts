import {useState} from 'react';
import {useEventListener} from '@/util/event_handler';

export function useSessionDb() {
	const [changeCounter, setChangeCounter] = useState(0);
	useEventListener('sessionsDbUpdatedEvent', () => setChangeCounter(changeCounter + 1));
}
