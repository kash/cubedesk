import {Profile} from '@/types/profile';
import {PublicUserAccount, UserAccount, UserAccountForAdmin} from '@/types/user';
import {cn} from '@/util/cn';
import {getStorageURL, resourceUri} from '@/util/storage';
import React from 'react';

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

	const bodyClass = cn(
		'relative h-[50px] w-[50px] overflow-hidden rounded-full bg-text/20',
		tiny && 'h-6 w-6',
		small && 'h-[30px] w-[30px]',
		large && 'h-[150px] w-[150px]'
	);

	let avatar;
	if ((profile && profile.pfp_image) || image) {
		avatar = (
			<div className="relative">
				<div className={bodyClass}>
					<img
						className="h-full w-full object-cover"
						src={image || getStorageURL(profile?.pfp_image?.storage_path) || undefined}
						alt={`Profile picture of ${user?.username || 'user'}`}
					/>
				</div>
			</div>
		);
	} else {
		const userId = user?.id ?? '0';
		const lastLetter = userId[userId.length - 1];
		const lastIndex = 'abcdefghijklmnopqrstuvwxyz0123456789'.indexOf(lastLetter);
		const backgroundColor = COLORS[lastIndex];

		avatar = (
			<div className="relative">
				<div className={bodyClass} style={{backgroundColor}}>
					<img
						className="h-full w-full object-cover"
						alt="Default avatar"
						src={resourceUri('/images/community/default_avatar.png')}
					/>
				</div>
			</div>
		);
	}

	return avatar;
}
