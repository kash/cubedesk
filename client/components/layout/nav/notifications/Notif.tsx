import AvatarImage from '@/components/common/avatar/AvatarImage';
import {Button} from '@/components/ui/button';
import {api} from '@/util/api';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {Sword, User} from 'phosphor-react';
import {ReactNode, useState} from 'react';

dayjs.extend(relativeTime);

interface Props {
	notif: any;
	index: number;
	onRead: () => void;
	deleteNotification: (index: number) => void;
}

export default function Notif({notif, index, onRead, deleteNotification}: Props) {
	const [read, setRead] = useState(false);

	const markAsReadMutation = api.notification.markAsRead.useMutation();
	const deleteMutation = api.notification.delete.useMutation();

	const markAsRead = async () => {
		await markAsReadMutation.mutateAsync({
			id: notif.id,
		});

		onRead();
		setRead(true);
	};

	const openLink = () => {
		markAsRead();
		window.location.href = notif.link;
	};

	const handleDelete = async () => {
		await deleteMutation.mutateAsync({
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
		<div className="bg-module text-text flex h-[30px] w-[30px] items-center justify-center rounded-full text-[0.9rem]">
			<i className={notif.icon} />
		</div>
	);

	if (notif.triggering_user) {
		const user = notif.triggering_user;
		icon = <AvatarImage small user={user} />;
	}

	let markAsReadBtn: ReactNode = (
		<Button variant="ghost" size="sm" onClick={markAsRead}>
			Mark as Read
		</Button>
	);
	if (notif.read_at) {
		markAsReadBtn = null;
	}

	return (
		<div className={className}>
			<div className="flex h-full w-[50px] items-center justify-center">{icon}</div>
			<div className="w-[calc(100%_-_50px)]">
				<h5 className="text-text mb-1.5 text-xs font-medium tracking-[0.1rem] uppercase opacity-50">
					{notif.notification_category_name}
				</h5>
				<p className="mb-[5px]">{notif.in_app_message}</p>
				<Button variant="link" size="sm" className="mt-1 px-0" onClick={openLink}>
					{notif.link_text}
				</Button>
			</div>
			<div className="absolute top-2 right-2 flex flex-row opacity-0 transition-opacity duration-100 ease-in-out group-hover:opacity-100 focus-within:opacity-100">
				<Button variant="ghost" size="sm" onClick={handleDelete}>
					Delete
				</Button>
				{markAsReadBtn}
			</div>
			<span className="text-text absolute right-2.5 bottom-2.5 flex text-[0.9rem] opacity-50">
				{dayjs(notif.created_at).fromNow()}
			</span>
		</div>
	);
}
