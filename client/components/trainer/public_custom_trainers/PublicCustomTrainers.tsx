import React, {useState} from 'react';
import {gql} from '@apollo/client';
import {gqlQuery} from '../../api';
import PublicTrainer from './public_trainer/PublicTrainer';
import Pagination, {PaginationTab} from '../../common/pagination/Pagination';
import {CustomTrainerDownload, CustomTrainerLike} from '../../../@types/generated/graphql';
import {PUBLIC_CUSTOM_TRAINER_RECORD_FRAGMENT} from '../../../util/graphql/fragments';
import block from '../../../styles/bem';
import PublicTrainerHeader from './public_trainer_header/PublicTrainerHeader';

const b = block('community__custom-trainers');

const tabs: PaginationTab[] = [
	{
		id: 'trainers',
		value: 'Trainers',
		dataQueryName: 'publicCustomTrainers',
		queryFragment: PUBLIC_CUSTOM_TRAINER_RECORD_FRAGMENT,
		queryFragmentName: 'PublicCustomTrainerRecordFragment',
		plural: 'trainers',
	},
];

export default function PublicCustomTrainers() {
	const [likedIds, setLikedIds] = useState([]);
	const [downloadIds, setDownloadIds] = useState([]);

	async function prefetchData() {
		const likesQuery = gql`
			query Query {
				customTrainerLikes {
					custom_trainer_id
				}
			}
		`;

		const {data: likesData} = await gqlQuery<{customTrainerLikes: CustomTrainerLike[]}>(likesQuery);
		setLikedIds(likesData.customTrainerLikes.map((like) => like.custom_trainer_id));

		const downloadsQuery = gql`
			query Query {
				customTrainerDownloads {
					source_trainer_id
				}
			}
		`;

		const {data: downloadsData} = await gqlQuery<{customTrainerDownloads: CustomTrainerDownload[]}>(downloadsQuery);
		setDownloadIds(downloadsData.customTrainerDownloads.map((download) => download.source_trainer_id));
	}

	return (
		<div className={b()}>
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
