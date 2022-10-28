import React from 'react';
import {gql, useQuery} from '@apollo/client';
import './ManageUser.scss';
import {USER_FOR_ADMIN_FRAGMENT} from '../../../util/graphql/fragments';
import {NO_CACHE} from '../../api';
import Loading from '../../common/loading/Loading';
import Avatar from '../../common/avatar/Avatar';
import UserActions from './user_actions/UserActions';
import Empty from '../../common/empty/Empty';
import {getDateFromNow} from '../../../util/dates';
import block from '../../../styles/bem';
import UserSummary from './user_summary/UserSummary';
import {UserAccountForAdmin} from '../../../../server/schemas/UserAccount.schema';

const b = block('manage-user');

const GET_USER_FOR_ADMIN = gql`
	${USER_FOR_ADMIN_FRAGMENT}
	query Query($userId: String) {
		getUserAccountForAdmin(userId: $userId) {
			...UserForAdminFragment
		}
	}
`;

interface Props {
	userId: string;
}

export default function ManageUser(props: Props) {
	const {userId} = props;

	const {data, loading, refetch} = useQuery<{getUserAccountForAdmin: UserAccountForAdmin}>(GET_USER_FOR_ADMIN, {
		variables: {
			userId,
		},
		fetchPolicy: NO_CACHE,
	});

	const userData = data?.getUserAccountForAdmin;

	if (loading) {
		return <Loading />;
	}

	function getGenericTable(title: string, obj) {
		const rows = Object.keys(obj || {}).map((key) => {
			const name = key.replace(/_/g, ' ');

			if (key.startsWith('_')) {
				return null;
			}

			return (
				<tr key={key}>
					<td className={b('table-stat')}>{name}</td>
					<td>{obj[key]}</td>
				</tr>
			);
		});

		let body = (
			<table className="cd-table">
				<tbody>{rows}</tbody>
			</table>
		);

		if (!rows.length) {
			body = <Empty text="No records found" />;
		}

		return (
			<div className={b('table')}>
				<h3>{title}</h3>
				{body}
			</div>
		);
	}

	function getGenericGrid(title: string, list, name: string, sub) {
		let output = list || [];

		output = output.map((item) => (
			<div key={item.id} className={b('grid-row')}>
				<div className={b('grid-row', {left: true})}>
					<p>{item[name]}</p>
					{sub && item[sub] ? <span>{item[sub]}</span> : null}
				</div>

				<div className={b('grid-row', {right: true})}>
					<span>{getDateFromNow(item.created_at)}</span>
				</div>
			</div>
		));

		if (!output.length) {
			output = <Empty text="No records found" />;
		}

		return (
			<div className={b('grid')}>
				<h3>{title}</h3>
				<div className={b('grid-body')}>{output}</div>
			</div>
		);
	}

	function getSettings() {
		const settings = userData.settings;
		return getGenericTable('Settings', settings);
	}

	function getBans() {
		const bans = userData.bans;
		return getGenericGrid('Bans', bans, 'reason', 'banned_until');
	}

	function getReports() {
		const reports = userData.reports_for;
		return getGenericGrid('Reports', reports, 'reason', null);
	}

	function getChatMessage() {
		const messages = userData.chat_messages;
		return getGenericGrid('Chat Messages', messages, 'message', null);
	}

	return (
		<div className={b()}>
			<div className={b('user')}>
				<Avatar target="_blank" user={userData} showEmail profile={userData.profile} />
				<UserActions updateUser={refetch} user={userData} />
			</div>

			<div className={b('sections')}>
				<UserSummary summary={userData.summary} />
				<div className={b('section')}>{getBans()}</div>
				<div className={b('section')}>{getReports()}</div>
				<div className={b('section')}>{getChatMessage()}</div>
				<div className={b('section')}>{getSettings()}</div>
			</div>
		</div>
	);
}
