import {getPrisma} from '../database';
import {Prisma} from '@prisma/client';
import {getEloRatingColumnNameFromCubeType} from './elo_rating';
import {logger} from '../services/logger';
import {UserAccount} from '../schemas/UserAccount.schema';
import {getUserById} from './user_account';
import EloRefundNotification from '../resources/notification_types/elo_refund';
import {EloLog} from '../schemas/EloLog.schema';

export function createEloLog(input: Prisma.EloLogUncheckedCreateInput) {
	return getPrisma().eloLog.create({
		data: input,
	});
}

export async function refundElo(cheaterUserId: string) {
	const txs = [];

	const cheater = await getUserById(cheaterUserId);
	const eloLogs = await getAllEloLogsOfOpponentId(cheaterUserId);
	const validEloLogs = [];

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

	const notifs = [];

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
