import {turnSmartCube} from '@/actions/timer';
import {getStore} from '@/components/store';
// @ts-nocheck
import {setTimerParams} from '@/components/timer/helpers/params';
import {toastError} from '@/util/toast';
import {trpc} from '@/util/trpc';

export type PendingSmartDevice = Awaited<ReturnType<typeof trpc.smartDevice.create.mutate>>;
export interface SmartCubeCallbacks {
	confirmSolved: (device: PendingSmartDevice) => Promise<boolean>;
	onDisconnected: () => void;
	isActive: () => boolean;
}

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

	alertConnected = async (server) => {
		if (!this.callbacks.isActive()) return;
		let dev;
		const exists = await this.smartCubeInDb(server);
		if (!exists) {
			dev = await this.addSmartCubeToDb(server.device.name, server.device.id);
		} else {
			dev = exists;
		}

		if (!this.callbacks.isActive()) return;
		const confirmed = await this.callbacks.confirmSolved(dev);
		if (confirmed && this.callbacks.isActive()) this.confirmConnected(dev);
	};

	confirmConnected = (dev) => {
		setTimerParams({
			smartCubeConnecting: false,
			smartCubeConnected: true,
			smartDeviceId: dev.id,
		});
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
