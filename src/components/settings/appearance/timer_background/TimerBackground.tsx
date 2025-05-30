import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import './TimerBackground.scss';
import {getMe} from '@/lib/actions/account';
import UploadCover from '@/components/common/upload_cover/UploadCover';
import {useMe} from '@/lib/util/hooks/useMe';
import {getStorageURL} from '@/lib/util/storage';
import {Button} from '@/components/ui/button';
import block from '@/styles/bem';
import {TimerBackground as TimerBackgroundSchema} from '@/generated/zod';

const b = block('timer-background');

export default function TimerBackground() {
	const dispatch = useDispatch();
	const me = useMe();

	const [loading, setLoading] = useState(false);
	const [image, setImage] = useState<string>(
		getStorageURL(me?.timer_background?.storage_path) || '',
	);

	async function uploadTimerBackground(variables) {
		// TODO: Migrate to tRPC upload endpoint
		return {
			storagePath: null,
		};
	}

	async function resetBackgroundImage() {
		if (loading) {
			return;
		}

		setLoading(true);

		// TODO: Migrate to tRPC endpoint
		// await deleteTimerBackground()

		setImage('');
		setLoading(false);
		dispatch(getMe());
	}

	return (
		<div className={b()}>
			<div className={b('image')}>
				<UploadCover upload={uploadTimerBackground} />
				{image ? <img src={image} alt="Timer background" /> : null}
			</div>
			{image ? (
				<Button variant="destructive" onClick={resetBackgroundImage}>
					Reset background
				</Button>
			) : null}
		</div>
	);
}
