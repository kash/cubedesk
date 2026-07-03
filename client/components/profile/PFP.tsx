import React from 'react';
import {useDispatch} from 'react-redux';
import UploadCover from '@/components/common/UploadCover';
import AvatarImage from '@/components/common/avatar/AvatarImage';
import {getStorageURL} from '@/util/storage';
import {Profile} from '@/types/profile';
import {useMe} from '@/util/hooks/useMe';
import {api} from '@/util/api';
import {fileToBase64} from '@/util/upload';
import {getMe} from '@/actions/account';

interface Props {
	allowChange?: boolean;
	profile: Profile;
}

export default function PFP(props: Props) {
	const {profile, allowChange} = props;

	const dispatch = useDispatch();
	const me = useMe();

	const uploadPfpMutation = api.profile.uploadPfp.useMutation();

	async function uploadProfilePicture(variables: {file: File}): Promise<{storagePath: string}> {
		const image = await uploadPfpMutation.mutateAsync({
			fileName: variables.file.name,
			data: await fileToBase64(variables.file),
		});

		dispatch(getMe() as any);
		return {
			storagePath: image?.storage_path || '',
		};
	}

	let cover: React.ReactNode = null;
	const myProfile = me?.id === profile.user_id;

	let imgLink = getStorageURL(profile?.pfp_image?.storage_path || '');
	if (myProfile) {
		imgLink = getStorageURL(me.profile?.pfp_image?.storage_path || '');
	}

	if (allowChange && myProfile) {
		cover = (
			<div className="absolute inset-0 overflow-hidden rounded-full">
				<UploadCover upload={uploadProfilePicture} />
			</div>
		);
	}

	return (
		<div className="relative box-border flex h-[150px] w-[150px] items-center justify-center rounded-full bg-[#eee]/30 p-2.5">
			{cover}
			<AvatarImage
				image={imgLink as any}
				large
				user={profile?.user as any}
				profile={profile as any}
			/>
		</div>
	);
}
