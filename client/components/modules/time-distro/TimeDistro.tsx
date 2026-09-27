import Empty from '@/components/common/Empty';
import SelectField from '@/components/common/inputs/SelectField';
import BarGraph from '@/components/modules/bar-graph/BarGraph';
import {useTranslation} from 'react-i18next';
import dummyData from '@/components/modules/time-distro/dummy-data';
import {FilterSolvesOptions} from '@/db/solves/query';
import {getTimeDistro} from '@/db/solves/stats/time-distro';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import jsonStr from 'json-stable-stringify';
import React, {useMemo, useState} from 'react';

const DEFAULT_BUCKET_SIZE = 10;

interface Props {
	dummy?: boolean;
	filterOptions: FilterSolvesOptions;
}

export default function TimeDistro(props: Props) {
	const {t} = useTranslation();
	const [bucketCount, setBucketCount] = useState(DEFAULT_BUCKET_SIZE);

	const {filterOptions, dummy} = props;
	const filterStr = jsonStr(filterOptions);
	const solveUpdate = useSolveDb();

	const memoData = useMemo(() => {
		return getTimeDistro(filterOptions, bucketCount);
	}, [filterStr, bucketCount, solveUpdate]);

	if (!dummy && !memoData.length) {
		return <Empty text={t('solves.noCompletedSolvesYet')} centered />;
	}

	let data = [...memoData];

	const isDummy = Boolean(dummy);
	if (isDummy) {
		data = dummyData;
	}

	const buckets = [4, 5, 6, 7, 8, 9, 10];

	return (
		<div className="group relative box-border h-full w-full transition-all duration-100 ease-in-out">
			<BarGraph className="flex" data={data} dummy={isDummy}>
				<div className="absolute top-[5px] right-[5px] z-[1000] opacity-0 transition-all duration-100 ease-in-out group-hover:opacity-100 focus-within:opacity-100">
					<SelectField
						label={t('stats.distributionColumns')}
						value={String(bucketCount)}
						onValueChange={(value) => setBucketCount(Number(value))}
						options={buckets.map((bucket) => ({
							value: String(bucket),
							text: t('timer.options.columns', {count: bucket}),
						}))}
						maxHeight={200}
					/>
				</div>
			</BarGraph>
		</div>
	);
}
