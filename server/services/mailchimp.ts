import mailchimp from '@mailchimp/mailchimp_marketing';
import crypto from 'crypto';
import {logger} from './logger';
import {getNotificationPreferences, setNotificationPreference} from '../models/notification_preference';
import {getUserByEmail} from '../models/user_account';

const MAILCHIMP_CUBEDESK_LIST_ID = 'c197307a99';

export function initMailChimp() {
	mailchimp.setConfig({
		apiKey: process.env.MAILCHIMP_API_KEY,
		server: 'us8',
	});
}

export async function updateEmailListStatus(email: string, status: 'subscribed' | 'unsubscribed') {
	if (!process.env.MAILCHIMP_API_KEY) {
		return true;
	}

	try {
		const hash = getSubscriberHash(email);

		await mailchimp.lists.setListMember(MAILCHIMP_CUBEDESK_LIST_ID, hash, {
			email_address: email,
			status,
			status_if_new: status,
		});

		logger.debug('Updated mailing list status for user.', {
			hash,
			status,
		});
		return true;
	} catch (e) {
		logger.error('Could not unsubscribe email from list', {
			error: e,
		});
		return false;
	}
}

export async function syncUserMarketingEmailsStatus(email: string) {
	const user = await getUserByEmail(email);
	if (!user) {
		return;
	}

	const unsubbed = await isUserUnsubbed(email);
	const prefs = await getNotificationPreferences(user);

	if (prefs.marketing_emails && unsubbed) {
		await setNotificationPreference(user, 'marketing_emails', false);
	}
}

export async function isUserUnsubbed(email: string) {
	const hash = getSubscriberHash(email);

	try {
		const res = await mailchimp.lists.getListMember(MAILCHIMP_CUBEDESK_LIST_ID, hash);
		return res.status === 'unsubscribed';
	} catch (e) {
		return false;
	}
}

export async function isUserSubscribed(email: string) {
	const hash = getSubscriberHash(email);

	try {
		const res = await mailchimp.lists.getListMember(MAILCHIMP_CUBEDESK_LIST_ID, hash);
		return res.status === 'subscribed';
	} catch (e) {
		return false;
	}
}

function getSubscriberHash(email: string) {
	return crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
}
