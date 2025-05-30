import React, { useState, useCallback } from 'react';
import './Notif.scss';
import dayjs from 'dayjs';
import { Sword, User } from '@phosphor-icons/react/dist/ssr';
import relativeTime from 'dayjs/plugin/relativeTime';
import AvatarImage from '@/components/common/avatar/avatar_image/AvatarImage';
import { Notification } from '@/generated/zod';

dayjs.extend(relativeTime);

interface NotifProps {
	notif: Notification;
	index: number;
	onRead: () => void;
	deleteNotification: (index: number) => void;
}

export default function Notif(props: NotifProps) {
	const [read, setRead] = useState(false);
	const { notif, index, onRead, deleteNotification } = props;

	const markAsRead = useCallback(async () => {
		// TODO: Migrate to tRPC - need notification.markAsRead mutation
		// await markNotificationAsReadMutation.mutateAsync({ id: notif.id });

		onRead();
		setRead(true);
	}, [onRead, notif.id]);

	const openLink = useCallback(() => {
		markAsRead();
		window.location.href = notif.link;
	}, [markAsRead, notif.link]);

	const handleDeleteNotification = useCallback(async () => {
		// TODO: Migrate to tRPC - need notification.delete mutation
		// await deleteNotificationMutation.mutateAsync({ id: notif.id });

		deleteNotification(index);
	}, [deleteNotification, index, notif.id]);

	let className = 'cd-notifications__notif';
	if (notif.read_at || read) {
		className += ' cd-notifications__notif--read';
	}

	let iconBody = null;
	// TODO turn NotificationType into a compiled typed
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

	let icon: React.ReactNode = (
		<div className="cd-notifications__notif__icon">
			<i className={notif.icon} />
		</div>
	);

	if (notif.triggering_user) {
		const user = notif.triggering_user;
		icon = <AvatarImage small user={user} />;
	}

	let markAsReadButton = <button onClick={markAsRead}>Mark as Read</button>;
	if (notif.read_at) {
		markAsReadButton = null;
	}

	return (
		<div className={className}>
			<div className="cd-notifications__notif__left">{icon}</div>
			<div className="cd-notifications__notif__right">
				<h5>{notif.notification_category_name}</h5>
				<p>{notif.in_app_message}</p>
				<button onClick={openLink}>{notif.link_text}</button>
			</div>
			<div className="cd-notifications__notif__actions">
				<button onClick={handleDeleteNotification}>Delete</button>
				{markAsReadButton}
			</div>
			<span>{dayjs(notif.created_at).fromNow()}</span>
		</div>
	);
}
