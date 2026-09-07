import type {AdminMetricsResponse} from '@/types/admin-metrics';
import AdminMetricsChart, {type MetricsSeries} from '@/components/admin/AdminMetricsChart';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {NativeSelect} from '@/components/ui/native-select';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';
import {trpc} from '@/util/trpc';
import React, {useEffect, useState} from 'react';

const VOLUME: MetricsSeries[] = [
	{key: 'solves', label: 'Registered solves', color: '#69bfa6'},
	{key: 'demoSolves', label: 'Demo solves', color: '#83a7f5'},
	{key: 'imports', label: 'Imports', color: '#db9a53'},
];
const ACTIVITY: MetricsSeries[] = [
	{key: 'activeUsers', label: 'Registered DAU', color: '#69bfa6'},
	{key: 'demoSessions', label: 'Active demo sessions', color: '#83a7f5'},
];
const SIGNUPS: MetricsSeries[] = [{key: 'signups', label: 'New accounts', color: '#ad91e3'}];
const CATEGORY_NAMES = {timer: 'Timer', trainer: 'Trainer', '1v1': '1v1', other: 'Other'};

export default function AdminMetrics() {
	const [result, setResult] = useState<AdminMetricsResponse | null>(null);
	const [range, setRange] = useState(30);
	const [revision, setRevision] = useState(0);
	useEffect(() => {
		let cancelled = false;
		let timer: ReturnType<typeof setTimeout> | undefined;
		async function load() {
			try {
				const response = await trpc.admin.getMetrics.query();
				if (cancelled) return;
				setResult(response);
				if (response.status === 'preparing')
					timer = setTimeout(() => {
						void load();
					}, 5000);
			} catch {
				if (!cancelled) setResult({status: 'unavailable'});
			}
		}
		void load();
		return () => {
			cancelled = true;
			clearTimeout(timer);
		};
	}, [revision]);
	const snapshot = result?.status === 'ready' ? result.snapshot : null;
	const days = snapshot?.days.slice(-range) ?? [];
	const totals = snapshot?.totals;
	const cards: [string, number][] =
		snapshot && totals
			? [
					[
						'Total solve records',
						totals.registeredSolves + totals.importedSolves + totals.demoSolves,
					],
					['Registered solves', totals.registeredSolves],
					['Imported solves', totals.importedSolves],
					['Demo solves', totals.demoSolves],
					['Registered accounts', totals.accounts],
					['DAU · today', snapshot.activeUsers.daily],
					['WAU · 7 days', snapshot.activeUsers.weekly],
					['MAU · 30 days', snapshot.activeUsers.monthly],
				]
			: [];
	return (
		<div className="mx-auto w-full max-w-7xl space-y-6 p-2">
			<div className="flex flex-wrap items-center justify-between gap-3">
				<div>
					<h2 className="text-xl font-semibold">Metrics</h2>
					{snapshot && (
						<div className="text-text/45 mt-1 flex flex-wrap items-center gap-x-2 text-xs">
							<time dateTime={snapshot.completedAt}>
								Updated{' '}
								{new Date(snapshot.completedAt).toLocaleString(undefined, {
									month: 'short',
									day: 'numeric',
									hour: '2-digit',
									minute: '2-digit',
									hour12: false,
									timeZone: 'UTC',
								})}{' '}
								UTC
							</time>
							{result?.status === 'ready' && result.stale && (
								<span role="status">· Update overdue</span>
							)}
						</div>
					)}
				</div>
				<Button variant="secondary" onClick={() => setRevision((value) => value + 1)}>
					Reload
				</Button>
			</div>
			{(!result || result.status === 'preparing') && (
				<p role="status" className="text-text/60 py-12 text-center">
					{result
						? 'Preparing the first metrics snapshot. This may take a few minutes…'
						: 'Loading metrics…'}
				</p>
			)}
			{result?.status === 'unavailable' && (
				<p role="alert" className="text-text/60 py-12 text-center">
					Metrics are temporarily unavailable. Try reloading in a few minutes.
				</p>
			)}
			{snapshot && (
				<>
					<div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
						{cards.map(([label, value]) => (
							<Card key={label} className="gap-2 py-5">
								<CardHeader>
									<h3 className="text-text/60 text-sm">{label}</h3>
								</CardHeader>
								<CardContent className="text-3xl font-semibold tabular-nums">
									{value.toLocaleString()}
								</CardContent>
							</Card>
						))}
					</div>
					<div className="flex flex-wrap items-center justify-between gap-3">
						<div>
							<h3 className="text-base font-semibold whitespace-nowrap">
								Daily trends
							</h3>
						</div>
						<div className="w-40 shrink-0">
							<NativeSelect
								aria-label="Daily trend date range"
								value={range}
								onChange={(event) => setRange(Number(event.target.value))}
							>
								{[7, 30, 90].map((value) => (
									<option key={value} value={value}>
										Last {value} days
									</option>
								))}
							</NativeSelect>
						</div>
					</div>
					<div className="grid gap-4 lg:grid-cols-2">
						<AdminMetricsChart title="Solve volume" days={days} series={VOLUME} />
						<AdminMetricsChart title="Daily activity" days={days} series={ACTIVITY} />
					</div>
					<AdminMetricsChart title="Signups" days={days} series={SIGNUPS} />
					<details className="border-text/15 rounded-xl border p-4">
						<summary className="cursor-pointer font-medium">
							Daily figures · last {range} days
						</summary>
						<Table className="mt-4">
							<TableHeader>
								<TableRow>
									{[
										'Date (UTC)',
										'Registered solves',
										'Imports',
										'DAU',
										'Demo solves',
										'Demo sessions',
										'Signups',
									].map((label) => (
										<TableHead key={label}>{label}</TableHead>
									))}
								</TableRow>
							</TableHeader>
							<TableBody>
								{[...days].reverse().map((day) => (
									<TableRow key={day.date}>
										<TableCell className="whitespace-nowrap">
											{day.date}
										</TableCell>
										{[
											day.solves,
											day.imports,
											day.activeUsers,
											day.demoSolves,
											day.demoSessions,
											day.signups,
										].map((value, index) => (
											<TableCell key={index} className="tabular-nums">
												{value.toLocaleString()}
											</TableCell>
										))}
									</TableRow>
								))}
							</TableBody>
						</Table>
					</details>
					<Card>
						<CardHeader>
							<CardTitle>Solves by puzzle and activity · last 90 days</CardTitle>
						</CardHeader>
						<CardContent>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Puzzle</TableHead>
										<TableHead>Activity</TableHead>
										<TableHead className="text-right">Solves</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{snapshot.breakdown.map((row) => (
										<TableRow
											key={JSON.stringify([row.cubeType, row.category])}
										>
											<TableCell>{row.cubeType || 'Unknown'}</TableCell>
											<TableCell>{CATEGORY_NAMES[row.category]}</TableCell>
											<TableCell className="text-right tabular-nums">
												{row.solves.toLocaleString()}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
							{!snapshot.breakdown.length && (
								<p className="text-text/60 py-6 text-center">
									No registered solves in this period.
								</p>
							)}
						</CardContent>
					</Card>
				</>
			)}
		</div>
	);
}
