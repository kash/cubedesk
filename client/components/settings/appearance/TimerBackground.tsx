import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {gql} from '@apollo/client';
import {gqlMutate} from '@/components/api';
import {getMe} from '@/actions/account';
import UploadCover from '@/components/common/upload_cover/UploadCover';
import {useMe} from '@/util/hooks/useMe';
import {getStorageURL} from '@/util/storage';
import Button from '@/components/common/button/Button';
import {TimerBackground as TimerBackgroundSchema} from '@/@types/generated/graphql';

export default function TimerBackground() {
	const dispatch = useDispatch();
	const me = useMe();

	const [loading, setLoading] = useState(false);
	const [image, setImage] = useState<string>(getStorageURL(me?.timer_background?.storage_path || '') || '');

	async function uploadTimerBackground(variables: {file: any}) {
		const query = gql`
			mutation Mutate($file: Upload) {
				uploadTimerBackground(file: $file) {
					id
					storage_path
				}
			}
		`;

		const res = await gqlMutate(query, variables);
		const storagePath = ((res.data as any)?.uploadTimerBackground as TimerBackgroundSchema)?.storage_path || '';
		const url = getStorageURL(storagePath) || '';

		setImage(url);
		dispatch(getMe() as any);

		return {
			storagePath,
		};
	}

	async function resetBackgroundImage() {
		if (loading) {
			return;
		}

		setLoading(true);

		const query = gql`
			mutation Mutate {
				deleteTimerBackground {
					id
				}
			}
		`;

		await gqlMutate(query);

		setImage('');
		setLoading(false);
		dispatch(getMe() as any);
	}

	return (
		<div>
			<div className="relative mb-2 h-[130px] w-[200px] cursor-pointer overflow-hidden rounded-[7px] border-[3px] border-tmo-background/40">
				<UploadCover upload={uploadTimerBackground} />
				{image ? (
					<img
						className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
						src={image}
						alt="Timer background"
					/>
				) : null}
			</div>
			{image ? <Button flat text="Reset background" danger onClick={resetBackgroundImage} /> : null}
		</div>
	);
}
