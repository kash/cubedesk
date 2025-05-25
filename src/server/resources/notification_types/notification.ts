import {NotificationData, NotificationInput} from '../../@types/interfaces/server.interface';
import {getPrisma} from '../../database';
import {getOrCreateNotificationPreferences} from '../../models/notification_preference';
import {sendEmailWithTemplate} from '../../services/ses';
import {NotificationType} from '../../@types/enums';

export default abstract class Notification {
	input: NotificationInput;

	protected constructor(input: NotificationInput) {
		this.input = input;
	}

	abstract notificationType(): NotificationType;
	abstract subject(): string;
	abstract inAppMessage(): string;
	abstract message(): string;
	abstract icon(): string;
	abstract link(): string;
	abstract linkText(): string;
	abstract categoryName(): string;
	abstract customData(): object;

	data(): NotificationData {
		return {
			subject: this.subject(),
			inAppMessage: this.inAppMessage(),
			message: this.message(),
			icon: this.icon(),
			link: this.link(),
			categoryName: this.categoryName(),
			linkText: this.linkText(),
			data: this.customData(),
		};
	}

	async send() {
		const notificationType = this.notificationType();

		if (this.input.sendEmail) {
			const prefs = await getOrCreateNotificationPreferences(this.input.user);

			if (prefs[notificationType]) {
				await sendEmailWithTemplate(this.input.user, this.subject(), 'notification', this.data());
			}
		}

		return getPrisma().notification.create({
			data: {
				user_id: this.input.user.id,
				message: this.message(),
				in_app_message: this.inAppMessage(),
				triggering_user_id: this.input.triggeringUser.id,
				notification_type: notificationType,
				notification_category_name: this.categoryName(),
				link: this.link(),
				link_text: this.linkText(),
				subject: this.subject(),
				icon: this.icon(),
			},
		});
	}
}
