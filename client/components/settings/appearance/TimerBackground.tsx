import {getMe} from '@/actions/account';
import Button from '@/components/common/Button';
import UploadCover from '@/components/common/UploadCover';
import {api} from '@/util/api';
import {useMe} from '@/util/hooks/useMe';
import {getStorageURL} from '@/util/storage';
import {fileToBase64} from '@/util/upload';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

export default function TimerBackground() {
	const dispatch = useDispatch();
	const me = useMe();

	const [image, setImage] = useState<string>(
		getStorageURL(me?.timer_background?.storage_path || '') || '',
	);

	const uploadMutation = api.timerBackground.upload.useMutation();
	const deleteMutation = api.timerBackground.delete.useMutation();

	async function uploadTimerBackground(variables: {file: File}) {
		const background = await uploadMutation.mutateAsync({
			fileName: variables.file.name,
			data: await fileToBase64(variables.file),
		});

		const storagePath = background?.storage_path || '';
		const url = getStorageURL(storagePath) || '';

		setImage(url);
		dispatch(getMe() as any);

		return {
			storagePath,
		};
	}

	async function resetBackgroundImage() {
		if (deleteMutation.isPending) {
			return;
		}

		await deleteMutation.mutateAsync();

		setImage('');
		dispatch(getMe() as any);
	}

	return (
		<div>
			<div className="border-tmo-background/40 relative mb-2 h-[130px] w-[200px] cursor-pointer overflow-hidden rounded-[7px] border-[3px]">
				<UploadCover upload={uploadTimerBackground} />
				{image ? (
					<img
						className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
						src={image}
						alt="Timer background"
					/>
				) : null}
			</div>
			{image ? (
				<Button flat text="Reset background" danger onClick={resetBackgroundImage} />
			) : null}
		</div>
	);
}
