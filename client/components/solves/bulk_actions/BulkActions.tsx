import React, {useMemo} from 'react';
import Tag from '../../common/tag/Tag';
import {getBasicPlural} from '../../../util/strings/plural';
import BulkDeleteSolvesButton from './actions/BulkDelete';
import BulkMoveSolvesButton from './actions/BulkMove';
import BulkOkSolvesButton from './actions/BulkOk';
import BulkChangeEventSolvesButton from './actions/BulkChangeEvent';
import BulkPlusTwoSolvesButton from './actions/BulkPlusTwo';
import BulkDnfSolvesButton from './actions/BulkDnf';
import {fetchSolves, FilterSolvesOptions} from '../../../db/solves/query';
import jsonStr from 'json-stable-stringify';
import {useSolveDb} from '../../../util/hooks/useSolveDb';

interface Props {
	filter: FilterSolvesOptions;
}

export default function BulkActions(props: Props) {
	const {filter} = props;

	const solveDbCount = useSolveDb();

	const solves = useMemo(() => fetchSolves(filter), [jsonStr(filter), solveDbCount]);
	const disabled = solves.length === 0;

	return (
		<div className="border-4 p-4 border-solid rounded border-button/90 relative z-10">
			<div className="flex relative flex-col items-start mb-2">
				<div className="absolute top-0 right-0">
					<Tag backgroundColor="primary" text="Pro Feature" />
				</div>
				<span className="table text-text/70">Bulk action on {getBasicPlural(solves.length, 'solve')}</span>
			</div>
			<div className="flex flex-row flex-wrap gap-2 mt-3">
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
