import {endTimer, startTimer} from '@/components/timer/helpers/events';
import {setTimerParams} from '@/components/timer/helpers/params';
import {ITimerContext, useTimerContext} from '@/components/timer/Timer';
import {useSettings} from '@/util/hooks/useSettings';
import {getTimerStore} from '@/util/store/getTimer';
import Stackmat from '@/util/vendor/stackmat';
import {useEffect, useRef, useState} from 'react';

export type StackMatStatus =
	| 'select'
	| 'permission'
	| 'missing'
	| 'blocked'
	| 'off'
	| 'idle'
	| 'reset'
	| 'hands'
	| 'ready';

type StackMatState = Stackmat['stackmat_state'];

const MAX_INIT_RETRIES = 5;
const GESTURE_EVENTS = ['pointerdown', 'keydown', 'touchstart'] as const;

export function stackMatConnected(status: StackMatStatus) {
	return status === 'idle' || status === 'reset' || status === 'hands' || status === 'ready';
}

function getStatus(state: StackMatState): StackMatStatus {
	if (!state.on) return 'off';
	if (state.greenLight) return 'ready';
	if (state.leftHand && state.rightHand) return 'hands';
	if (!state.running && state.time_milli > 0) return 'reset';
	return 'idle';
}

function getErrorName(e: unknown) {
	return e instanceof Error || e instanceof DOMException ? e.name : '';
}

export function useStackMat(enabled: boolean): StackMatStatus {
	const stackMatId = useSettings('stackmat_id');
	const context = useTimerContext();
	const contextRef = useRef<ITimerContext>(context);
	const [status, setStatus] = useState<StackMatStatus>('off');

	useEffect(() => {
		contextRef.current = context;
	}, [context]);

	useEffect(() => {
		if (!enabled || !stackMatId) return;

		let cancelled = false;
		let device: Stackmat | null = null;
		let connecting = false;
		let retryTimeout: ReturnType<typeof setTimeout> | undefined;
		let permission: PermissionStatus | null = null;
		let ignoredStates = 0;
		let started = false;

		function handleState(state: StackMatState) {
			if (cancelled) return;

			setStatus(getStatus(state));

			if (ignoredStates < 2) {
				ignoredStates++;
				return;
			}

			if (state.running && !started) {
				started = true;
				startTimer();
			} else if (!state.running && started) {
				started = false;
				endTimer(
					{...contextRef.current, timeStartedAt: getTimerStore('timeStartedAt')},
					state.time_milli,
				);
			} else if (
				state.on &&
				!state.running &&
				state.time_milli === 0 &&
				!getTimerStore('solving') &&
				(getTimerStore('finalTime') ?? 0) > 0
			) {
				setTimerParams({finalTime: -1});
			}
		}

		function disconnect() {
			clearTimeout(retryTimeout);
			device?.stop();
			device = null;
			connecting = false;
		}

		function connect(attempt = 0) {
			disconnect();

			const instance = new Stackmat();
			device = instance;
			connecting = true;
			ignoredStates = 0;
			setStatus('off');

			instance
				.init('', stackMatId, true, handleState)
				.then(() => {
					if (cancelled || device !== instance) {
						instance.stop();
						return;
					}
					connecting = false;

					instance.audio_stream?.getAudioTracks().forEach((track: MediaStreamTrack) => {
						track.addEventListener('ended', () => {
							if (device !== instance) return;
							disconnect();
							setStatus('missing');
						});
					});

					if (instance.audio_context?.state === 'suspended') {
						setStatus('blocked');
					}
				})
				.catch((e: unknown) => {
					instance.stop();
					if (cancelled || device !== instance) return;
					device = null;
					connecting = false;

					const name = getErrorName(e);
					if (name === 'NotAllowedError' || name === 'SecurityError') {
						setStatus('permission');
					} else if (name === 'NotFoundError' || name === 'OverconstrainedError') {
						setStatus('missing');
					} else {
						console.error(e);
						if (attempt < MAX_INIT_RETRIES) {
							retryTimeout = setTimeout(() => connect(attempt + 1), 1000);
						}
					}
				});
		}

		function hasLiveInput() {
			return !!device?.audio_stream
				?.getAudioTracks()
				.some((track: MediaStreamTrack) => track.readyState === 'live');
		}

		function reconnectIfNeeded() {
			if (cancelled || connecting || hasLiveInput()) return;
			connect();
		}

		function resumeAudio() {
			const audioContext = device?.audio_context;
			if (audioContext?.state !== 'suspended') return;
			audioContext
				.resume()
				.then(() => {
					if (cancelled) return;
					setStatus((current) => (current === 'blocked' ? 'off' : current));
				})
				.catch(() => null);
		}

		function handlePermissionChange() {
			if (permission?.state === 'granted') reconnectIfNeeded();
		}

		connect();

		const mediaDevices = navigator.mediaDevices;
		mediaDevices?.addEventListener?.('devicechange', reconnectIfNeeded);
		GESTURE_EVENTS.forEach((type) => window.addEventListener(type, resumeAudio, true));

		navigator.permissions
			?.query({name: 'microphone' as PermissionName})
			.then((result) => {
				if (cancelled) return;
				permission = result;
				result.addEventListener('change', handlePermissionChange);
				if (result.state === 'prompt' && connecting) setStatus('permission');
			})
			.catch(() => null);

		return () => {
			cancelled = true;
			disconnect();
			mediaDevices?.removeEventListener?.('devicechange', reconnectIfNeeded);
			GESTURE_EVENTS.forEach((type) => window.removeEventListener(type, resumeAudio, true));
			permission?.removeEventListener('change', handlePermissionChange);
			setStatus('off');
		};
	}, [enabled, stackMatId]);

	return stackMatId ? status : 'select';
}
