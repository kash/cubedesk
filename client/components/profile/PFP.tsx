import React from 'react';
import {useDispatch} from 'react-redux';
import UploadCover from '@/components/common/upload_cover/UploadCover';
import AvatarImage from '@/components/common/avatar/avatar_image/AvatarImage';
import {getStorageURL} from '@/util/storage';
import {Image, Profile} from '@/@types/generated/graphql';
import {useMe} from '@/util/hooks/useMe';
import {gql} from '@apollo/client';
import {gqlMutate} from '@/components/api';
import {getMe} from '@/actions/account';

interface Props {
	allowChange?: boolean;
	profile: Profile;
}

export default function PFP(props: Props) {
	const {profile, allowChange} = props;

	const dispatch = useDispatch();
	const me = useMe();

	async function uploadProfilePicture(variables): Promise<{storagePath: string}> {
		const query = gql`
			mutation Mutate($file: Upload) {
				uploadProfilePicture(file: $file) {
					id
					storage_path
				}
			}
		`;

		const res = await gqlMutate<{uploadProfilePicture: Image}>(query, variables);
		const storagePath = res.data?.uploadProfilePicture?.storage_path || '';

		dispatch(getMe() as any);
		return {
			storagePath,
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
			<AvatarImage image={imgLink as any} large user={profile?.user as any} profile={profile as any} />
		</div>
	);
}
