import type {ListLabels} from '@/components/common/PaginatedList';
import {useTranslation} from 'react-i18next';

export function useListLabels(empty = ''): ListLabels {
	const {t, i18n} = useTranslation();
	const formatNumber = (value: number) => new Intl.NumberFormat(i18n.language).format(value);

	return {
		loading: t('common.list.loading'),
		error: t('common.list.error'),
		retry: t('common.list.retry'),
		empty,
		previous: t('common.previous'),
		next: t('common.next'),
		results: (count, query) =>
			t(query ? 'common.list.resultsFor' : 'common.list.results', {
				count,
				formattedCount: formatNumber(count),
				query,
			}),
		page: (current, total) =>
			t('common.pageOf', {page: formatNumber(current), total: formatNumber(total)}),
	};
}
