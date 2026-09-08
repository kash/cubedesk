import ManageUser from '@/components/admin/manage-user/ManageUser';
import Avatar from '@/components/common/avatar/Avatar';
import PageControls from '@/components/common/PageControls';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent, DialogHeader} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {api} from '@/util/api';
import {MagnifyingGlass, ShieldCheck, Users, X} from 'phosphor-react';
import React, {useEffect, useRef, useState} from 'react';
import {useHistory, useLocation} from 'react-router-dom';

const PAGE_SIZE = 25;

export default function AdminUsers() {
	const history = useHistory();
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const searchQuery = (params.get('query') || '').slice(0, 250);
	const requestedPage = Number(params.get('page') || 0);
	const page = Number.isSafeInteger(requestedPage) && requestedPage >= 0 ? requestedPage : 0;
	const [query, setQuery] = useState(searchQuery);
	const [selectedUser, setSelectedUser] = useState<{id: string; name: string} | null>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const users = api.admin.searchUsers.useQuery({page, pageSize: PAGE_SIZE, searchQuery});

	useEffect(() => {
		setQuery(searchQuery);
	}, [searchQuery]);

	useEffect(() => {
		if (query.trim() === searchQuery) return;
		const timeout = window.setTimeout(() => {
			const nextParams = new URLSearchParams(location.search);
			if (query.trim()) nextParams.set('query', query.trim());
			else nextParams.delete('query');
			nextParams.set('page', '0');
			history.replace({pathname: location.pathname, search: nextParams.toString()});
		}, 300);
		return () => window.clearTimeout(timeout);
	}, [query, searchQuery, history, location.pathname, location.search]);

	function changePage(nextPage: number) {
		const nextParams = new URLSearchParams(location.search);
		nextParams.set('page', String(nextPage));
		history.push({pathname: location.pathname, search: nextParams.toString()});
	}

	function clearSearch() {
		setQuery('');
		inputRef.current?.focus();
	}

	const data = users.data;
	const loading = users.isPending || query.trim() !== searchQuery;

	return (
		<div className="mx-auto w-full max-w-6xl px-2 py-6 sm:px-6 sm:py-8">
			<div className="mb-7 flex items-start gap-4">
				<div className="bg-primary/10 text-primary flex size-12 shrink-0 items-center justify-center rounded-2xl">
					<Users size={24} aria-hidden />
				</div>
				<div>
					<h2 className="text-text m-0 text-2xl font-semibold tracking-tight">
						User directory
					</h2>
					<p className="text-text/60 mt-1 mb-0 text-sm">
						Find an account, review its status, and manage access.
					</p>
				</div>
			</div>

			<section
				aria-label="User search"
				className="bg-module border-tmo-module/10 overflow-hidden rounded-2xl border shadow-xs"
			>
				<div className="border-tmo-module/10 border-b p-5 sm:p-6">
					<label
						htmlFor="admin-user-search"
						className="text-text mb-2 block text-sm font-medium"
					>
						Search users
					</label>
					<div className="relative">
						<MagnifyingGlass
							size={20}
							className="text-text/40 pointer-events-none absolute top-3.5 left-4"
							aria-hidden
						/>
						<Input
							ref={inputRef}
							id="admin-user-search"
							value={query}
							onChange={(event) => setQuery(event.target.value)}
							placeholder="Search by username or email…"
							maxLength={250}
							autoComplete="off"
							spellCheck={false}
							className="h-12 rounded-xl pr-12 pl-12"
						/>
						{query && (
							<Button
								variant="ghost"
								size="icon-sm"
								onClick={clearSearch}
								aria-label="Clear search"
								className="absolute top-2 right-2"
							>
								<X aria-hidden />
							</Button>
						)}
					</div>
				</div>

				<div className="border-tmo-module/10 flex items-center justify-between gap-3 border-b px-5 py-4 sm:px-6">
					<h3 className="text-text m-0 text-sm font-semibold">
						{searchQuery ? 'Search results' : 'All users'}
					</h3>
					<span role="status" className="text-text/50 text-sm tabular-nums">
						{loading
							? 'Searching…'
							: users.isError
								? 'Search unavailable'
								: `${(data?.total ?? 0).toLocaleString()} users`}
					</span>
				</div>

				<div aria-busy={loading}>
					{loading ? (
						<div
							aria-label="Loading users"
							className="divide-tmo-module/10 divide-y motion-safe:animate-pulse"
						>
							{Array.from({length: 5}, (_, index) => (
								<div key={index} className="flex items-center gap-4 px-6 py-5">
									<div className="bg-text/5 size-10 rounded-full" />
									<div className="flex-1 space-y-2">
										<div className="bg-text/5 h-4 w-32 rounded" />
										<div className="bg-text/5 h-3 w-20 rounded" />
									</div>
									<div className="bg-text/5 h-7 w-16 rounded" />
								</div>
							))}
						</div>
					) : users.isError ? (
						<div role="alert" className="px-6 py-16 text-center">
							<p className="text-text font-medium">Unable to load users</p>
							<p className="text-text/60 mb-5 text-sm">
								Please try your search again.
							</p>
							<Button variant="outline" onClick={() => void users.refetch()}>
								Try again
							</Button>
						</div>
					) : !data?.items.length ? (
						<div className="px-6 py-16 text-center">
							<MagnifyingGlass
								size={32}
								className="text-text/30 mx-auto mb-4"
								aria-hidden
							/>
							<p className="text-text font-medium">No users found</p>
							<p className="text-text/60 mb-5 text-sm">
								{searchQuery
									? 'Try a different username or email address.'
									: 'There are no accounts on this page.'}
							</p>
							{searchQuery ? (
								<Button variant="outline" onClick={clearSearch}>
									Clear search
								</Button>
							) : (
								page > 0 && (
									<Button variant="outline" onClick={() => changePage(0)}>
										Back to first page
									</Button>
								)
							)}
						</div>
					) : (
						<ul className="divide-tmo-module/10 m-0 list-none divide-y p-0">
							{data.items.map((user) => {
								const banned =
									user.banned_forever ||
									Boolean(
										user.banned_until &&
										new Date(user.banned_until).getTime() > Date.now(),
									);
								return (
									<li
										key={user.id}
										className="hover:bg-text/[0.02] flex flex-wrap items-center gap-4 px-5 py-4 transition-colors sm:flex-nowrap sm:px-6"
									>
										<div className="min-w-0 flex-1 overflow-hidden">
											<Avatar user={user} small hideBadges />
											<p className="text-text/45 mt-1.5 mb-0 text-xs">
												Joined{' '}
												{new Date(user.created_at).toLocaleDateString(
													undefined,
													{
														month: 'short',
														day: 'numeric',
														year: 'numeric',
													},
												)}
											</p>
										</div>
										<div className="flex flex-wrap items-center gap-2">
											{user.admin && (
												<Badge variant="info" size="sm">
													<ShieldCheck aria-hidden />
													Admin
												</Badge>
											)}
											<Badge
												variant={banned ? 'destructive' : 'success'}
												size="sm"
											>
												{banned ? 'Banned' : 'Active'}
											</Badge>
										</div>
										<Button
											variant="outline"
											size="sm"
											aria-label={`Manage ${user.username || 'user'}`}
											onClick={() =>
												setSelectedUser({
													id: user.id,
													name: user.username || 'User',
												})
											}
										>
											Manage
										</Button>
									</li>
								);
							})}
						</ul>
					)}
				</div>
				{!loading && !users.isError && data && data.total > 0 && (
					<div className="border-tmo-module/10 flex flex-col items-center gap-3 border-t px-5 py-4 sm:flex-row sm:justify-between sm:px-6">
						<p className="text-text/50 m-0 text-xs tabular-nums">
							{data.items.length
								? `${(page * PAGE_SIZE + 1).toLocaleString()}–${(page * PAGE_SIZE + data.items.length).toLocaleString()} of ${data.total.toLocaleString()} users`
								: 'No users on this page'}
						</p>
						<PageControls
							className="mx-0 w-auto"
							page={page}
							totalPages={Math.ceil(data.total / PAGE_SIZE)}
							hasMore={data.hasMore}
							onPrevious={() => changePage(page - 1)}
							onNext={() => changePage(page + 1)}
						/>
					</div>
				)}
			</section>
			<Dialog
				open={selectedUser !== null}
				onOpenChange={(open) => {
					if (!open) {
						setSelectedUser(null);
						void users.refetch();
					}
				}}
			>
				{selectedUser && (
					<DialogContent width={1200}>
						<DialogHeader title={`Manage ${selectedUser.name}`} />
						<ManageUser userId={selectedUser.id} />
					</DialogContent>
				)}
			</Dialog>
		</div>
	);
}
