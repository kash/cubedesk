import {v4 as uuid} from 'uuid';
import {getPrisma} from '../database';
import {Prisma} from '@prisma/client';
import {UserAccount} from '../schemas/UserAccount.schema';
import {BanLog} from '../schemas/BanLog.schema';

export async function deactivateAllBanLogs(userId: string): Promise<Prisma.BatchPayload> {
	return getPrisma().banLog.updateMany({
		where: {
			banned_user_id: userId,
		},
		data: {
			active: false,
		},
	});
}

export async function getActiveBanLogsByUserId(userId: string) {
	return getPrisma().banLog.findMany({
		where: {
			banned_user_id: userId,
			active: true,
		},
	});
}

export async function createBanLog(
	createdBy: UserAccount,
	bannedUser: UserAccount,
	reason: string,
	minutes: number,
	forever: boolean,
	banned_until: Date | string | null = null
): Promise<BanLog> {
	return getPrisma().banLog.create({
		data: {
			id: uuid(),
			created_by_id: createdBy.id,
			banned_user_id: bannedUser.id,
			reason,
			minutes,
			forever,
			banned_until,
		},
	});
}
