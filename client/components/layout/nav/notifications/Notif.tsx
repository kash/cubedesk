import AvatarImage from '@/components/common/avatar/AvatarImage';
import {Button} from '@/components/ui/button';
import {api} from '@/util/api';
import {cn} from '@/util/cn';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {Check, Sword, Trash, User} from 'phosphor-react';
import {ReactNode, useState} from 'react';

dayjs.extend(relativeTime);

interface Props {
	notif: any;
	index: number;
	mobile?: boolean;
	onRead: () => void;
	deleteNotification: (index: number) => void;
}

export default function Notif({notif, index, mobile, onRead, deleteNotification}: Props) {
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

	const isRead = !!(notif.read_at || read);

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

	let markAsReadBtn: ReactNode = mobile ? (
		<Button variant="ghost" size="icon-xs" aria-label="Mark as read" onClick={markAsRead}>
			<Check weight="bold" />
		</Button>
	) : (
		<Button variant="ghost" size="sm" onClick={markAsRead}>
			Mark as Read
		</Button>
	);
	if (notif.read_at || read) {
		markAsReadBtn = null;
	}

	const timestamp = (
		<span className="text-text shrink-0 text-xs opacity-50">
			{dayjs(notif.created_at).fromNow()}
		</span>
	);
	const actions = (
		<div className="flex flex-row">
			{mobile ? (
				<Button variant="ghost" size="icon-xs" aria-label="Delete" onClick={handleDelete}>
					<Trash weight="bold" />
				</Button>
			) : (
				<Button variant="ghost" size="sm" onClick={handleDelete}>
					Delete
				</Button>
			)}
			{markAsReadBtn}
		</div>
	);

	return (
		<div
			className={cn(
				'group bg-module/50 text-text relative box-border flex w-full flex-row rounded-[5px]',
				{
					'items-start p-2.5': !!mobile,
					'items-center pt-2.5 pr-2.5 pb-[15px] pl-[5px]': !mobile,
					'opacity-60': isRead,
				},
			)}
		>
			<div
				className={cn('flex shrink-0 items-center justify-center', {
					'w-10': !!mobile,
					'h-full w-[50px]': !mobile,
				})}
			>
				{icon}
			</div>
			<div className="min-w-0 flex-1">
				<h5 className="text-text mb-1.5 text-xs font-medium tracking-[0.08em] uppercase opacity-50">
					{notif.notification_category_name}
				</h5>
				<p className="mb-[5px] break-words">{notif.in_app_message}</p>
				<Button
					variant="link"
					size="sm"
					className="mt-1 h-auto px-0 text-left whitespace-normal"
					onClick={openLink}
				>
					{notif.link_text}
				</Button>
				{mobile ? (
					<div className="mt-1.5 flex items-center justify-between gap-2">
						{timestamp}
						{actions}
					</div>
				) : null}
			</div>
			{mobile ? null : (
				<>
					<div className="absolute top-2 right-2 flex flex-row opacity-0 transition-opacity duration-100 ease-in-out group-hover:opacity-100 focus-within:opacity-100">
						{actions}
					</div>
					<span className="text-text absolute right-2.5 bottom-2.5 flex text-[0.9rem] opacity-50">
						{dayjs(notif.created_at).fromNow()}
					</span>
				</>
			)}
		</div>
	);
}
