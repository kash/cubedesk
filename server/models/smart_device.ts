import type {Prisma, UserAccount} from '@/generated/prisma/client';
import {getPrisma} from '@/server/database';
import {v4 as uuid} from 'uuid';

export function getSmartDeviceById(id: string) {
	return getPrisma().smartDevice.findUnique({
		where: {
			id,
		},
	});
}

export function deleteSmartDevice(id: string) {
	return getPrisma().smartDevice.delete({
		where: {
			id,
		},
	});
}

export function updateSmartDevice(id: string, params: Prisma.SmartDeviceUpdateInput) {
	return getPrisma().smartDevice.update({
		where: {
			id,
		},
		data: params,
	});
}

export function createSmartDevice(
	user: UserAccount,
	name: string,
	internalName: string,
	deviceId: string,
) {
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
