import {Avatar, AvatarFallback, AvatarImage as AvatarPhoto} from '@/components/ui/avatar';
import {Profile} from '@/types/profile';
import {PublicUserAccount, UserAccount, UserAccountForAdmin} from '@/types/user';
import {cn} from '@/util/cn';
import {getStorageURL, resourceUri} from '@/util/storage';
import React, {useState} from 'react';

const COLORS = [
	'#05445E',
	'#0C2D48',
	'#145DA0',
	'#167D7F',
	'#29A0B1',

	'#2F5061',
	'#E57F84',
	'#4297A0',
	'#333652',
	'#41729F',

	'#887BB0',
	'#603F8B',
	'#C85250',
	'#2F5233',
	'#549BAD',

	'#385E72',
	'#313E61',
	'#774A62',
	'#414754',
	'#82807F',

	'#A8BBB0',
	'#6E6D6E',
	'#D18D96',
	'#34586E',
	'#A47786',

	'#107869',

	'#5D59AF',
	'#A072BE',
	'#52688F',
	'#7391C8',
	'#607D86',

	'#715C8C',
	'#333F63',
	'#543855',
	'#C44B4F',
	'#4C5355',
];

interface Props {
	user?: UserAccountForAdmin | PublicUserAccount | UserAccount;
	profile?: Profile | null;
	image?: string;
	small?: boolean;
	tiny?: boolean;
	large?: boolean;
}

export default function AvatarImage(props: Props) {
	const {large, tiny, small, image} = props;

	const user = props.user || props.profile?.user;
	const profile = props.profile || props.user?.profile;

	const userId = user?.id ?? '0';
	const lastIndex = 'abcdefghijklmnopqrstuvwxyz0123456789'.indexOf(userId[userId.length - 1]);
	const backgroundColor = COLORS[lastIndex] ?? COLORS[0];
	const src =
		image || (profile?.pfp_image ? getStorageURL(profile.pfp_image.storage_path) : undefined);
	const [imageState, setImageState] = useState<{src: string | null | undefined; status: string}>({
		src,
		status: 'loading',
	});
	const loading = Boolean(
		src && (imageState.src !== src || !['loaded', 'error'].includes(imageState.status)),
	);
	return (
		<Avatar
			className={cn('size-[50px]', {
				'size-6': tiny,
				'size-[30px]': small,
				'size-[150px]': large,
			})}
		>
			<AvatarPhoto
				key={src}
				src={src || undefined}
				onLoadingStatusChange={(status) => setImageState({src, status})}
				alt={`Profile picture of ${user?.username || 'user'}`}
			/>
			<AvatarFallback style={loading ? undefined : {backgroundColor}}>
				{loading ? (
					<span
						aria-label="Loading profile picture"
						className="bg-text/10 size-full motion-safe:animate-pulse"
					/>
				) : (
					<img
						className="size-full object-cover"
						alt={`Default avatar for ${user?.username || 'user'}`}
						src={resourceUri('/images/community/default_avatar.png')}
					/>
				)}
			</AvatarFallback>
		</Avatar>
	);
}
