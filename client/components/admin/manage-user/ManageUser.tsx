import UserActions from '@/components/admin/manage-user/UserActions';
import UserSummary from '@/components/admin/manage-user/UserSummary';
import Avatar from '@/components/common/avatar/Avatar';
import Empty from '@/components/common/Empty';
import Loading from '@/components/common/Loading';
import {AdminUser} from '@/types/admin';
import {Serialized} from '@/types/serialized';
import {getDateFromNow} from '@/util/dates';
import {trpc} from '@/util/trpc';
import React, {useCallback, useEffect, useState} from 'react';

interface Props {
	userId: string;
}

export default function ManageUser(props: Props) {
	const {userId} = props;

	const [userData, setUserData] = useState<Serialized<AdminUser> | null>(null);
	const [loading, setLoading] = useState(true);

	const refetch = useCallback(() => {
		trpc.admin.getUser
			.query({userId})
			.then((res) => {
				setUserData(res);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [userId]);

	useEffect(() => {
		refetch();
	}, [refetch]);

	if (loading || !userData) {
		return <Loading />;
	}

	// Narrowed alias — TS does not carry the null check into the nested functions below
	const user = userData;

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
					index < items.length - 1 ? 'border-button border-b-2' : ''
				}`}
			>
				<div>
					<p className="text-text mb-0 text-base">{item[name]}</p>
					{sub && item[sub] ? (
						<span className="text-text/70 mt-[3px] table text-sm">{item[sub]}</span>
					) : null}
				</div>

				<div>
					<span className="text-text/50 table text-sm">
						{getDateFromNow(item.created_at)}
					</span>
				</div>
			</div>
		));

		if (!items.length) {
			output = <Empty text="No records found" />;
		}

		return (
			<div>
				<h3>{title}</h3>
				<div className="bg-module mt-1 box-border max-h-[400px] min-h-[100px] overflow-auto rounded p-2.5">
					{output}
				</div>
			</div>
		);
	}

	function getSettings() {
		const settings = user.settings;
		return getGenericTable('Settings', settings);
	}

	function getBans() {
		const bans = user.bans;
		return getGenericGrid('Bans', bans, 'reason', 'banned_until');
	}

	function getReports() {
		const reports = user.reports_for;
		return getGenericGrid('Reports', reports, 'reason', null);
	}

	function getChatMessage() {
		const messages = user.chat_messages;
		return getGenericGrid('Chat Messages', messages, 'message', null);
	}

	return (
		<div className="relative pt-[15px]">
			<div className="flex flex-col items-start">
				<Avatar target="_blank" user={user} showEmail />
				<UserActions updateUser={refetch} user={userData} />
			</div>

			<div className="grid w-full grid-cols-[repeat(auto-fill,minmax(500px,1fr))] gap-10">
				<UserSummary summary={user.summary} />
				<div>{getBans()}</div>
				<div>{getReports()}</div>
				<div>{getChatMessage()}</div>
				<div>{getSettings()}</div>
			</div>
		</div>
	);
}
