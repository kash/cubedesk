import type {ForgotPassword, UserAccount} from '@/generated/prisma/client';
import {v4 as uuid} from 'uuid';
import {generateRandomCode} from '@/shared/code';
import {getPrisma} from '@/server/database';

export function getForgotPassword(user: UserAccount) {
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

export function createForgotPassword(user: UserAccount) {
	return getPrisma().forgotPassword.create({
		data: {
			id: uuid(),
			user_id: user.id,
			code: generateRandomCode(6),
		},
	});
}

export function claimForgotPassword(forgotPassword: ForgotPassword) {
	return getPrisma().forgotPassword.update({
		where: {
			id: forgotPassword.id,
		},
		data: {
			claimed: true,
		},
	});
}
