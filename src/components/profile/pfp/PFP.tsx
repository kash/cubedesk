import React, {useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import './PFP.scss';
import UploadCover from '@/components/common/upload_cover/UploadCover';
import AvatarImage from '@/components/common/avatar/avatar_image/AvatarImage';
import {getStorageURL} from '@/lib/util/storage';
import {Image, Profile} from '@/generated/zod';
import {useMe} from '@/lib/util/hooks/useMe';
import {getMe} from '@/lib/actions/account';

interface Props {
	allowChange?: boolean;
	profile: Profile;
}

export default function PFP(props: Props) {
	const {profile, allowChange} = props;

	const dispatch = useDispatch();
	const me = useMe();

	async function uploadProfilePicture(variables) {
		// TODO: Migrate to tRPC upload endpoint
		return {
			storagePath: null,
		};
	}

	let cover = null;
	const myProfile = me?.id === profile.user_id;

	let imgLink = getStorageURL(profile?.pfp_image?.storage_path);
	if (myProfile) {
		imgLink = getStorageURL(me.profile?.pfp_image?.storage_path);
	}

	if (allowChange && myProfile) {
		cover = <UploadCover upload={uploadProfilePicture} />;
	}

	return (
		<div className="cd-pfp">
			{cover}
			<AvatarImage image={imgLink} large user={profile?.user} profile={profile} />
		</div>
	);
}
