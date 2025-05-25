import {v4 as uuid} from 'uuid';
import {getPrisma} from '../database';

export function createCustomCubeType(input, user) {
	return getPrisma().customCubeType.create({
		data: {
			...input,
			id: uuid(),
			user_id: user.id
		}
	})
}

export function getCustomCubeType(id) {
	return getPrisma().customCubeType.findUnique({
		where: {
			id,
		},
	});
}

export function updateCustomCubeType(id, input) {
	return getPrisma().customCubeType.update({
		where: {
			id,
		},
		data: {
			...input,
			id,
		},
	});
}

export function deleteCustomCubeType(id) {
	return getPrisma().customCubeType.delete({
		where: {
			id: id,
		},
	});
}
