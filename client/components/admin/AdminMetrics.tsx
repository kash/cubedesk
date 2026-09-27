import {useTranslation} from 'react-i18next';
import type {AdminMetricsResponse} from '@/types/admin-metrics';
import AdminMetricsChart, {type MetricsSeries} from '@/components/admin/AdminMetricsChart';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {NativeSelect} from '@/components/ui/native-select';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';
import {trpc} from '@/util/trpc';
import React, {useEffect, useState} from 'react';

const VOLUME: MetricsSeries[] = [
	{key: 'solves', label: 'admin.metrics.registeredSolves', color: '#69bfa6'},
	{key: 'demoSolves', label: 'admin.metrics.demoSolves', color: '#83a7f5'},
	{key: 'imports', label: 'admin.metrics.importedSolves', color: '#db9a53'},
];
const IMPORTS: MetricsSeries[] = [
	{key: 'importsSucceeded', label: 'admin.metrics.successfulImports', color: '#69bfa6'},
	{key: 'importsFailed', label: 'admin.metrics.failedImports', color: '#e78080'},
];
const ACTIVITY: MetricsSeries[] = [
	{key: 'activeUsers', label: 'admin.metrics.registeredDau', color: '#69bfa6'},
	{key: 'demoSessions', label: 'admin.metrics.activeDemoSessions', color: '#83a7f5'},
];
const SIGNUPS: MetricsSeries[] = [
	{key: 'signups', label: 'admin.metrics.newAccounts', color: '#ad91e3'},
];
const CATEGORY_NAMES = {
	timer: 'timer.timer',
	trainer: 'trainer.trainer',
	'1v1': 'common.value1v1',
	other: 'common.other',
};

