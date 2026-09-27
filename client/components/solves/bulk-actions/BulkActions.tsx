import {useTranslation} from 'react-i18next';
import BulkChangeEventSolvesButton from '@/components/solves/bulk-actions/actions/BulkChangeEvent';
import BulkDeleteSolvesButton from '@/components/solves/bulk-actions/actions/BulkDelete';
import BulkDnfSolvesButton from '@/components/solves/bulk-actions/actions/BulkDnf';
import BulkMoveSolvesButton from '@/components/solves/bulk-actions/actions/BulkMove';
import BulkOkSolvesButton from '@/components/solves/bulk-actions/actions/BulkOk';
import BulkPlusTwoSolvesButton from '@/components/solves/bulk-actions/actions/BulkPlusTwo';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent, DialogHeader, DialogTrigger} from '@/components/ui/dialog';
import {fetchSolves, FilterSolvesOptions} from '@/db/solves/query';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import jsonStr from 'json-stable-stringify';
import React, {useMemo} from 'react';

interface Props {
	filter: FilterSolvesOptions;
}

export default function BulkActions(props: Props) {
	const {t} = useTranslation();
	const {filter} = props;

	const solveDbCount = useSolveDb();

	const solves = useMemo(() => fetchSolves(filter), [jsonStr(filter), solveDbCount]);
	const disabled = solves.length === 0;

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline" disabled={disabled}>
					{t('common.bulkActions')}
				</Button>
			</DialogTrigger>
			<DialogContent closeLabel={t('common.closeDialog')} width={420}>
				<DialogHeader
					title={t('common.bulkActions')}
					description={t('solves.bulk.applyToSolves', {count: solves.length})}
				/>
				<div className="grid grid-cols-2 gap-2">
					<BulkDeleteSolvesButton solves={solves} disabled={disabled} />
					<BulkMoveSolvesButton solves={solves} disabled={disabled} />
					<BulkChangeEventSolvesButton solves={solves} disabled={disabled} />
					<BulkPlusTwoSolvesButton solves={solves} disabled={disabled} />
					<BulkDnfSolvesButton solves={solves} disabled={disabled} />
					<BulkOkSolvesButton solves={solves} disabled={disabled} />
				</div>
			</DialogContent>
		</Dialog>
	);
}
