import {Request, Response} from 'express';
import {getUserByEmail} from '../models/user_account';
import {logger} from '../services/logger';
import {isUserSubscribed} from '../services/mailchimp';
import {setNotificationPreference} from '../models/notification_preference';

export default async function mailchimpWebhookListener(request: Request, response: Response) {
	const eventType = request.body.type;
	const userId = request.body.data.id;
	const email = request.body.data.email;

	if (!email || !eventType) {
		return;
	}

	const user = await getUserByEmail(email);

	if (!user) {
		logger.warn(`Could not find user with MailChimp webhook event.`, {
			eventType,
			userId,
		});
		return;
	}

	// Handle the event
	switch (eventType) {
		case 'unsubscribe':
		case 'subscribe': {
			const isSubbed = await isUserSubscribed(email);
			await setNotificationPreference(user, 'marketing_emails', isSubbed);
			break;
		}
	}

	// Return a 200 response to acknowledge receipt of the event
	response.send();
}
