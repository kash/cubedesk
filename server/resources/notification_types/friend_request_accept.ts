import Notification from './notification';
import {NotificationInput} from '../../@types/interfaces/server.interface';
import {NotificationType} from '../../@types/enums';

export default class FriendRequestAcceptNotification extends Notification {
	constructor(input: NotificationInput) {
		super(input);
	}

	notificationType() {
		return NotificationType.FRIEND_REQUEST_ACCEPT;
	}

	subject() {
		return `${this.input.triggeringUser.username} accepted your friend request on CubeDesk`;
	}

	inAppMessage() {
		return `${this.input.triggeringUser.username} accepted your friend request`;
	}

	message() {
		return `Good news! ${this.input.triggeringUser.username} accepted your friend request. Click the link below to view their profile.`;
	}

	icon() {
		return 'user';
	}

	link() {
		return `${process.env.BASE_URI}/user/${this.input.triggeringUser.username}`;
	}

	linkText() {
		return `View profile →`;
	}

	categoryName() {
		return 'Friends';
	}

	customData(): object {
		return {};
	}
}
