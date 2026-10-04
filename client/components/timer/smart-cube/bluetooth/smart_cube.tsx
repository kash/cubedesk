import {turnSmartCube} from '@/actions/timer';
import {getStore} from '@/components/store';
// @ts-nocheck
import {setTimerParams} from '@/components/timer/helpers/params';
import {toastError} from '@/util/toast';
import {trpc} from '@/util/trpc';

export type PendingSmartDevice = Awaited<ReturnType<typeof trpc.smartDevice.create.mutate>>;
/** unsupported: browser can't read the MAC automatically, detection-failed: it can but didn't find it */
export type MacAddressRequestReason = 'unsupported' | 'detection-failed';
export type MacAddressResponse =
	{action: 'submit'; macAddress: string} | {action: 'retry'} | {action: 'cancel'};
export interface SmartCubeCallbacks {
	confirmSolved: (device: PendingSmartDevice) => Promise<boolean>;
	requestMacAddress: (reason: MacAddressRequestReason) => Promise<MacAddressResponse>;
	/** Cube reported its actual state on connect, as a Kociemba facelets string */
	onInitialState: (facelets: string) => void;
	onDisconnected: () => void;
	isActive: () => boolean;
}

/** Connection failure whose message is safe to show the user, an empty message means the user cancelled */
export class SmartCubeConnectionError extends Error {}

export default class SmartCube {
	constructor(protected callbacks: SmartCubeCallbacks) {}

	alertConnecting = () => {
		setTimerParams({
			smartCubeConnecting: true,
		});
	};

	alertDisconnected = () => {
		if (!this.callbacks.isActive()) return;
		this.callbacks.onDisconnected();
		toastError('Smart cube disconnected');

		setTimerParams({
			smartCubeConnecting: false,
			smartCubeConnected: false,
		});
	};

	smartCubeInDb = async (server) => {
		const devices = await trpc.smartDevice.list.query();

		for (const dev of devices) {
			if (dev.device_id === server.device.id) {
				return dev;
			}
		}

		return false;
	};

	addSmartCubeToDb = async (originalName, deviceId) => {
		return await trpc.smartDevice.create.mutate({
			originalName,
			deviceId,
		});
	};

	/** skipConfirmation: the cube's state is already known, so there's no need to ask if it's solved */
	alertConnected = async (server, {skipConfirmation = false} = {}) => {
		if (!this.callbacks.isActive()) return;
		let dev;
		const exists = await this.smartCubeInDb(server);
		if (!exists) {
			dev = await this.addSmartCubeToDb(server.device.name, server.device.id);
		} else {
			dev = exists;
		}

		if (!this.callbacks.isActive()) return;
		const confirmed = skipConfirmation || (await this.callbacks.confirmSolved(dev));
		if (confirmed && this.callbacks.isActive()) this.confirmConnected(dev);
	};

	confirmConnected = (dev) => {
		setTimerParams({
			smartCubeConnecting: false,
			smartCubeConnected: true,
			smartDeviceId: dev.id,
		});
	};

	/**
	 * Tell the cube it's solved, for cubes that track their own state. Resolves true if the cube now
	 * reports solved, false if it doesn't track state or the reset didn't take.
	 */
	resetToSolved = async (): Promise<boolean> => false;

	alertInitialState = (facelets: string) => {
		if (this.callbacks.isActive()) this.callbacks.onInitialState(facelets);
	};

	alertBatteryLevel = (level) => {
		setTimerParams({
			smartCubeBatteryLevel: level,
		});
	};

	alertTurnCube = (move) => {
		const store = getStore();
		if (store.getState().timer.smartCubeConnecting) {
			return;
		}

		store.dispatch(turnSmartCube(move.replace(/\s/g, ''), new Date()));
	};

	alertCubeState = (state) => {
		const store = getStore();
		if (store.getState().timer.smartCubeConnecting) {
			return;
		}

		setTimerParams({
			smartCurrentState: state,
		});
	};
}
