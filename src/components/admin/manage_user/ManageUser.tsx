import {getDateFromNow} from '@/lib/util/dates';
import './ManageUser.scss';
import block from '@/styles/bem';
import {api} from '@/trpc/react';
import React, {useCallback} from 'react';
import Avatar from '../../common/avatar/Avatar';
import Empty from '../../common/empty/Empty';
import Loading from '../../common/loading/Loading';
import UserActions from './user_actions/UserActions';
import UserSummary from './user_summary/UserSummary';

const b = block('manage-user');

interface Props {
	userId: string;
}

export default function ManageUser(props: Props) {
	const {userId} = props;

	const {
		data: userData,
		isLoading,
		refetch,
	} = api.admin.getUserAccountForAdmin.useQuery({
		userId,
	});

	if (isLoading) {
		return <Loading />;
	}

	const getGenericTable = useCallback((title: string, obj: any) => {
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
	}, []);

	const getGenericGrid = useCallback((title: string, list: any[], name: string, sub?: string) => {
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
	}, []);

	const getSettings = useCallback(() => {
		const settings = userData.settings;
		return getGenericTable('Settings', settings);
	}, [userData?.settings, getGenericTable]);

	const getBans = useCallback(() => {
		const bans = userData.bans;
		return getGenericGrid('Bans', bans, 'reason', 'banned_until');
	}, [userData?.bans, getGenericGrid]);

	const getReports = useCallback(() => {
		const reports = userData.reports_for;
		return getGenericGrid('Reports', reports, 'reason', null);
	}, [userData?.reports_for, getGenericGrid]);

	const getChatMessage = useCallback(() => {
		const messages = userData.chat_messages;
		return getGenericGrid('Chat Messages', messages, 'message', null);
	}, [userData?.chat_messages, getGenericGrid]);

	return (
		<div className={b()}>
			<div className={b('user')}>
				<Avatar target="_blank" user={userData} showEmail profile={userData.profile} />
				<UserActions updateUser={() => refetch()} user={userData} />
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
