import {fetchSessionById} from '../../../db/sessions/query';
import {createSessionDb} from '../../../db/sessions/update';
import {setSetting} from '../../../db/settings/update';
import {ITimerContext} from '../Timer';
import {Dispatch} from 'redux';
import {getCubeTypeInfoById} from '../../../util/cubes/util';
import {getSetting} from '../../../db/settings/query';

// Creates session if none exist already
export async function initTimer(dispatch: Dispatch<any>, context: ITimerContext) {
	const {inModal, demoMode} = context;
	const sessionId = getSetting('session_id');
	const cubeType = getSetting('cube_type');
	const ct = getCubeTypeInfoById(cubeType);

	if (demoMode) {
		const session = await createSessionDb({
			demo_mode: true,
			name: 'Demo Session',
			id: 'demo',
		});
		setSetting('session_id', session.id);
	} else if (!inModal) {
		if (!sessionId || (sessionId && !fetchSessionById(sessionId))) {
			const session = await createSessionDb({
				name: 'New Session',
			});
			setSetting('session_id', session.id);
		}

		// If, for some reason, the cube type is not valid, set it to 3x3
		if (!ct) {
			setSetting('cube_type', '333');
		}
	}
}