export default function AdminMetrics() {
	const {t, i18n} = useTranslation();
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
						t('admin.metrics.totalSolveRecords'),
						totals.registeredSolves + totals.importedSolves + totals.demoSolves,
					],
					[t('admin.metrics.registeredSolves'), totals.registeredSolves],
					[t('admin.metrics.importedSolves'), totals.importedSolves],
					[t('admin.metrics.demoSolves'), totals.demoSolves],
					[t('admin.metrics.registeredAccounts'), totals.accounts],
					[t('admin.metrics.dauToday'), snapshot.activeUsers.daily],
					[t('admin.metrics.wau7Days'), snapshot.activeUsers.weekly],
					[t('admin.metrics.mau30Days'), snapshot.activeUsers.monthly],
				]
			: [];
	return (
		<div className="mx-auto w-full max-w-7xl space-y-6 p-2">
			<div className="flex flex-wrap items-center justify-between gap-3">
				<div>
					<h2 className="text-xl font-semibold">{t('admin.metrics')}</h2>
					{snapshot && (
						<div className="text-text/45 mt-1 flex flex-wrap items-center gap-x-2 text-xs">
							<time dateTime={snapshot.completedAt}>
								{t('admin.metrics.updated')}{' '}
								{new Date(snapshot.completedAt).toLocaleString(i18n.language, {
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
								<span role="status">{t('admin.metrics.updateOverdue')}</span>
							)}
						</div>
					)}
				</div>
				<Button variant="secondary" onClick={() => setRevision((value) => value + 1)}>
					{t('common.reload')}
				</Button>
			</div>
			{(!result || result.status === 'preparing') && (
				<p role="status" className="text-text/60 py-12 text-center">
					{result ? t('admin.metrics.preparing') : t('admin.metrics.loading')}
				</p>
			)}
			{result?.status === 'unavailable' && (
				<p role="alert" className="text-text/60 py-12 text-center">
					{t('admin.metrics.unavailable')}
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
									{value.toLocaleString(i18n.language)}
								</CardContent>
							</Card>
						))}
					</div>
					<div className="flex flex-wrap items-center justify-between gap-3">
						<div>
							<h3 className="text-base font-semibold whitespace-nowrap">
								{t('admin.metrics.dailyTrends')}
							</h3>
						</div>
						<div className="w-40 shrink-0">
							<NativeSelect
								aria-label={t('admin.metrics.dateRange')}
								value={range}
								onChange={(event) => setRange(Number(event.target.value))}
							>
								{[7, 30, 90].map((value) => (
									<option key={value} value={value}>
										{t('admin.metrics.lastDays', {count: value})}
									</option>
								))}
							</NativeSelect>
						</div>
					</div>
					<div className="grid gap-4 lg:grid-cols-2">
						<AdminMetricsChart
							title={t('admin.metrics.solveVolume')}
							days={days}
							series={VOLUME.map((entry) => ({...entry, label: t(entry.label)}))}
						/>
						<AdminMetricsChart
							title={t('admin.metrics.dailyActivity')}
							days={days}
							series={ACTIVITY.map((entry) => ({...entry, label: t(entry.label)}))}
						/>
					</div>
					<div className="grid gap-4 lg:grid-cols-2">
						<AdminMetricsChart
							title={t('admin.metrics.signups')}
							days={days}
							series={SIGNUPS.map((entry) => ({...entry, label: t(entry.label)}))}
						/>
						<div className="space-y-2">
							<AdminMetricsChart
								title={t('admin.metrics.importOperations')}
								days={days}
								series={IMPORTS.map((entry) => ({...entry, label: t(entry.label)}))}
							/>
							<p className="text-text/50 px-2 text-xs">
								{t('admin.metrics.importTrackingSummary', {
									count: days.reduce((sum, day) => sum + day.importsPending, 0),
									formattedCount: new Intl.NumberFormat(i18n.language).format(
										days.reduce((sum, day) => sum + day.importsPending, 0),
									),
								})}
							</p>
						</div>
					</div>
					<details className="border-text/15 rounded-xl border p-4">
						<summary className="cursor-pointer font-medium">
							{t('admin.metrics.dailyFiguresLastDays', {count: range})}
						</summary>
						<Table className="mt-4">
							<TableHeader>
								<TableRow>
									{[
										t('admin.metrics.dateUtc'),
										t('admin.metrics.registeredSolves'),
										t('admin.metrics.importedSolves'),
										t('admin.metrics.dau'),
										t('admin.metrics.demoSolves'),
										t('admin.metrics.demoSessions'),
										t('admin.metrics.signupsLabel'),
										t('admin.metrics.successfulImports'),
										t('admin.metrics.failedImports'),
										t('admin.metrics.pendingImports'),
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
											day.importsSucceeded,
											day.importsFailed,
											day.importsPending,
										].map((value, index) => (
											<TableCell key={index} className="tabular-nums">
												{value.toLocaleString(i18n.language)}
											</TableCell>
										))}
									</TableRow>
								))}
							</TableBody>
						</Table>
					</details>
					<Card>
						<CardHeader>
							<CardTitle>{t('admin.metrics.solvesByPuzzleTitle')}</CardTitle>
						</CardHeader>
						<CardContent>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>{t('common.puzzle')}</TableHead>
										<TableHead>{t('stats.activity')}</TableHead>
										<TableHead className="text-right">
											{t('solves.solves')}
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{snapshot.breakdown.map((row) => (
										<TableRow
											key={JSON.stringify([row.cubeType, row.category])}
										>
											<TableCell>
												{row.cubeType || t('common.unknown')}
											</TableCell>
											<TableCell>{t(CATEGORY_NAMES[row.category])}</TableCell>
											<TableCell className="text-right tabular-nums">
												{row.solves.toLocaleString(i18n.language)}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
							{!snapshot.breakdown.length && (
								<p className="text-text/60 py-6 text-center">
									{t('solves.noRegisteredSolvesInThisPeriod')}
								</p>
							)}
						</CardContent>
					</Card>
				</>
			)}
		</div>
	);
}
