import Notification from './notification';
import {NotificationInput} from '../../@types/interfaces/server.interface';
import {NotificationType} from '../../@types/enums';

interface EloRefundNotificationInputData {
	eloRefunded: number;
	numberOfGames: number;
}

export default class EloRefundNotification extends Notification {
	eloData: EloRefundNotificationInputData;

	constructor(input: NotificationInput, data: EloRefundNotificationInputData) {
		super(input);
		this.eloData = data;
	}

	notificationType() {
		return NotificationType.ELO_REFUND;
	}

	subject() {
		const refunded = this.eloData.eloRefunded.toLocaleString();
		return `${refunded} ELO refunded to your CubeDesk account`;
	}

	inAppMessage() {
		const refunded = this.eloData.eloRefunded.toLocaleString();
		return `${refunded} ELO refunded to your CubeDesk account`;
	}

	message() {
		const refunded = this.eloData.eloRefunded.toLocaleString();
		const games = this.eloData.numberOfGames;
		const gamesLocale = `${games} game${games === 1 ? '' : 's'}`;
		const cheater = this.input.triggeringUser.username;
		return `You were refunded ${refunded} ELO for losing ${gamesLocale} to ${cheater}, who was cheating.`;
	}

	icon() {
		return 'ph-sword';
	}

	link() {
		return `${process.env.BASE_URI}/user/${this.input.user.username}`;
	}

	linkText() {
		return `View your profile →`;
	}

	categoryName() {
		return '1v1';
	}

	customData(): object {
		return this.eloData;
	}
}
