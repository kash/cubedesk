import React, {useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import './PFP.scss';
import UploadCover from '../../common/upload_cover/UploadCover';
import AvatarImage from '../../common/avatar/avatar_image/AvatarImage';
import {getStorageURL} from '../../../util/storage';
import {Image, Profile} from '../../../@types/generated/graphql';
import {useMe} from '../../../util/hooks/useMe';
import {gql} from '@apollo/client';
import {gqlMutate} from '../../api';
import {getMe} from '../../../actions/account';

interface Props {
	allowChange?: boolean;
	profile: Profile;
}

export default function PFP(props: Props) {
	const {profile, allowChange} = props;

	const dispatch = useDispatch();
	const me = useMe();

	async function uploadProfilePicture(variables) {
		const query = gql`
			mutation Mutate($file: Upload) {
				uploadProfilePicture(file: $file) {
					id
					storage_path
				}
			}
		`;

		const res = await gqlMutate<{uploadProfilePicture: Image}>(query, variables);
		const storagePath = res.data.uploadProfilePicture.storage_path;

		dispatch(getMe());
		return {
			storagePath,
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
