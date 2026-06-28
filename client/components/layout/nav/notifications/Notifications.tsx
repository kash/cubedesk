import {ReactNode, useCallback, useEffect, useRef, useState} from 'react';
import {Bell} from 'phosphor-react';
import OldDropdown from '@/components/common/dropdown/OldDropdown';
import Loading from '@/components/common/loading/Loading';
import Empty from '@/components/common/empty/Empty';
import Notif from '@/components/layout/nav/notifications/Notif';
import {NOTIFICATION_FRAGMENT} from '@/util/graphql/fragments';
import {gqlQuery} from '@/components/api';
import {gql} from '@apollo/client';

interface Props {
	right?: boolean;
}

export default function Notifications({right}: Props) {
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(0);
	const [endOfList, setEndOfList] = useState(false);
	const [unreadCount, setUnreadCount] = useState(0);
	const [open, setOpen] = useState(false);
	const [notifications, setNotifications] = useState<any[] | null>(null);

	const openRef = useRef(open);
	const loadingRef = useRef(loading);
	const endOfListRef = useRef(endOfList);
	const notificationsRef = useRef(notifications);
	const pageRef = useRef(page);
	const bodyRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		openRef.current = open;
	}, [open]);
	useEffect(() => {
		loadingRef.current = loading;
	}, [loading]);
	useEffect(() => {
		endOfListRef.current = endOfList;
	}, [endOfList]);
	useEffect(() => {
		notificationsRef.current = notifications;
	}, [notifications]);
	useEffect(() => {
		pageRef.current = page;
	}, [page]);

	const updateNotificationCount = useCallback(async () => {
		const notifs = await gqlQuery(gql`
			query Query {
				unreadNotificationCount
			}
		`);

		setUnreadCount((notifs.data as any).unreadNotificationCount || 0);
	}, []);

	const getNotifications = useCallback(
		async (pageArg: number, resetList?: boolean, updateCount?: boolean) => {
			setLoading(true);

			const variables = {
				page: pageArg,
			};

			const notifs = (
				(await gqlQuery(
					gql`
						${NOTIFICATION_FRAGMENT}
						query Query($page: Int) {
							notifications(page: $page) {
								...NotificationFragment
							}
						}
					`,
					variables
				)) as any
			).data.notifications;

			if (!notifs.length) {
				setEndOfList(true);
				setLoading(false);
				return;
			}

			const notifMap: Record<string, boolean> = {};
			let updated: any[] = [];
			for (const n of notificationsRef.current || []) {
				if (notifMap[n.id]) continue;
				notifMap[n.id] = true;
				updated.push(n);
			}

			if (resetList) {
				updated = notifs;
			} else {
				for (const n of notifs) {
					if (!notifMap[n.id]) {
						updated.push(n);
					}
				}
			}

			setLoading(false);
			setNotifications(updated);

			if (updateCount) {
				updateNotificationCount();
			}
		},
		[updateNotificationCount]
	);

	useEffect(() => {
		getNotifications(0, false, true);

		const interval = setInterval(() => {
			if (openRef.current) return;
			getNotifications(pageRef.current, true, true);
		}, 1000 * 180);

		return () => {
			clearInterval(interval);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const scrollList = useCallback(
		(e: Event) => {
			if (loadingRef.current || endOfListRef.current) return;

			const target = e.target as HTMLElement;
			if (target.scrollHeight - target.scrollTop === target.clientHeight) {
				const nextPage = pageRef.current + 1;
				setPage(nextPage);
				getNotifications(nextPage);
			}
		},
		[getNotifications]
	);

	const deleteNotification = (index: number) => {
		const updated = [...(notificationsRef.current || [])];
		updated.splice(index, 1);

		let nextPage = pageRef.current;
		const loadMore = updated.length < 6;

		if (loadMore) {
			nextPage = 0;
			setPage(0);
		}

		updateNotificationCount();
		setNotifications(updated);

		if (loadMore) {
			getNotifications(nextPage, true);
		}
	};

	const readNotification = () => {
		updateNotificationCount();
	};

	const openDropdown = () => {
		setOpen(true);

		const notificationList = bodyRef.current;
		if (!notificationList || !notificationList.parentNode) return;

		notificationList.parentNode.addEventListener('scroll', scrollList);
	};

	const closeDropdown = () => {
		setOpen(false);

		const notificationList = bodyRef.current;
		if (!notificationList || !notificationList.parentNode) return;

		notificationList.parentNode.removeEventListener('scroll', scrollList);
	};

	let body: ReactNode = null;
	const loadingBody: ReactNode = loading ? (
		<div>
			<Loading />
		</div>
	) : null;

	if (notifications) {
		body = [];

		if (notifications.length) {
			body = (
				<div ref={bodyRef} id="cd-notifications__body" className="box-border flex flex-col gap-2.5 p-2.5">
					{notifications.map((notif: any, i: number) => (
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
			<div className="box-border flex h-full w-full items-center justify-center pb-[100px]">
				<Empty text="No notifications" />
			</div>
		);
	}

	let unreadSpan: ReactNode = null;
	if (unreadCount) {
		unreadSpan = (
			<span className="absolute -right-1 -top-1 z-[10000] flex h-[15px] w-[15px] items-center justify-center rounded-full bg-error text-[0.67rem] text-white shadow-[0_0_2px_rgba(0,0,0,0.3)]">
				{unreadCount}
			</span>
		);
	}

	const params: {right?: boolean; left?: boolean} = {};
	if (right) {
		params.right = true;
	} else {
		params.left = true;
	}

	return (
		<div className="relative">
			{unreadSpan}
			<OldDropdown
				{...params}
				bodyClassName="h-[500px] w-[400px]"
				maxHeight="none"
				onOpen={openDropdown}
				onClose={closeDropdown}
				preventCloseOnInnerClick
				rawHandle={
					<div className="flex h-[30px] w-[30px] items-center justify-center rounded-full text-base text-text">
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
