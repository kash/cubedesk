import {getPrisma} from '../database';
import {v4 as uuid} from 'uuid';
import {UserAccount} from '../schemas/UserAccount.schema';

export async function createEmailLog(
	user: UserAccount,
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
