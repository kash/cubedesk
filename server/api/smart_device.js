import {checkLoggedIn} from '../util/auth';
import {
	createSmartDevice,
	deleteSmartDevice,
	getSmartDeviceById,
	getSmartDevices,
	updateSmartDevice
} from '../models/smart_device';
import GraphQLError from '../util/graphql_error';

export const gqlQuery = `
    smartDevices: [SmartDevice]
`;

export const gqlMutation = `
    addNewSmartDevice(originalName: String, deviceId: String): SmartDevice
    changeSmartDeviceName(id: String, name: String): SmartDevice
    deleteSmartDevice(id: String): SmartDevice
`;

export const queryActions = {
	smartDevices: async (_, params, {user}) => {
		checkLoggedIn(user);

		return getSmartDevices(user);
	},
};

export const mutateActions = {
	addNewSmartDevice: async (_, {originalName, deviceId}, {user}) => {
		checkLoggedIn(user);

		if (!originalName.trim()) {
			throw new GraphQLError(400, 'Invalid device name');
		}

		if (!deviceId.trim()) {
			throw new GraphQLError(400, 'Invalid device ID');
		}

		return createSmartDevice(user, originalName, originalName, deviceId);
	},

	changeSmartDeviceName: async (_, {id, name}, {user}) => {
		checkLoggedIn(user);

		const sd = await getSmartDeviceById(id);
		if (!sd || sd.user_id !== user.id) {
			throw new GraphQLError(400, 'Invalid smart device ID');
		}

		if (!name.trim()) {
			throw new GraphQLError(400, 'Invalid new name for smart device');
		}

		return updateSmartDevice(id, {
			name,
		});
	},

	deleteSmartDevice: async (_, {id}, {user}) => {
		checkLoggedIn(user);

		const sd = await getSmartDeviceById(id);
		if (!sd || sd.user_id !== user.id) {
			throw new GraphQLError(400, 'Invalid smart device ID');
		}

		await deleteSmartDevice(id)

		return sd;
	},
};
