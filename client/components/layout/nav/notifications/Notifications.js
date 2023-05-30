import React from 'react';
import './Notifications.scss';
import {Bell} from '@phosphor-icons/react';
import {connect} from 'react-redux';
import OldDropdown from '../../../common/dropdown/OldDropdown';
import Loading from '../../../common/loading/Loading';
import Empty from '../../../common/empty/Empty';
import Notif from './notif/Notif';
import {NOTIFICATION_FRAGMENT} from '../../../../util/graphql/fragments';
import {gqlQuery} from '../../../api';
import {gql} from '@apollo/client';

class Notifications extends React.Component {
	constructor() {
		super();

		this.state = {
			listInit: false,
			loading: true,
			page: 0,
			endOfList: false,
			unreadCount: 0,
			open: false,
			notifications: null,
		};
	}

	async componentDidMount() {
		await this.getNotifications(false, true);

		// Fetch notifications every 3 minutes
		setInterval(() => {
			if (this.state.open) {
				return;
			}

			this.getNotifications(true, true);
		}, 1000 * 180);
	}

	updateNotificationCount = async () => {
		const notifs = await gqlQuery(gql`
			query Query {
				unreadNotificationCount
			}
		`);

		this.setState({
			unreadCount: notifs.data.unreadNotificationCount || 0,
		});
	};

	scrollList = (e) => {
		if (this.state.loading || this.state.endOfList) {
			return;
		}

		if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
			this.setState(
				{
					loading: true,
					page: this.state.page + 1,
				},
				this.getNotifications
			);
		}
	};

	getNotifications = async (resetList, updateCount) => {
		const {page} = this.state;

		this.setState({
			loading: true,
		});

		const variables = {
			page,
		};

		const notifs = (
			await gqlQuery(
				gql`
					${NOTIFICATION_FRAGMENT}
					query Query($page: Int) {
						notifications(page: $page) {
							...NotificationFragment
						}
					}
				`,
				variables
			)
		).data.notifications;

		if (!notifs.length) {
			this.setState({
				endOfList: true,
				loading: false,
			});
			return;
		}

		const notifMap = {};
		let notifications = [];
		for (const n of this.state.notifications || []) {
			if (notifMap[n.id]) {
				continue;
			}

			notifMap[n.id] = true;
			notifications.push(n);
		}

		if (resetList) {
			notifications = notifs;
		} else {
			for (const n of notifs) {
				if (!notifMap[n.id]) {
					notifications.push(n);
				}
			}
		}

		this.setState({
			loading: false,
			notifications,
		});

		if (updateCount) {
			this.updateNotificationCount();
		}
	};

	deleteNotification = (index) => {
		const notifications = [...this.state.notifications];

		notifications.splice(index, 1);

		let page = this.state.page;
		const loadMore = notifications.length < 6;

		if (loadMore) {
			page = 0;
		}

		this.updateNotificationCount();

		this.setState(
			{
				page,
				notifications,
			},
			() => {
				if (loadMore) {
					this.getNotifications(true);
				}
			}
		);
	};

	readNotification = () => {
		this.updateNotificationCount();
	};

	openDropdown = () => {
		this.setState({
			open: true,
		});

		const notificationList = document.getElementById('cd-notifications__body');
		if (!notificationList) {
			return;
		}

		if (!notificationList) return;

		notificationList.parentNode.addEventListener('scroll', this.scrollList);
	};

	closeDropdown = () => {
		this.setState({
			open: false,
		});

		const notificationList = document.getElementById('cd-notifications__body');
		if (!notificationList) {
			return;
		}

		notificationList.parentNode.removeEventListener('scroll', this.scrollList);
	};

	render() {
		const {right} = this.props;
		const {notifications, unreadCount, endOfList, loading} = this.state;

		let body = null;
		let loadingBody = loading ? (
			<div className="cd-notifications__loading">
				<Loading />
			</div>
		) : null;

		if (notifications) {
			body = [];

			if (notifications.length) {
				body = (
					<div id="cd-notifications__body" className="cd-notifications__body">
						{notifications.map((notif, i) => (
							<Notif
								onRead={this.readNotification}
								deleteNotification={this.deleteNotification}
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

		const params = {};
		if (right) {
			params.right = true;
		} else {
			params.left = true;
		}

		return (
			<div className="cd-notifications">
				{unreadSpan}
				<OldDropdown
					{...params}
					onOpen={this.openDropdown}
					onClose={this.closeDropdown}
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
}

export default connect((store) => ({
	me: store.account.me,
}))(Notifications);
