import {ReactNode, useState} from 'react';
import {gql} from '@apollo/client';
import dayjs from 'dayjs';
import {Sword, User} from 'phosphor-react';
import relativeTime from 'dayjs/plugin/relativeTime';
import {gqlMutate} from '@/components/api';
import AvatarImage from '@/components/common/avatar/avatar_image/AvatarImage';
import {NOTIFICATION_FRAGMENT} from '@/util/graphql/fragments';

dayjs.extend(relativeTime);

interface Props {
	notif: any;
	index: number;
	onRead: () => void;
	deleteNotification: (index: number) => void;
}

export default function Notif({notif, index, onRead, deleteNotification}: Props) {
	const [read, setRead] = useState(false);

	const markAsRead = async () => {
		await gqlMutate(
			gql`
				${NOTIFICATION_FRAGMENT}
				mutation Mutate($id: String) {
					markNotificationAsRead(id: $id) {
						...NotificationFragment
					}
				}
			`,
			{
				id: notif.id,
			}
		);

		onRead();
		setRead(true);
	};

	const openLink = () => {
		markAsRead();
		window.location.href = notif.link;
	};

	const handleDelete = async () => {
		const query = gql`
			mutation Mutate($id: String) {
				deleteNotification(id: $id) {
					id
				}
			}
		`;

		await gqlMutate(query, {
			id: notif.id,
		});

		deleteNotification(index);
	};

	let className =
		'group relative box-border flex w-full flex-row items-center rounded-[5px] bg-module/50 pb-[15px] pl-[5px] pr-2.5 pt-2.5 text-text';
	if (notif.read_at || read) {
		className += ' opacity-60';
	}

	let iconBody: ReactNode = null;
	switch (notif.notification_type) {
		case 'elo_refund': {
			iconBody = <Sword weight="bold" />;
			break;
		}
		case 'friend_request':
		case 'friend_request_accept': {
			iconBody = <User weight="bold" />;
			break;
		}
	}

	let icon: ReactNode = (
		<div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-module text-[0.9rem] text-text">
			<i className={notif.icon} />
		</div>
	);

	if (notif.triggering_user) {
		const user = notif.triggering_user;
		icon = <AvatarImage small user={user} />;
	}

	let markAsReadBtn: ReactNode = (
		<button
			className="ml-[7px] rounded-none border-b border-white px-0 pb-px pt-0 text-[0.8rem] text-text opacity-80 hover:bg-transparent hover:opacity-60"
			onClick={markAsRead}
		>
			Mark as Read
		</button>
	);
	if (notif.read_at) {
		markAsReadBtn = null;
	}

	return (
		<div className={className}>
			<div className="flex h-full w-[50px] items-center justify-center">{icon}</div>
			<div className="w-[calc(100%_-_50px)]">
				<h5 className="mb-1.5 text-xs font-medium uppercase tracking-[0.1rem] text-text opacity-50">
					{notif.notification_category_name}
				</h5>
				<p className="mb-[5px]">{notif.in_app_message}</p>
				<button className="mt-[5px] table border-b border-text text-[0.9rem] text-text" onClick={openLink}>
					{notif.link_text}
				</button>
			</div>
			<div className="absolute right-2 top-2 flex flex-row opacity-0 transition-opacity duration-100 ease-in-out group-hover:opacity-100">
				<button
					className="ml-[7px] rounded-none border-b border-white px-0 pb-px pt-0 text-[0.8rem] text-text opacity-80 hover:bg-transparent hover:opacity-60"
					onClick={handleDelete}
				>
					Delete
				</button>
				{markAsReadBtn}
			</div>
			<span className="absolute bottom-2.5 right-2.5 flex text-[0.9rem] text-text opacity-50">
				{dayjs(notif.created_at).fromNow()}
			</span>
		</div>
	);
}
