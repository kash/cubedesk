import React, {useState} from 'react';
import './PublicTrainer.scss';
import {ThumbsDown, ThumbsUp, Download} from '@phosphor-icons/react';
import AlgoVisual from '../../algo_visual/AlgoVisual';
import {gql} from '@apollo/client';
import {gqlMutate} from '../../../api';
import {toastError, toastSuccess} from '../../../../util/toast';
import {useSelector} from 'react-redux';
import Avatar from '../../../common/avatar/Avatar';
import {CustomTrainer} from '../../../../@types/generated/graphql';
import block from '../../../../styles/bem';
import Button from '../../../common/button/Button';

const b = block('public-trainer');

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
		<div className={b()}>
			<div className={b('top')}>
				<div className={b('cube')}>
					<AlgoVisual zoom={0.8} colors={colors} cubeType={cubeType} />
				</div>
				<div className={b('body')}>
					<div className={b('info')}>
						<h3>{name}</h3>
						{description ? <p>{description}</p> : null}
						<div className={b('avi')}>
							<Avatar tiny user={user} />
						</div>
					</div>
					<div className={b('solution')}>
						<p>{solution}</p>
					</div>
				</div>
			</div>
			<div className={b('actions')}>
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
