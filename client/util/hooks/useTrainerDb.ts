import {getMe} from '@/components/store';
import {initTrainerData} from '@/components/trainer/util/init';
import {getTrainerDb} from '@/db/trainer/init';
import {useEventListener} from '@/util/event_handler';
import {useEffect, useState} from 'react';

/**
 * Re-renders when trainer data changes, and loads it if it hasn't been yet (signed in only)
 */
export function useTrainerDb() {
	const [changeCounter, setChangeCounter] = useState(0);
	useEventListener('trainerDbUpdatedEvent', () => setChangeCounter(changeCounter + 1));

	useEffect(() => {
		// Trainer data belongs to an account, so demo mode has none
		if (getTrainerDb() || !getMe()) {
			return;
		}

		// The trainer page retries and shows its own error state
		initTrainerData().catch((error) => {
			console.error('Could not load trainer data', error);
		});
	}, []);

	return changeCounter;
}
