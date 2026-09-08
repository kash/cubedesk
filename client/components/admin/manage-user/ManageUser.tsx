import UserActions from '@/components/admin/manage-user/UserActions';
import UserSummary from '@/components/admin/manage-user/UserSummary';
import Avatar from '@/components/common/avatar/Avatar';
import Loading from '@/components/common/Loading';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {api} from '@/util/api';
import {getDateFromNow} from '@/util/dates';
import {CaretDown} from 'phosphor-react';
import React from 'react';

interface Props {
	userId: string;
}

function RecordCard({
	title,
	empty,
	items,
}: {
	title: string;
	empty: string;
	items: {id: string; text: string; created_at: string; detail?: string}[];
}) {
	return (
		<section className="border-tmo-module/10 min-w-0 overflow-hidden rounded-xl border">
			<div className="border-tmo-module/10 flex items-center justify-between border-b px-4 py-3">
				<h3 className="text-text m-0 text-sm font-semibold">{title}</h3>
				<span className="text-text/45 text-xs tabular-nums">
					{items.length.toLocaleString()}
				</span>
			</div>
			{items.length ? (
				<ul className="divide-tmo-module/10 m-0 max-h-64 list-none divide-y overflow-y-auto p-0">
					{items.map((item) => (
						<li key={item.id} className="px-4 py-3">
							<p className="text-text m-0 text-sm break-words">{item.text}</p>
							{item.detail && (
								<p className="text-text/60 m-0 mt-1 text-xs">{item.detail}</p>
							)}
							<time
								dateTime={item.created_at}
								title={new Date(item.created_at).toLocaleString()}
								className="text-text/40 mt-2 block text-xs"
							>
								{getDateFromNow(item.created_at)}
							</time>
						</li>
					))}
				</ul>
			) : (
				<p className="text-text/45 m-0 px-4 py-6 text-sm">{empty}</p>
			)}
		</section>
	);
}

export default function ManageUser({userId}: Props) {
	const result = api.admin.getUser.useQuery({userId});
	if (result.isPending) return <Loading />;
	if (result.isError)
		return (
			<div role="alert" className="py-8 text-center">
				<p className="text-text/60 mb-4">Unable to load this account.</p>
				<Button variant="outline" onClick={() => void result.refetch()}>
					Try again
				</Button>
			</div>
		);
	const user = result.data;
	const banned =
		user.banned_forever ||
		Boolean(user.banned_until && new Date(user.banned_until).getTime() > Date.now());
	const settings = Object.entries(user.settings || {}).filter(([key]) => !key.startsWith('_'));

	return (
		<div className="space-y-5">
			<section className="border-tmo-module/10 bg-text/[0.025] rounded-xl border p-5">
				<div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
					<div className="min-w-0 flex-1">
						<Avatar target="_blank" user={user} hideBadges />
						<p className="text-text/65 mt-3 mb-0 text-sm break-words">{user.email}</p>
						<div className="mt-3 flex flex-wrap gap-2">
							<Badge variant={banned ? 'destructive' : 'success'} size="sm">
								{banned ? 'Banned' : 'Active'}
							</Badge>
							{user.admin && (
								<Badge variant="info" size="sm">
									Admin
								</Badge>
							)}
							<Badge variant="outline" size="sm">
								{user.verified ? 'Verified' : 'Unverified'}
							</Badge>
						</div>
					</div>
					<UserActions updateUser={() => void result.refetch()} user={user} />
				</div>
				<dl className="border-tmo-module/10 m-0 mt-5 grid grid-cols-1 gap-4 border-t pt-4 sm:grid-cols-3">
					{[
						[
							'Joined',
							new Date(user.created_at).toLocaleDateString(undefined, {
								year: 'numeric',
								month: 'short',
								day: 'numeric',
							}),
						],
						['Country', user.join_country || 'Unknown'],
						['User ID', user.id],
					].map(([label, value]) => (
						<div key={label} className="min-w-0">
							<dt className="text-text/45 text-xs">{label}</dt>
							<dd className="text-text/80 m-0 mt-1 text-sm break-all">{value}</dd>
						</div>
					))}
				</dl>
			</section>
			<UserSummary summary={user.summary} />
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<RecordCard
					title="Ban history"
					empty="No bans on record."
					items={user.bans.map((ban) => ({
						id: ban.id,
						text: ban.reason,
						created_at: ban.created_at,
						detail: ban.banned_until
							? `Until ${new Date(ban.banned_until).toLocaleString()}`
							: undefined,
					}))}
				/>
				<RecordCard
					title="Reports received"
					empty="No reports received."
					items={user.reports_for.map((report) => ({
						id: report.id,
						text: report.reason || 'No reason provided',
						created_at: report.created_at,
					}))}
				/>
			</div>
			<RecordCard
				title="Chat messages"
				empty="No chat messages recorded."
				items={user.chat_messages.map((message) => ({
					id: message.id,
					text: message.message,
					created_at: message.created_at,
				}))}
			/>
			<details className="group border-tmo-module/10 rounded-xl border">
				<summary className="text-text focus-visible:outline-primary flex cursor-pointer list-none items-center justify-between rounded-xl p-4 text-sm font-medium focus-visible:outline-2 [&::-webkit-details-marker]:hidden">
					Account settings
					<CaretDown
						className="text-text/50 transition-transform group-open:rotate-180"
						aria-hidden
					/>
				</summary>
				<dl className="border-tmo-module/10 divide-tmo-module/10 m-0 divide-y border-t px-4">
					{settings.length ? (
						settings.map(([key, value]) => (
							<div key={key} className="grid grid-cols-2 gap-4 py-3 text-sm">
								<dt className="text-text/55 break-words capitalize">
									{key.replace(/_/g, ' ')}
								</dt>
								<dd className="text-text m-0 break-words">
									{value === null
										? '—'
										: typeof value === 'boolean'
											? value
												? 'Enabled'
												: 'Disabled'
											: String(value)}
								</dd>
							</div>
						))
					) : (
						<div className="text-text/45 py-5 text-sm">No settings recorded.</div>
					)}
				</dl>
			</details>
		</div>
	);
}
