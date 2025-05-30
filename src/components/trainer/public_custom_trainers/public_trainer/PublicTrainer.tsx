import Avatar from '@/components/common/avatar/Avatar';
import './PublicTrainer.scss';
import AlgoVisual from '@/components/trainer/algo_visual/AlgoVisual';
import {Button} from '@/components/ui/button';
import {CustomTrainer} from '@/generated/zod';
import {toastError, toastSuccess} from '@/lib/util/toast';
import block from '@/styles/bem';
import {api} from '@/trpc/react';
import {Download, ThumbsDown, ThumbsUp} from '@phosphor-icons/react/dist/ssr';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

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

	// Get the tRPC mutations
	const likeMutation = api.customTrainerLike.create.useMutation();
	const unlikeMutation = api.customTrainerLike.delete.useMutation();
	const downloadMutation = api.customTrainerDownload.create.useMutation();

	async function likeTrainer() {
		if (liked) {
			// Unlike the trainer
			try {
				await unlikeMutation.mutateAsync({
					trainerId: id,
				});
				setLikes(likes - 1);
				setLiked(false);
			} catch (error) {
				console.error('Error unliking trainer:', error);
				toastError('Failed to unlike trainer');
			}
		} else {
			// Like the trainer
			try {
				await likeMutation.mutateAsync({
					tainerId: id,
					creator_id: userId,
				});
				setLikes(likes + 1);
				setLiked(true);
			} catch (error) {
				console.error('Error liking trainer:', error);
				toastError('Failed to like trainer');
			}
		}
	}

	async function downloadTrainer() {
		if (downloadedFinal) {
			return;
		}

		try {
			await downloadMutation.mutateAsync({
				sourceId: id,
				creator_id: userId,
			});

			setDownloaded(true);
			toastSuccess(
				'Successfully downloaded trainer. You can find it under your Trainer -> Custom Trainer',
			);
		} catch (e: unknown) {
			console.error(e);
			toastError('Failed to download trainer');
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
				<Button onClick={likeTrainer} variant={liked ? 'default' : 'secondary'}>
					{liked ? <ThumbsUp className="mr-2" /> : <ThumbsDown className="mr-2" />}
					{`${likes} Like${likes === 1 ? '' : 's'}`}
				</Button>
				{!trainerOwnedByUser && (
					<Button disabled={downloadedFinal} onClick={downloadTrainer} variant="default">
						<Download weight="bold" className="mr-2" />
						{downloadedFinal ? 'Downloaded' : 'Download'}
					</Button>
				)}
			</div>
		</div>
	);
}
