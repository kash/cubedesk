import Avatar from '@/components/common/avatar/Avatar';
import Button from '@/components/common/Button';
import AlgoVisual from '@/components/trainer/AlgoVisual';
import {Serialized} from '@/types/serialized';
import {CustomTrainerWithUser} from '@/types/trainer';
import {toastError, toastSuccess} from '@/util/toast';
import {trpc} from '@/util/trpc';
import {Download, ThumbsDown, ThumbsUp} from 'phosphor-react';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

interface Props {
	downloadedByUser: boolean;
	likedByUser: boolean;
	trainer: Serialized<CustomTrainerWithUser>;
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
		if (liked) {
			setLikes(likes - 1);
			trpc.customTrainer.unlike.mutate({
				customTrainerId: id!,
			});
		} else {
			setLikes(likes + 1);
			trpc.customTrainer.like.mutate({
				customTrainerId: id!,
			});
		}

		setLiked(!liked);
	}

	async function downloadTrainer() {
		if (downloadedFinal) {
			return;
		}

		try {
			await trpc.customTrainer.download.mutate({
				sourceId: id!,
			});

			setDownloaded(true);
			toastSuccess(
				'Successfully downloaded trainer. You can find it under your Trainer -> Custom Trainer',
			);
		} catch (e) {
			console.error(e);

			toastError(e instanceof Error ? e.message : 'Could not download trainer');
		}
	}

	return (
		<div className="border-button bg-module relative mb-[15px] box-border w-full gap-2.5 rounded border-2 p-[15px]">
			<div className="grid w-full grid-cols-[130px_1fr]">
				<div className="flex items-start justify-center">
					<AlgoVisual zoom={0.8} colors={colors ?? undefined} cubeType={cubeType} />
				</div>
				<div>
					<div className="border-button mb-2.5 border-b-2 pb-2.5">
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
