import {setTimerParams} from './params';
import {
	setTimer,
	stopTimer,
	clearInspectionTimers,
	START_TIMEOUT,
	INSPECTION_TIMEOUT,
	INSPECTION_INTERVAL
} from './timers';
import {emitEvent} from '../../../util/event_handler';
import {saveSolve} from './save';
import {resetScramble} from './scramble';
import {ITimerContext} from '../Timer';
import {SolveInput} from '../../../../server/schemas/Solve.schema';
import {getSettings} from '../../../db/settings/query';
import {getTimerStore} from '../../../util/store/getTimer';
import {resourceUri} from '../../../util/storage';

let endLocked = false;

export function startTimer() {
	const timeStartedAt = new Date();

	clearInspectionTimers(false, true);
	setTimerParams({
		editScramble: false,
		notification: null,
		timeStartedAt,
		solving: true,
		finalTime: 0,
	});

	setTimeout(() => {
		emitEvent('startTimerEvent', {
			timeStartedAt,
		});
	});
}

export function endTimer(context: ITimerContext, finalTimeMilli?: number, overrides?: Partial<SolveInput>) {

	const {scramble, timeStartedAt} = context;

	if (endLocked || !timeStartedAt) {
		return;
	}

	endLocked = true;
	let finalTime = finalTimeMilli;

	const now = new Date();

	if (!finalTimeMilli) {
		finalTime = now.getTime() - timeStartedAt.getTime();
	}

	setTimerParams({
		solving: false,
		finalTime,
	});

	resetTimerParams(context);
	setTimeout(() => {
		saveSolve(context, finalTime, scramble, timeStartedAt.getTime(), now.getTime(), false, false, overrides);
		endLocked = false;
	}, 10);
}

export function resetTimerParams(context: ITimerContext) {
	resetScramble(context);
	stopTimer(START_TIMEOUT);
	clearInspectionTimers(false, true);
	setTimerParams({
		spaceTimerStarted: 0,
		solving: false,
		canStart: false,
		timeStartedAt: null,
	});
}

export function cancelInspection() {
	clearInspectionTimers(true, true);
}

export function startInspection() {

	const {
		inspection_delay: inspectionDelay,
		inspection_auto_start: inspectionAutoStart,
		play_inspection_sound: playInspectionSound,
		timer_type: timerType
	} = getSettings();

	const stackMatOn = timerType === 'stackmat';
	const ganTimerOn = timerType === 'gantimer';

	setTimerParams({
		inInspection: true,
		inspectionTimer: inspectionDelay + 2,
		addTwoToSolve: false,
		dnfTime: false,
	});

	setTimer(
		INSPECTION_TIMEOUT,
		setTimeout(() => {
			if (inspectionAutoStart && !ganTimerOn && !stackMatOn) {
				startTimer();
			}
			setTimerParams({
				dnfTime: true,
				addTwoToSolve: false,
			});
		}, inspectionDelay * 1000 + 2000)
	);

	setTimer(
		INSPECTION_INTERVAL,
		setInterval(() => {
			const insTimer = getTimerStore('inspectionTimer');
			if (playInspectionSound) {
				let audio;
				if (inspectionDelay - insTimer === 5) {
					audio = new Audio(resourceUri('/audio/8_sec.mp3'));
				} else if (inspectionDelay - insTimer === 9) {
					audio = new Audio(resourceUri('/audio/12_sec.mp3'));
				}
				if (audio) {
					audio.playbackRate = 2.3;
					audio.play();
				}
			}
			let addTwoToSolve = false;
			if (insTimer <= 3) {
				addTwoToSolve = true;
			}
			setTimerParams({
				inspectionTimer: insTimer - 1,
				addTwoToSolve,
			});
		}, 1000)
	);

}
