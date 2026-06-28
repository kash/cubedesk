import React from 'react';
import {gql, useQuery} from '@apollo/client';
import {USER_FOR_ADMIN_FRAGMENT} from '@/util/graphql/fragments';
import {NO_CACHE} from '@/components/api';
import Loading from '@/components/common/loading/Loading';
import Avatar from '@/components/common/avatar/Avatar';
import UserActions from '@/components/admin/manage-user/UserActions';
import Empty from '@/components/common/empty/Empty';
import {getDateFromNow} from '@/util/dates';
import UserSummary from '@/components/admin/manage-user/UserSummary';
import {UserAccountForAdmin} from '../../../../server/schemas/UserAccount.schema';

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
					<td className="font-bold capitalize">{name}</td>
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
			<div>
				<h3>{title}</h3>
				{body}
			</div>
		);
	}

	function getGenericGrid(title: string, list, name: string, sub) {
		const items = list || [];

		let output: React.ReactNode = items.map((item, index) => (
			<div
				key={item.id}
				className={`box-border grid grid-cols-[1fr_120px] py-2.5 ${
					index < items.length - 1 ? 'border-b-2 border-button' : ''
				}`}
			>
				<div>
					<p className="mb-0 text-base text-text">{item[name]}</p>
					{sub && item[sub] ? (
						<span className="mt-[3px] table text-sm text-text/70">{item[sub]}</span>
					) : null}
				</div>

				<div>
					<span className="table text-sm text-text/50">{getDateFromNow(item.created_at)}</span>
				</div>
			</div>
		));

		if (!items.length) {
			output = <Empty text="No records found" />;
		}

		return (
			<div>
				<h3>{title}</h3>
				<div className="mt-1 box-border max-h-[400px] min-h-[100px] overflow-auto rounded bg-module p-2.5">
					{output}
				</div>
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
		<div className="relative pt-[15px]">
			<div className="flex flex-col items-start">
				<Avatar target="_blank" user={userData} showEmail profile={userData.profile} />
				<UserActions updateUser={refetch} user={userData} />
			</div>

			<div className="grid w-full grid-cols-[repeat(auto-fill,minmax(500px,1fr))] gap-10">
				<UserSummary summary={userData.summary} />
				<div>{getBans()}</div>
				<div>{getReports()}</div>
				<div>{getChatMessage()}</div>
				<div>{getSettings()}</div>
			</div>
		</div>
	);
}
