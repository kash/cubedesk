import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Notifications.scss';
import { Bell } from '@phosphor-icons/react/dist/ssr';
import { useSelector } from 'react-redux';
import OldDropdown from '@/components/common/dropdown/OldDropdown';
import Loading from '@/components/common/loading/Loading';
import Empty from '@/components/common/empty/Empty';
import Notif from './notif/Notif';
import { UserAccount, Notification } from '@/generated/zod';

interface RootState {
	account: {
		me: UserAccount;
	};
}

interface NotificationsProps {
	right?: boolean;
}

export default function Notifications(props: NotificationsProps) {
	const { right } = props;
	const me = useSelector((store: RootState) => store.account.me);
	
	const [listInit, setListInit] = useState(false);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(0);
	const [endOfList, setEndOfList] = useState(false);
	const [unreadCount, setUnreadCount] = useState(0);
	const [open, setOpen] = useState(false);
	const [notifications, setNotifications] = useState<Notification[] | null>(null);
	
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	const updateNotificationCount = useCallback(async () => {
		// TODO: Migrate to tRPC - need unreadNotificationCount query
		setUnreadCount(0);
	}, []);

	const getNotifications = useCallback(async (resetList?: boolean, updateCount?: boolean) => {
		setLoading(true);

		// TODO: Migrate to tRPC - need notifications query with pagination
		const notifs: Notification[] = [];

		if (!notifs.length) {
			setEndOfList(true);
			setLoading(false);
			return;
		}

		const notifMap: Record<string, boolean> = {};
		let newNotifications: Notification[] = [];
		
		for (const n of notifications || []) {
			if (notifMap[n.id]) {
				continue;
			}

			notifMap[n.id] = true;
			newNotifications.push(n);
		}

		if (resetList) {
			newNotifications = notifs;
		} else {
			for (const n of notifs) {
				if (!notifMap[n.id]) {
					newNotifications.push(n);
				}
			}
		}

		setLoading(false);
		setNotifications(newNotifications);

		if (updateCount) {
			updateNotificationCount();
		}
	}, [notifications, updateNotificationCount]);

	const scrollList = useCallback((e: Event) => {
		const target = e.target as HTMLElement;
		if (loading || endOfList) {
			return;
		}

		if (target.scrollHeight - target.scrollTop === target.clientHeight) {
			setLoading(true);
			setPage(prev => prev + 1);
			getNotifications(false, false);
		}
	}, [loading, endOfList, getNotifications]);

	const deleteNotification = useCallback((index: number) => {
		if (!notifications) return;
		
		const newNotifications = [...notifications];
		newNotifications.splice(index, 1);

		let newPage = page;
		const loadMore = newNotifications.length < 6;

		if (loadMore) {
			newPage = 0;
		}

		updateNotificationCount();

		setPage(newPage);
		setNotifications(newNotifications);

		if (loadMore) {
			getNotifications(true, false);
		}
	}, [notifications, page, updateNotificationCount, getNotifications]);

	useEffect(() => {
		getNotifications(false, true);

		// Fetch notifications every 3 minutes
		intervalRef.current = setInterval(() => {
			if (!open) {
				getNotifications(true, true);
			}
		}, 1000 * 180);

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [getNotifications, open]);

	const readNotification = useCallback(() => {
		updateNotificationCount();
	}, [updateNotificationCount]);

	const openDropdown = useCallback(() => {
		setOpen(true);

		const notificationList = document.getElementById('cd-notifications__body');
		if (!notificationList || !notificationList.parentNode) {
			return;
		}

		notificationList.parentNode.addEventListener('scroll', scrollList);
	}, [scrollList]);

	const closeDropdown = useCallback(() => {
		setOpen(false);

		const notificationList = document.getElementById('cd-notifications__body');
		if (!notificationList || !notificationList.parentNode) {
			return;
		}

		notificationList.parentNode.removeEventListener('scroll', scrollList);
	}, [scrollList]);

	let body: React.ReactNode = null;
	let loadingBody = loading ? (
		<div className="cd-notifications__loading">
			<Loading />
		</div>
	) : null;

	if (notifications) {
		if (notifications.length) {
			body = (
				<div id="cd-notifications__body" className="cd-notifications__body">
					{notifications.map((notif, i) => (
						<Notif
							onRead={readNotification}
							deleteNotification={deleteNotification}
							index={i}
							notif={notif}
							key={notif.id}
						/>
					))}
				</div>
			);
		}
	}

	if ((notifications && !notifications.length) || (!notifications && endOfList)) {
		body = (
			<div className="cd-notifications__body--empty">
				<Empty text="No notifications" />
			</div>
		);
	}

	let unreadSpan = null;
	if (unreadCount) {
		unreadSpan = <span className="cd-notifications__unread">{unreadCount}</span>;
	}

	const dropdownProps: any = {};
	if (right) {
		dropdownProps.right = true;
	} else {
		dropdownProps.left = true;
	}

	return (
		<div className="cd-notifications">
			{unreadSpan}
			<OldDropdown
				{...dropdownProps}
				onOpen={openDropdown}
				onClose={closeDropdown}
				preventCloseOnInnerClick
				rawHandle={
					<div className="cd-notifications__handle">
						<Bell weight="bold" />
					</div>
				}
			>
				{body}
				{loadingBody}
			</OldDropdown>
		</div>
	);
}
