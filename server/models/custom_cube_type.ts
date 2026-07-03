import {getPrisma} from '../database';

export function getCustomCubeTypesByUserId(userId: string) {
	return getPrisma().customCubeType.findMany({
		where: {
			user_id: userId,
		},
	});
}
