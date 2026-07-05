import {EmailableUser} from '@/types/user';
import {v4 as uuid} from 'uuid';
import {getPrisma} from '../database';

export async function createEmailLog(
	user: EmailableUser,
	subject: string,
	template: string,
	vars: {[key: string]: string}
) {
	return getPrisma().emailLog.create({
		data: {
			id: uuid(),
			user_id: user.id,
			email: user.email,
			subject,
			template,
			vars: JSON.stringify(vars || {}),
		},
	});
}
