import Pagination, {PaginationTab} from '@/components/common/Pagination';
import PublicTrainer from '@/components/trainer/public-custom-trainers/PublicTrainer';
import PublicTrainerHeader from '@/components/trainer/public-custom-trainers/PublicTrainerHeader';
import {trpc} from '@/util/trpc';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useListLabels} from '@/i18n/useListLabels';

const tabs: Omit<PaginationTab, 'value' | 'emptyText'>[] = [
	{
		id: 'trainers',
		fetchData: (args) => trpc.customTrainer.searchPublic.query(args),
	},
];

export default function PublicCustomTrainers() {
	const {t} = useTranslation();
	const labels = useListLabels();
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
				tabs={tabs.map((tab) => ({
					...tab,
					value: t('trainer.publicTrainers'),
					emptyText: t('trainer.noPublicTrainers'),
				}))}
				labels={labels}
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
