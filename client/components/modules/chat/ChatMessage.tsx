import React from 'react';
import AvatarImage from '@/components/common/avatar/avatar_image/AvatarImage';
import {PublicUserAccount} from '../../../../server/schemas/UserAccount.schema';

interface Props {
	user: PublicUserAccount;
	messages: string[];
}

export default function ChatMessage(props: Props) {
	const {user, messages} = props;

	return (
		<div className="flex flex-row items-start">
			<div className="w-10">
				<AvatarImage small user={user} profile={user.profile} />
			</div>
			<div className="w-[calc(100%_-_40px)]">
				<b className="relative -top-0.5 mb-2 text-[0.95rem] font-bold text-text">{user.username}</b>
				{messages.map((m, i) => (
					<p className={i === messages.length - 1 ? 'm-0 break-words' : 'm-0 mb-[3px] break-words'} key={m + i}>
						{m}
					</p>
				))}
			</div>
		</div>
	);
}
