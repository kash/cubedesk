import React, {useMemo, useState} from 'react';
import './TimeDistro.scss';
import {CaretDown} from 'phosphor-react';
import {FilterSolvesOptions} from '../../../db/solves/query';
import jsonStr from 'json-stable-stringify';
import {useSolveDb} from '../../../util/hooks/useSolveDb';
import {getTimeDistro} from '../../../db/solves/stats/time_distro';
import block from '../../../styles/bem';
import Dropdown from '../../common/inputs/dropdown/Dropdown';
import BarGraph from '../bar_graph/BarGraph';
import dummyData from './dummy_data';

const b = block('time-distro');

const DEFAULT_BUCKET_SIZE = 10;

interface Props {
	dummy?: boolean;
	filterOptions: FilterSolvesOptions;
}

export default function TimeDistro(props: Props) {
	const [bucketCount, setBucketCount] = useState(DEFAULT_BUCKET_SIZE);

	const {filterOptions, dummy} = props;
	const filterStr = jsonStr(filterOptions);
	const solveUpdate = useSolveDb();

	const memoData = useMemo(() => {
		return getTimeDistro(filterOptions, bucketCount);
	}, [filterStr, bucketCount, solveUpdate]);

	let data = [...memoData];

	const isDummy = dummy || !data || !data.length;
	if (isDummy) {
		data = dummyData;
	}

	const buckets = [4, 5, 6, 7, 8, 9, 10];

	return (
		<div className={b()}>
			<BarGraph data={data} dummy={isDummy}>
				<div className={b('buckets')}>
					<Dropdown
						text={`${bucketCount} Columns`}
						icon={<CaretDown />}
						dropdownMaxHeight={150}
						options={buckets.map((bucket) => ({
							value: bucket,
							text: `${bucket} columns`,
							disabled: bucket === bucketCount,
							onClick: () => setBucketCount(bucket),
						}))}
					/>
				</div>
			</BarGraph>
		</div>
	);
}
