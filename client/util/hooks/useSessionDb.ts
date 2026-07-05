import {useEventListener} from '@/util/event_handler';
import {useState} from 'react';

export function useSessionDb() {
	const [changeCounter, setChangeCounter] = useState(0);
	useEventListener('sessionsDbUpdatedEvent', () => setChangeCounter(changeCounter + 1));
}
