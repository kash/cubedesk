import React, {useState} from 'react';
import {ThumbsDown, ThumbsUp, Download} from 'phosphor-react';
import AlgoVisual from '@/components/trainer/AlgoVisual';
import {gql} from '@apollo/client';
import {gqlMutate} from '@/components/api';
import {toastError, toastSuccess} from '@/util/toast';
import {useSelector} from 'react-redux';
import Avatar from '@/components/common/avatar/Avatar';
import {CustomTrainer} from '@/@types/generated/graphql';
import Button from '@/components/common/button/Button';

interface Props {
	downloadedByUser: boolean;
	likedByUser: boolean;
	trainer: CustomTrainer;
}

export default function PublicTrainer(props: Props) {
	const {
		id,
		colors,
		description,
		key,
		user_id: userId,
		cube_type: cubeType,
		solution,
		name,
		user,
		like_count: likeCount,
	} = props.trainer;

	const me = useSelector((store: any) => store.account.me);
	const [likes, setLikes] = useState(likeCount);
	const [liked, setLiked] = useState(props.likedByUser);
	const [downloaded, setDownloaded] = useState(props.downloadedByUser);
	const trainerOwnedByUser = me.id === userId;

	const downloadedFinal = downloaded || props.downloadedByUser;

	function likeTrainer() {
		let query;
		if (liked) {
			query = gql`
				mutation Mutation($customTrainerId: String!) {
					unlikeCustomTrainer(customTrainerId: $customTrainerId) {
						id
					}
				}
			`;
			setLikes(likes - 1);
		} else {
			query = gql`
				mutation Mutation($customTrainerId: String!) {
					likeCustomTrainer(customTrainerId: $customTrainerId) {
						id
					}
				}
			`;
			setLikes(likes + 1);
		}
		``;

		gqlMutate(query, {
			customTrainerId: id,
		});

		setLiked(!liked);
	}

	async function downloadTrainer() {
		if (downloadedFinal) {
			return;
		}

		const query = gql`
			mutation Mutation($sourceId: String!) {
				downloadCustomTrainer(sourceId: $sourceId) {
					id
				}
			}
		`;

		try {
			await gqlMutate(query, {
				sourceId: id,
			});

			setDownloaded(true);
			toastSuccess('Successfully downloaded trainer. You can find it under your Trainer -> Custom Trainer');
		} catch (e) {
			console.error(e);

			toastError(e.message);
		}
	}

	return (
		<div className="relative mb-[15px] box-border w-full gap-2.5 rounded border-2 border-button bg-module p-[15px]">
			<div className="grid w-full grid-cols-[130px_1fr]">
				<div className="flex items-start justify-center">
					<AlgoVisual zoom={0.8} colors={colors} cubeType={cubeType} />
				</div>
				<div>
					<div className="mb-2.5 border-b-2 border-button pb-2.5">
						<h3>{name}</h3>
						{description ? <p className="mb-0">{description}</p> : null}
						<div className="mt-2.5">
							<Avatar tiny user={user} />
						</div>
					</div>
					<div>
						<p className="mb-0">{solution}</p>
					</div>
				</div>
			</div>
			<div className="mt-5 flex flex-row flex-wrap gap-2.5">
				<Button
					icon={liked ? <ThumbsUp /> : <ThumbsDown />}
					onClick={likeTrainer}
					text={`${likes} Like${likes === 1 ? '' : 's'}`}
					gray
					primary={liked}
				/>
				<Button
					icon={<Download weight="bold" />}
					text={downloadedFinal ? 'Downloaded' : 'Download'}
					disabled={downloadedFinal}
					hidden={trainerOwnedByUser}
					onClick={downloadTrainer}
				/>
			</div>
		</div>
	);
}
