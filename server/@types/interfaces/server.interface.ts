import {EmailableUser} from '@/types/user';
import {NotificationType} from '../enums';

export interface NotificationData {
	subject: string;
	inAppMessage: string;
	message: string;
	icon: string;
	link: string;
	linkText: string;
	categoryName: string;
	data: object;
}

export interface NotificationInput {
	triggeringUser: EmailableUser;
	user: EmailableUser;
	sendEmail: boolean;
}
