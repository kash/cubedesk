import Empty from '@/components/common/Empty';
import Loading from '@/components/common/Loading';
import Notif from '@/components/layout/nav/notifications/Notif';
import {Button} from '@/components/ui/button';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {api} from '@/util/api';
import {useGeneral} from '@/util/hooks/useGeneral';
import {Bell} from 'phosphor-react';
import {ReactNode, useCallback, useEffect, useRef, useState} from 'react';

interface Props {
	right?: boolean;
}

export default function Notifications({right}: Props) {
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(0);
	const [endOfList, setEndOfList] = useState(false);
	const [open, setOpen] = useState(false);
	const [notifications, setNotifications] = useState<any[] | null>(null);

	const mobile = useGeneral('mobile_mode');
	const utils = api.useUtils();
	const unreadCountQuery = api.notification.unreadCount.useQuery();
	const unreadCount = unreadCountQuery.data || 0;
	const markAllAsReadMutation = api.notification.markAllAsRead.useMutation();

	const openRef = useRef(open);
	const loadingRef = useRef(loading);
	const endOfListRef = useRef(endOfList);
	const notificationsRef = useRef(notifications);
	const pageRef = useRef(page);

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
		await utils.notification.unreadCount.invalidate();
	}, [utils]);

	const getNotifications = useCallback(
		async (pageArg: number, resetList?: boolean, updateCount?: boolean) => {
			setLoading(true);

			const notifs = await utils.notification.list.fetch({
				page: pageArg,
			});

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
		[updateNotificationCount, utils],
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
		(e: React.UIEvent<HTMLDivElement>) => {
			if (loadingRef.current || endOfListRef.current) return;

			const target = e.currentTarget;
			if (target.scrollHeight - target.scrollTop <= target.clientHeight + 1) {
				const nextPage = pageRef.current + 1;
				setPage(nextPage);
				getNotifications(nextPage);
			}
		},
		[getNotifications],
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

	const markAllAsRead = async () => {
		if (!unreadCount || markAllAsReadMutation.isPending) return;

		await markAllAsReadMutation.mutateAsync();
		const readAt = new Date();
		setNotifications((current) =>
			(current || []).map((notif) => (notif.read_at ? notif : {...notif, read_at: readAt})),
		);
		utils.notification.unreadCount.setData(undefined, 0);
		updateNotificationCount();
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
				<div id="cd-notifications__body" className="box-border flex flex-col gap-2.5 p-2.5">
					{notifications.map((notif: any, i: number) => (
						<Notif
							onRead={readNotification}
							deleteNotification={deleteNotification}
							index={i}
							notif={notif}
							mobile={mobile}
							key={notif.id}
						/>
					))}
				</div>
			);
		}
	}

	if ((notifications && !notifications.length) || (!notifications && endOfList)) {
		body = (
			<div className="box-border flex w-full items-center justify-center">
				<Empty text="No notifications" />
			</div>
		);
	}

	let unreadSpan: ReactNode = null;
	if (unreadCount) {
		unreadSpan = (
			<span className="bg-error absolute -top-1 -right-1 z-[10000] flex h-[15px] w-[15px] items-center justify-center rounded-full text-[0.67rem] text-white shadow-[0_0_2px_rgba(0,0,0,0.3)]">
				{unreadCount}
			</span>
		);
	}

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					type="button"
					aria-label={
						unreadCount ? `Notifications (${unreadCount} unread)` : 'Notifications'
					}
					variant="ghost"
					size="icon-sm"
					className="relative"
				>
					<Bell weight="bold" />
					{unreadSpan}
				</Button>
			</PopoverTrigger>
			<PopoverContent
				aria-label="Notifications"
				align={right ? 'end' : 'start'}
				collisionPadding={12}
				className="flex w-[min(400px,calc(100vw-1.5rem))] flex-col overflow-hidden p-0"
			>
				<div className="border-tmo-module/15 flex shrink-0 items-center justify-between gap-2 border-b px-3 py-2">
					<span className="text-sm font-medium">Notifications</span>
					{unreadCount ? (
						<Button
							variant="ghost"
							size="xs"
							className="shrink-0"
							disabled={markAllAsReadMutation.isPending}
							onClick={markAllAsRead}
						>
							Mark all as read
						</Button>
					) : null}
				</div>
				<div
					className="max-h-[min(28rem,calc(var(--radix-popover-content-available-height)-3rem))] overflow-y-auto"
					onScroll={scrollList}
				>
					{body}
					{loadingBody}
				</div>
			</PopoverContent>
		</Popover>
	);
}
