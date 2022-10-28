import Notification from './notification';
import {NotificationInput} from '../../@types/interfaces/server.interface';
import {NotificationType} from '../../@types/enums';

export default class FriendRequestNotification extends Notification {
	constructor(input: NotificationInput) {
		super(input);
	}

	notificationType() {
		return NotificationType.FRIEND_REQUEST;
	}

	subject() {
		return `${this.input.triggeringUser.username} sent you a friend request on CubeDesk`;
	}

	inAppMessage() {
		return `${this.input.triggeringUser.username} sent you a friend request`;
	}

	message() {
		return `You have a new friend request from ${this.input.triggeringUser.username}. Click the link below to view their profile and accept the friend request.`;
	}

	icon() {
		return 'ph-user-bold';
	}

	link() {
		return `${process.env.BASE_URI}/user/${this.input.triggeringUser.username}`;
	}

	linkText() {
		return `View friend request →`;
	}

	categoryName() {
		return 'Friends';
	}

	customData(): object {
		return {};
	}
}
