import React from 'react';
import {gql} from '@apollo/client';
import './Notif.scss';
import dayjs from 'dayjs';
import {Sword, User} from 'phosphor-react';
import relativeTime from 'dayjs/plugin/relativeTime';
import {gqlMutate} from '../../../../api';
import AvatarImage from '../../../../common/avatar/avatar_image/AvatarImage';
import {NOTIFICATION_FRAGMENT} from '../../../../../util/graphql/fragments';

dayjs.extend(relativeTime);

export default class Notif extends React.Component {
	constructor() {
		super();

		this.state = {
			read: false,
		};
	}

	markAsRead = async () => {
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
				id: this.props.notif.id,
			}
		);

		this.props.onRead();

		this.setState({
			read: true,
		});
	};

	openLink = () => {
		this.markAsRead();

		window.location.href = this.props.notif.link;
	};

	deleteNotification = async () => {
		const query = gql`
			mutation Mutate($id: String) {
				deleteNotification(id: $id) {
					id
				}
			}
		`;

		await gqlMutate(query, {
			id: this.props.notif.id,
		});

		this.props.deleteNotification(this.props.index);
	};

	render() {
		const {read} = this.state;
		const {notif} = this.props;

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

		let icon = (
			<div className="cd-notifications__notif__icon">
				<i className={notif.icon} />
			</div>
		);

		if (notif.triggering_user) {
			const user = notif.triggering_user;
			icon = <AvatarImage small user={user} />;
		}

		let markAsRead = <button onClick={this.markAsRead}>Mark as Read</button>;
		if (notif.read_at) {
			markAsRead = null;
		}

		return (
			<div className={className}>
				<div className="cd-notifications__notif__left">{icon}</div>
				<div className="cd-notifications__notif__right">
					<h5>{notif.notification_category_name}</h5>
					<p>{notif.in_app_message}</p>
					<button onClick={this.openLink}>{notif.link_text}</button>
				</div>
				<div className="cd-notifications__notif__actions">
					<button onClick={this.deleteNotification}>Delete</button>
					{markAsRead}
				</div>
				<span>{dayjs(notif.created_at).fromNow()}</span>
			</div>
		);
	}
}
