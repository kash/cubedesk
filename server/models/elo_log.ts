import {Prisma} from '@/generated/prisma/client';
import {EloLog} from '@/types/elo';
import {UserAccount} from '@/types/user';
import {getPrisma} from '@/server/database';
import EloRefundNotification from '@/server/resources/notification_types/elo_refund';
import {logger} from '@/server/services/logger';
import {getEloRatingColumnNameFromCubeType} from '@/server/models/elo_rating';
import {getUserById} from '@/server/models/user_account';

export function createEloLog(input: Prisma.EloLogUncheckedCreateInput) {
	return getPrisma().eloLog.create({
		data: input,
	});
}

export async function refundElo(cheaterUserId: string) {
	const txs: Prisma.PrismaPromise<unknown>[] = [];

	const cheater = await getUserById(cheaterUserId);
	if (!cheater) {
		return;
	}

	const eloLogs = await getAllEloLogsOfOpponentId(cheaterUserId);
	const validEloLogs: EloLog[] = [];

	for (const log of eloLogs) {
		const cubeType = log.cube_type;
		const eloRatingColumn = getEloRatingColumnNameFromCubeType(cubeType);

		if (log.elo_change > 0 || log.refunded_at) {
			continue;
		}

		const eloLogTx = getPrisma().eloLog.update({
			where: {id: log.id},
			data: {
				refunded_at: new Date(),
			},
		});

		const eloRatingTx = getPrisma().eloRating.update({
			where: {
				user_id: log.player_id,
			},
			data: {
				[eloRatingColumn]: {
					increment: Math.abs(log.elo_change),
				},
			},
		});

		txs.push(eloLogTx);
		txs.push(eloRatingTx);

		validEloLogs.push(log);
	}

	try {
		await getPrisma().$transaction(txs);
	} catch (e) {
		logger.error('Could not refund ELO', {
			error: e,
		});
		return;
	}

	await notifyVictimsOfEloRefund(cheater, validEloLogs);
}

async function notifyVictimsOfEloRefund(cheater: UserAccount, eloLogs: EloLog[]) {
	const victimMap = {};
	for (const eloLog of eloLogs) {
		if (!victimMap[eloLog.player_id]) {
			victimMap[eloLog.player_id] = {
				eloRefunded: 0,
				numberOfGames: 0,
				user: eloLog.player,
			};
		}

		victimMap[eloLog.player_id].eloRefunded += Math.abs(eloLog.elo_change);
		victimMap[eloLog.player_id].numberOfGames++;
	}

	const notifs: Promise<unknown>[] = [];

	for (const victimId of Object.keys(victimMap)) {
		const victimData = victimMap[victimId];

		const notification = new EloRefundNotification(
			{
				user: victimData.user,
				triggeringUser: cheater,
				sendEmail: true,
			},
			{
				eloRefunded: victimData.eloRefunded,
				numberOfGames: victimData.numberOfGames,
			}
		);

		notifs.push(notification.send());
	}

	await Promise.all(notifs);
}

function getAllEloLogsOfOpponentId(opponentId: string) {
	return getPrisma().eloLog.findMany({
		where: {
			opponent_id: opponentId,
		},
		include: {
			player: true,
		},
	});
}
