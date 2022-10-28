import {getPrisma} from '../database';
import {v4 as uuid} from 'uuid';

export function getSmartDeviceById(id) {
	return getPrisma().smartDevice.findUnique({
		where: {
			id,
		},
	});
}

export function getSmartDevices(user) {
	return getPrisma().smartDevice.findMany({
		where: {
			user_id: user.id,
		},
		include: {
			solves: true
		}
	});
}

export function deleteSmartDevice(id) {
	return getPrisma().smartDevice.delete({
		where: {
			id,
		},
	});
}

export function updateSmartDevice(id, params) {
	return getPrisma().smartDevice.update({
		where: {
			id,
		},
		data: params,
	});
}

export function createSmartDevice(user, name, internalName, deviceId) {
	const id = uuid();

	return getPrisma().smartDevice.create({
		data: {
			id,
			name,
			user_id: user.id,
			internal_name: internalName,
			device_id: deviceId,
		},
	});
}
