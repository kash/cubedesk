import React from 'react';
import './AvatarImage.scss';
import {getStorageURL, resourceUri} from '../../../../util/storage';
import block from '../../../../styles/bem';
import {PublicUserAccount, UserAccount, UserAccountForAdmin} from '../../../../../server/schemas/UserAccount.schema';
import ProBadge from '../pro_badge/ProBadge';
import {Profile} from '../../../../../server/schemas/Profile.schema';
import {isNotPro, isPro} from '../../../../util/pro';

const b = block('avatar-image');

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
	profile?: Profile;
	image?: string;
	small?: boolean;
	tiny?: boolean;
	large?: boolean;
}

export default function AvatarImage(props: Props) {
	const {large, tiny, small, image} = props;

	const user = props.user || props.profile?.user;
	const profile = props.profile || props.user?.profile;

	let proBadge = <ProBadge small={small} tiny={tiny} large={large} />;
	if (isNotPro(user)) {
		proBadge = null;
	}

	let avatar;
	if ((profile && profile.pfp_image) || image) {
		avatar = (
			<div className={b()}>
				{proBadge}
				<div className={b('body', {large, small, tiny})}>
					<img
						src={image || getStorageURL(profile?.pfp_image?.storage_path)}
						alt={`Profile picture of ${user?.username || 'user'}`}
					/>
				</div>
			</div>
		);
	} else {
		const lastLetter = user.id[user.id.length - 1];
		const lastIndex = 'abcdefghijklmnopqrstuvwxyz0123456789'.indexOf(lastLetter);
		const backgroundColor = COLORS[lastIndex];

		avatar = (
			<div className={b()}>
				{proBadge}
				<div
					className={b('body', {default: true, large, pro: isPro(user), small, tiny})}
					style={{backgroundColor}}
				>
					<img alt="Default avatar" src={resourceUri('/images/community/default_avatar.png')} />
				</div>
			</div>
		);
	}

	return avatar;
}
