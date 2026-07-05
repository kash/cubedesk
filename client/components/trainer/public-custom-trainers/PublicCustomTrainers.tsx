import Pagination, {PaginationTab} from '@/components/common/Pagination';
import PublicTrainer from '@/components/trainer/public-custom-trainers/PublicTrainer';
import PublicTrainerHeader from '@/components/trainer/public-custom-trainers/PublicTrainerHeader';
import {trpc} from '@/util/trpc';
import React, {useState} from 'react';

const tabs: PaginationTab[] = [
	{
		id: 'trainers',
		value: 'Trainers',
		fetchData: (args) => trpc.customTrainer.searchPublic.query(args),
		plural: 'trainers',
	},
];

export default function PublicCustomTrainers() {
	const [likedIds, setLikedIds] = useState<string[]>([]);
	const [downloadIds, setDownloadIds] = useState<string[]>([]);

	async function prefetchData() {
		const likes = await trpc.customTrainer.listLikes.query();
		setLikedIds(likes.map((like) => like.custom_trainer_id));

		const downloads = await trpc.customTrainer.listDownloads.query();
		setDownloadIds(downloads.map((download) => download.source_trainer_id));
	}

	return (
		<div>
			<PublicTrainerHeader />
			<Pagination
				tabs={tabs}
				prefetchData={prefetchData}
				itemRow={(data) => (
					<PublicTrainer
						key={data.id}
						downloadedByUser={downloadIds.indexOf(data.id) > -1}
						likedByUser={likedIds.indexOf(data.id) > -1}
						trainer={data}
					/>
				)}
			/>
		</div>
	);
}
