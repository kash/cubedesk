'use client';

import React, {useState, useEffect} from 'react';
import PublicTrainer from '../../../components/trainer/public_custom_trainers/public_trainer/PublicTrainer';
import Pagination, {PaginationTab} from '../../../components/common/pagination/Pagination';
import block from '../../../styles/bem';
import PublicTrainerHeader from '../../../components/trainer/public_custom_trainers/public_trainer_header/PublicTrainerHeader';
import {api} from '@/trpc/react';
import {CustomTrainer} from '@/generated/zod';

const b = block('community__custom-trainers');

// Define custom tabs that work with tRPC
const tabs: PaginationTab[] = [
	{
		id: 'trainers',
		value: 'Trainers',
		dataQueryName: 'publicCustomTrainers',
		plural: 'trainers',
		// These are not needed for tRPC but kept for compatibility
		queryFragment: '',
		queryFragmentName: '',
	},
];

export default function PublicTrainersPage() {
	const [likedIds, setLikedIds] = useState<string[]>([]);
	const [downloadIds, setDownloadIds] = useState<string[]>([]);

	// Use tRPC queries
	const {data: likesData} = api.customTrainerLike.list.useQuery();
	const {data: downloadsData} = api.customTrainerDownload.list.useQuery();

	useEffect(() => {
		if (likesData) {
			setLikedIds(likesData.map((like) => like.custom_trainer_id));
		}
	}, [likesData]);

	useEffect(() => {
		if (downloadsData) {
			setDownloadIds(downloadsData.map((download) => download.source_trainer_id));
		}
	}, [downloadsData]);

	// Custom fetch function for pagination component
	const fetchTrainers = async (params: {take: number; skip: number}) => {
		const result = await api.customTrainer.getPublic.fetch(params);
		return result;
	};

	return (
		<div className={b()}>
			<PublicTrainerHeader />
			<Pagination
				tabs={tabs}
				customFetchData={fetchTrainers}
				itemRow={(data: CustomTrainer) => (
					<PublicTrainer
						key={data.id}
						downloadedByUser={downloadIds.includes(data.id)}
						likedByUser={likedIds.includes(data.id)}
						trainer={data}
					/>
				)}
			/>
		</div>
	);
}