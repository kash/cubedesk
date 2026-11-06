import type {AdminMetricsResponse} from '@/types/admin-metrics';
import AdminMetricsChart, {type MetricsSeries} from '@/components/admin/AdminMetricsChart';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {NativeSelect} from '@/components/ui/native-select';
import {getEventTypeName} from '@/util/cubes/util';
import {trpc} from '@/util/trpc';
import React, {useEffect, useState} from 'react';

const REGISTERED_SOLVES: MetricsSeries[] = [
	{key: 'solves', label: 'Registered solves', color: '#69bfa6'},
];
const DEMO_SOLVES: MetricsSeries[] = [{key: 'demoSolves', label: 'Demo solves', color: '#83a7f5'}];
const IMPORTS: MetricsSeries[] = [
	{key: 'importsSucceeded', label: 'Successful imports', color: '#69bfa6'},
	{key: 'importsFailed', label: 'Failed imports', color: '#e78080'},
];
const ACTIVITY: MetricsSeries[] = [
	{key: 'activeUsers', label: 'Registered DAU', color: '#69bfa6'},
	{key: 'demoSessions', label: 'Active demo sessions', color: '#83a7f5'},
];
const SIGNUPS: MetricsSeries[] = [{key: 'signups', label: 'New accounts', color: '#ad91e3'}];
const TRAINER_SOLVES: MetricsSeries[] = [
	{key: 'trainerSolves', label: 'Trainer solves', color: '#e2b65c'},
];
const TRAINER_USAGE: MetricsSeries[] = [
	{key: 'trainerUsers', label: 'Trainer users', color: '#e2b65c'},
	{key: 'trainerSessions', label: 'Training sessions', color: '#83a7f5'},
];

function StatCards({cards}: {cards: [string, string | number][]}) {
	return (
		<div className="grid grid-cols-2 gap-2 sm:gap-3 xl:grid-cols-4">
			{cards.map(([label, value]) => (
				<Card key={label} className="gap-1 py-3 sm:gap-2 sm:py-5">
					<CardHeader className="px-3 sm:px-6">
						<h3 className="text-text/60 text-xs sm:text-sm">{label}</h3>
					</CardHeader>
					<CardContent className="px-3 text-2xl font-semibold tabular-nums sm:px-6 sm:text-3xl">
						{typeof value === 'number' ? value.toLocaleString() : value}
					</CardContent>
				</Card>
			))}
		</div>
	);
}

function BarList(props: {
	title: string;
	note: string;
	empty: string;
	rows: {label: string; value: number; detail?: string}[];
}) {
	const max = Math.max(1, ...props.rows.map((row) => row.value));
	return (
		<Card className="min-w-0 gap-3 py-4 sm:gap-4 sm:py-6">
			<CardHeader className="px-4 sm:px-6">
				<CardTitle>{props.title}</CardTitle>
				<p className="text-text/50 text-xs">{props.note}</p>
			</CardHeader>
			<CardContent className="space-y-2.5 px-4 sm:px-6">
				{props.rows.map((row) => (
					<div key={row.label} className="space-y-1">
						<div className="flex items-baseline justify-between gap-3 text-sm">
							<span className="truncate">{row.label}</span>
							<span className="text-text/60 shrink-0 text-xs tabular-nums">
								<span className="text-text text-sm font-medium">
									{row.value.toLocaleString()}
								</span>
								{row.detail && ` · ${row.detail}`}
							</span>
						</div>
						<div className="bg-text/10 h-1.5 overflow-hidden rounded-full">
							<div
								className="h-full rounded-full bg-[#e2b65c]"
								style={{width: `${(row.value / max) * 100}%`}}
							/>
						</div>
					</div>
				))}
				{!props.rows.length && (
					<p className="text-text/60 py-6 text-center text-sm">{props.empty}</p>
				)}
			</CardContent>
		</Card>
	);
}

export default function AdminMetrics() {
	const [result, setResult] = useState<AdminMetricsResponse | null>(null);
	const [range, setRange] = useState(90);
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
	const trainer = snapshot?.trainer;
	const monthlyTrainerSolves = snapshot?.days
		.slice(-30)
		.reduce((sum, day) => sum + day.trainerSolves, 0);
	const trainerCards: [string, string | number][] =
		snapshot && trainer
			? [
					['Users · 7 days', trainer.users.weekly],
					['Users · 30 days', trainer.users.monthly],
					[
						'Share of MAU',
						snapshot.activeUsers.monthly
							? `${Math.round((trainer.users.monthly / snapshot.activeUsers.monthly) * 100)}%`
							: '—',
					],
					['Solves · 30 days', monthlyTrainerSolves ?? 0],
				]
			: [];
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
					<StatCards cards={cards} />
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
						<AdminMetricsChart
							title="Registered solves"
							days={days}
							series={REGISTERED_SOLVES}
						/>
						<AdminMetricsChart title="Demo solves" days={days} series={DEMO_SOLVES} />
						<AdminMetricsChart title="Daily activity" days={days} series={ACTIVITY} />
						<AdminMetricsChart title="Signups" days={days} series={SIGNUPS} />
						<div className="space-y-2">
							<AdminMetricsChart
								title="Import operations"
								days={days}
								series={IMPORTS}
							/>
							<p className="text-text/50 px-2 text-xs">
								Import tracking started September 2026. Counts are per import, by
								start date (UTC).{' '}
								{days
									.reduce((sum, day) => sum + day.importsPending, 0)
									.toLocaleString()}{' '}
								pending or unresolved in this period.
							</p>
						</div>
					</div>
					{trainer && (
						<section className="space-y-4 pt-4" aria-labelledby="trainer-metrics">
							<h3 id="trainer-metrics" className="text-base font-semibold">
								Trainer
							</h3>
							<StatCards cards={trainerCards} />
							<div className="grid gap-4 lg:grid-cols-2">
								<AdminMetricsChart
									title="Trainer solves"
									days={days}
									series={TRAINER_SOLVES}
								/>
								<AdminMetricsChart
									title="Trainer usage"
									days={days}
									series={TRAINER_USAGE}
								/>
								<BarList
									title="Session length"
									note="Training sessions by number of solves · last 90 days"
									empty="No training sessions in this period."
									rows={
										trainer.sessionLengths.some((bucket) => bucket.sessions)
											? trainer.sessionLengths.map((bucket) => ({
													label: `${bucket.label} ${bucket.label === '1' ? 'solve' : 'solves'}`,
													value: bucket.sessions,
												}))
											: []
									}
								/>
								<BarList
									title="Trainer by puzzle"
									note="Solves and users · last 90 days"
									empty="No trainer solves in this period."
									rows={trainer.puzzles.map((puzzle) => ({
										label: puzzle.eventType
											? (getEventTypeName(puzzle.eventType) ??
												puzzle.eventType)
											: 'Unknown',
										value: puzzle.solves,
										detail: `${puzzle.users.toLocaleString()} ${puzzle.users === 1 ? 'user' : 'users'}`,
									}))}
								/>
							</div>
						</section>
					)}
				</>
			)}
		</div>
	);
}
