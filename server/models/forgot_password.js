import {v4 as uuid} from 'uuid';
import {getPrisma} from '../database';
import {generateRandomCode} from '../../shared/code';

export function getForgotPassword(user) {
	return getPrisma().forgotPassword.findMany({
		where: {
			user_id: user.id,
		},
		orderBy: {
			created_at: 'desc',
		},
		take: 1,
	});
}

export function createForgotPassword(user) {
	return getPrisma().forgotPassword.create({
		data: {
			id: uuid(),
			user_id: user.id,
			code: generateRandomCode(6),
		},
	});
}

export function claimForgotPassword(forgotPassword) {
	return getPrisma().forgotPassword.update({
		where: {
			id: forgotPassword.id,
		},
		data: {
			claimed: true,
		},
	});
}
