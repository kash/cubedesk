import {setTimerParams} from '@/components/timer/helpers/params';
import {saveSolve} from '@/components/timer/helpers/save';
import {resetScramble} from '@/components/timer/helpers/scramble';
import {
	clearInspectionTimers,
	INSPECTION_INTERVAL,
	INSPECTION_TIMEOUT,
	setTimer,
	START_TIMEOUT,
	stopTimer
} from '@/components/timer/helpers/timers';
import {ITimerContext} from '@/components/timer/Timer';
import {getSettings} from '@/db/settings/query';
import {Solve} from '@/types/solve';
import {emitEvent} from '@/util/event_handler';
import {resourceUri} from '@/util/storage';
import {getTimerStore} from '@/util/store/getTimer';

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

export function endTimer(context: ITimerContext, finalTimeMilli?: number, overrides?: Partial<Solve>) {

	const {scramble, timeStartedAt} = context;

	if (endLocked || !timeStartedAt) {
		return;
	}

	endLocked = true;

	const now = new Date();
	const finalTime = finalTimeMilli || now.getTime() - timeStartedAt.getTime();

	setTimerParams({
		solving: false,
		finalTime,
	});

	resetTimerParams(context);
	setTimeout(() => {
		saveSolve(context, finalTime, scramble ?? '', timeStartedAt.getTime(), now.getTime(), false, false, overrides);
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
