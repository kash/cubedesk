import AvatarDropdown from '@/components/common/avatar/AvatarDropdown';
import AvatarImage from '@/components/common/avatar/AvatarImage';
import Badges from '@/components/common/avatar/Badges';
import {Profile} from '@/types/profile';
import {Serialized} from '@/types/serialized';
import {PublicUserAccount, UserAccount, UserAccountForAdmin} from '@/types/user';
import {PublicUser} from '@/types/user';
import {cn} from '@/util/cn';
import {CircleWavyCheck} from 'phosphor-react';
import React, {ReactNode} from 'react';
import {Link} from 'react-router-dom';

interface Props {
	user?: UserAccountForAdmin | PublicUserAccount | UserAccount | PublicUser | Serialized<PublicUser>;
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

	let verifiedSymbol: ReactNode = null;
	if (user?.verified) {
		verifiedSymbol = (
			<span className="ml-1 table text-info">
				<CircleWavyCheck weight="fill" />
			</span>
		);
	}

	let eloSpan: ReactNode = null;
	if (showEloType && user?.elo_rating) {
		const elo = user.elo_rating[`elo_${showEloType}_rating`];
		eloSpan = <span className="text-sm text-text/70">{elo}</span>;
	}

	let nameSpan: ReactNode = null;
	if (user?.username) {
		nameSpan = (
			<span className="flex flex-col">
				<span className="relative flex flex-row content-center break-normal text-base font-medium text-text">
					{user.username} {verifiedSymbol}
				</span>
				{eloSpan}
			</span>
		);
	}

	let options: ReactNode = null;
	if (showOptions) {
		options = (
			<div className="ml-1">
				<AvatarDropdown mini={small} user={user} />
			</div>
		);
	}

	let emailSpan: ReactNode = null;
	if (showEmail && user?.email) {
		emailSpan = <span className="table break-all text-sm font-normal text-text opacity-80">{user.email}</span>;
	}

	let emblems: ReactNode = null;
	if (!hideBadges) {
		emblems = <Badges small user={user} limit={5} />;
	}

	const link = user?.username ? `/user/${user.username}` : null;

	return (
		<div className="flex flex-col justify-center">
			<div className="flex flex-row items-center">
				<Link
					target={target || '_self'}
					className={cn('relative flex flex-row items-center', vertical && 'flex-col')}
					onClick={onClick}
					to={link}
				>
					<AvatarImage large={large} tiny={tiny} small={small} user={user} profile={profile} />
					<div
						className={cn(
							'flex flex-col items-start gap-1',
							vertical ? 'mt-1' : 'ml-2 max-w-[calc(100%-58px)]'
						)}
					>
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
