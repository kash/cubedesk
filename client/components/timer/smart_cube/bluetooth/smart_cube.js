import {setTimerParams} from '../../helpers/params';
import {getStore} from '../../../store';
import {turnSmartCube} from '../../../../actions/timer';
import {toastError} from '../../../../util/toast';
import {gql} from '@apollo/client';
import {gqlMutate} from '../../../api';
import {openModal} from '../../../../actions/general';
import React from 'react';
import SolveCheck from '../solve_check/SolveCheck';

export default class SmartCube {
	alertConnecting = () => {
		setTimerParams({
			smartCubeConnecting: true,
		});
	};

	alertDisconnected = () => {
		toastError('Smart cube disconnected');

		setTimerParams({
			smartCubeConnecting: false,
			smartCubeConnected: false,
		});
	};

	smartCubeInDb = async (server) => {
		const query = gql`
			query Query {
				smartDevices {
					id
					device_id
				}
			}
		`;

		const res = await gqlMutate(query);

		for (const dev of res.data.smartDevices) {
			if (dev.device_id === server.device.id) {
				return dev;
			}
		}

		return false;
	};

	addSmartCubeToDb = async (originalName, deviceId) => {
		const query = gql`
			mutation Mutate($originalName: String, $deviceId: String) {
				addNewSmartDevice(originalName: $originalName, deviceId: $deviceId) {
					id
					name
					internal_name
					device_id
					created_at
				}
			}
		`;

		const res = await gqlMutate(query, {
			originalName,
			deviceId,
		});

		return res.data.addNewSmartDevice;
	};

	alertConnected = async (server) => {
		let dev;
		const exists = await this.smartCubeInDb(server);
		if (!exists) {
			dev = await this.addSmartCubeToDb(server.device.name, server.device.id);
		} else {
			dev = exists;
		}

		getStore().dispatch(
			openModal(<SolveCheck />, {
				title: 'Confirm that cube is solved',
				description: 'Please confirm that your smart cube is solved before proceeding.',
				hideCloseButton: true,
				onComplete: () => this.confirmConnected(dev),
			})
		);
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
