import jsonStr from 'json-stable-stringify';
import React, {useMemo} from 'react';
import {fetchSolves, FilterSolvesOptions} from '@/db/solves/query';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import {getBasicPlural} from '@/util/strings/plural';
import BulkChangeEventSolvesButton from '@/components/solves/bulk-actions/actions/BulkChangeEvent';
import BulkDeleteSolvesButton from '@/components/solves/bulk-actions/actions/BulkDelete';
import BulkDnfSolvesButton from '@/components/solves/bulk-actions/actions/BulkDnf';
import BulkMoveSolvesButton from '@/components/solves/bulk-actions/actions/BulkMove';
import BulkOkSolvesButton from '@/components/solves/bulk-actions/actions/BulkOk';
import BulkPlusTwoSolvesButton from '@/components/solves/bulk-actions/actions/BulkPlusTwo';

interface Props {
	filter: FilterSolvesOptions;
}

export default function BulkActions(props: Props) {
	const {filter} = props;

	const solveDbCount = useSolveDb();

	const solves = useMemo(() => fetchSolves(filter), [jsonStr(filter), solveDbCount]);
	const disabled = solves.length === 0;

	return (
		<div className="border-button/90 relative z-10 rounded border-4 border-solid p-4">
			<div className="relative mb-2 flex flex-col items-start">
				<span className="text-text/70 table">
					Bulk action on {getBasicPlural(solves.length, 'solve')}
				</span>
			</div>
			<div className="mt-3 flex flex-row flex-wrap gap-2">
				<BulkDeleteSolvesButton solves={solves} disabled={disabled} />
				<BulkMoveSolvesButton solves={solves} disabled={disabled} />
				<BulkChangeEventSolvesButton solves={solves} disabled={disabled} />
				<BulkPlusTwoSolvesButton solves={solves} disabled={disabled} />
				<BulkDnfSolvesButton solves={solves} disabled={disabled} />
				<BulkOkSolvesButton solves={solves} disabled={disabled} />
			</div>
		</div>
	);
}
