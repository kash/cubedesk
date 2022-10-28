import React from 'react';
import './ChatMessage.scss';
import AvatarImage from '../../../common/avatar/avatar_image/AvatarImage';
import block from '../../../../styles/bem';
import {PublicUserAccount} from '../../../../../server/schemas/UserAccount.schema';

const b = block('chat-message');

interface Props {
	user: PublicUserAccount;
	messages: string[];
}

export default function ChatMessage(props: Props) {
	const {user, messages} = props;

	return (
		<div className={b()}>
			<div className={b('left')}>
				<AvatarImage small user={user} profile={user.profile} />
			</div>
			<div className={b('right')}>
				<b>{user.username}</b>
				{messages.map((m, i) => (
					<p key={m + i}>{m}</p>
				))}
			</div>
		</div>
	);
}
