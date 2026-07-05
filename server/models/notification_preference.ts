import {getPrisma} from '@/server/database';
import {v4 as uuid} from 'uuid';

// Minimal shape so both the schema classes and generated Prisma rows are accepted
type UserAccount = {
	id: string;
	join_country?: string | null;
};

const GDPR_COUNTRY_CODES = [
	'AT',
	'BE',
	'BG',
	'CY',
	'CH',
	'CZ',
	'DE',
	'DK',
	'EE',
	'ES',
	'FI',
	'FR',
	'GB',
	'GR',
	'HR',
	'HU',
	'IE',
	'IS',
	'IT',
	'LI',
	'LT',
	'LU',
	'LV',
	'MT',
	'NL',
	'NO',
	'PL',
	'PT',
	'RO',
	'SE',
	'SI',
	'SK',
];

export async function getOrCreateNotificationPreferences(user: UserAccount) {
	const prefs = await getNotificationPreferences(user);
	if (!prefs) {
		return createNotificationPreference(user);
	}

	return prefs;
}

async function getNotificationPreferences(user: UserAccount) {
	return await getPrisma().notificationPreference.findUnique({
		where: {
			user_id: user.id,
		},
	});
}

export async function createNotificationPreference(user: UserAccount) {
	const id = uuid();

	let emailMarketing = true;
	const ct = user.join_country;
	if (!ct || ct === 'NONE' || GDPR_COUNTRY_CODES.includes(ct)) {
		emailMarketing = false;
	}

	return await getPrisma().notificationPreference.create({
		data: {
			id,
			user_id: user.id,
			marketing_emails: emailMarketing,
		},
	});
}

export async function setNotificationPreference(user: UserAccount, key: string, value: boolean) {
	const np = await getOrCreateNotificationPreferences(user);

	return await getPrisma().notificationPreference.update({
		where: {
			id: np.id,
		},
		data: {
			[key]: value,
		},
	});
}
