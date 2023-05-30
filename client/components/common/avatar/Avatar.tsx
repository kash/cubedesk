import React from 'react';
import './Avatar.scss';
import AvatarImage from './avatar_image/AvatarImage';
import {CircleWavyCheck} from '@phosphor-icons/react';
import {Link} from 'react-router-dom';
import Badges from './badges/Badges';
import {PublicUserAccount, UserAccount, UserAccountForAdmin} from '../../../../server/schemas/UserAccount.schema';
import block from '../../../styles/bem';
import AvatarDropdown from './avatar_dropdown/AvatarDropdown';
import {Profile} from '../../../../server/schemas/Profile.schema';

const b = block('avatar');

interface Props {
	user?: UserAccountForAdmin | PublicUserAccount | UserAccount;
	profile?: Profile;
	small?: boolean;
	tiny?: boolean;
	large?: boolean;
	showOptions?: boolean;
	showEmail?: boolean;
	noLink?: boolean;
	hideBadges?: boolean;
	vertical?: boolean;
	target?: string;
	showEloType?: '222' | '333' | '444' | 'overall';
}

export default function Avatar(props: Props) {
	const user = props.user as UserAccountForAdmin;
	const {small, large, vertical, showOptions, showEloType, tiny, showEmail, hideBadges, target, noLink} = props;

	function onClick(e) {
		if (noLink) {
			e.preventDefault();
		}
	}

	const profile = props.profile || user?.profile;

	let verifiedSymbol = null;
	if (user?.verified) {
		verifiedSymbol = (
			<span className={b('verified')}>
				<CircleWavyCheck weight="fill" />
			</span>
		);
	}

	let eloSpan = null;
	if (showEloType && user?.elo_rating) {
		const elo = user.elo_rating[`elo_${showEloType}_rating`];
		eloSpan = <span className={b('elo')}>{elo}</span>;
	}

	let nameSpan = null;
	if (user?.username) {
		nameSpan = (
			<span className={b('name')}>
				<span className={b('username')}>
					{user.username} {verifiedSymbol}
				</span>
				{eloSpan}
			</span>
		);
	}

	let options = null;
	if (showOptions) {
		options = (
			<div className={b('options')}>
				<AvatarDropdown mini={small} user={user} />
			</div>
		);
	}

	let emailSpan = null;
	if (showEmail && user?.email) {
		emailSpan = <span className={b('email')}>{user.email}</span>;
	}

	let emblems = null;
	if (!hideBadges) {
		emblems = <Badges small user={user} limit={5} />;
	}

	const link = user?.username ? `/user/${user.username}` : null;

	return (
		<div className={b('wrapper')}>
			<div className={b('body')}>
				<Link target={target || '_self'} className={b({vertical})} onClick={onClick} to={link}>
					<AvatarImage large={large} tiny={tiny} small={small} user={user} profile={profile} />
					<div className={b('info')}>
						{nameSpan}
						{emailSpan}
					</div>
				</Link>
				{options}
			</div>
			{emblems}
		</div>
	);
}
