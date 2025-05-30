import {setTimerParams} from '@/components/timer/helpers/params';
import {getStore} from '@/components/store';
import {turnSmartCube} from '@/lib/actions/timer';
import {toastError} from '@/lib/util/toast';
import {openModal} from '@/lib/actions/general';
import React from 'react';
import SolveCheck from '../solve_check/SolveCheck';
import {SmartDevice} from '@/generated/zod';

interface SmartCubeServer {
	device: {
		name: string;
		id: string;
	};
}

interface SmartCubeDevice {
	id: string;
	device_id: string;
	name: string;
}

export default class SmartCube {
	alertConnecting = (): void => {
		setTimerParams({
			smartCubeConnecting: true,
		});
	};

	alertDisconnected = (): void => {
		toastError('Smart cube disconnected');

		setTimerParams({
			smartCubeConnecting: false,
			smartCubeConnected: false,
		});
	};

	smartCubeInDb = async (server: SmartCubeServer): Promise<SmartDevice | false> => {
		// TODO: Migrate to tRPC - need smartDevice.getDevices query
		// const smartDevicesQuery = api.smartDevice.getDevices.useQuery();
		// const devices = smartDevicesQuery.data || [];
		//
		// for (const dev of devices) {
		// 	if (dev.device_id === server.device.id) {
		// 		return dev;
		// 	}
		// }

		return false;
	};

	addSmartCubeToDb = async (
		originalName: string,
		deviceId: string,
	): Promise<SmartDevice | null> => {
		// TODO: Migrate to tRPC - need smartDevice.addNewDevice mutation
		// const addNewSmartDeviceMutation = api.smartDevice.addNewDevice.useMutation();
		// const device = await addNewSmartDeviceMutation.mutateAsync({
		// 	originalName,
		// 	deviceId,
		// });
		// return device;

		return null;
	};

	alertConnected = async (server: SmartCubeServer): Promise<void> => {
		let dev: SmartDevice | null;
		const exists = await this.smartCubeInDb(server);
		if (!exists) {
			dev = await this.addSmartCubeToDb(server.device.name, server.device.id);
		} else {
			dev = exists;
		}

		if (!dev) {
			toastError('Failed to register smart cube');
			return;
		}

		getStore().dispatch(
			openModal(<SolveCheck />, {
				title: 'Confirm that cube is solved',
				description: 'Please confirm that your smart cube is solved before proceeding.',
				hideCloseButton: true,
				onComplete: () => this.confirmConnected(dev),
			}),
		);
	};

	confirmConnected = (dev: SmartDevice): void => {
		setTimerParams({
			smartCubeConnecting: false,
			smartCubeConnected: true,
			smartDeviceId: dev.id,
		});
	};

	alertBatteryLevel = (level: number): void => {
		setTimerParams({
			smartCubeBatteryLevel: level,
		});
	};

	alertTurnCube = (move: string): void => {
		const store = getStore();
		const state = store.getState() as any;
		if (state.timer.smartCubeConnecting) {
			return;
		}

		store.dispatch(turnSmartCube(move.replace(/\s/g, ''), new Date()));
	};

	alertCubeState = (state: string): void => {
		const store = getStore();
		const storeState = store.getState() as any;
		if (storeState.timer.smartCubeConnecting) {
			return;
		}

		setTimerParams({
			smartCurrentState: state,
		});
	};
}
