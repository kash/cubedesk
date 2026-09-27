import dayjs from 'dayjs';
import 'dayjs/locale/es';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

export function getDateFromNow(
	date: string | number | Date,
	withoutSuffix: boolean = false,
	locale = 'en',
): string {
	return dayjs(date).locale(locale).fromNow(withoutSuffix);
}

export function getFullFormattedDate(date: string | number | Date, locale = 'en') {
	return dayjs(date).locale(locale).format('LLL');
}
