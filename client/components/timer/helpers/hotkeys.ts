import {getTimerStore} from '@/util/store/getTimer';
import {configure} from 'react-hotkeys';

export function configureHotkeys() {
	configure({
		ignoreTags: ['input', 'select', 'textarea'],
		ignoreEventsCondition: (e: any) => {
			if (e && e.target && ['input', 'select', 'textarea'].indexOf(e.target.localName) > -1) {
				return true;
			}

			const timeStartedAt = getTimerStore('timeStartedAt');
			return timeStartedAt !== null;
		},
	});
}
