import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';
import {UserAccountSolvesSummary, UserAccountSummary} from '@/types/admin';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import {getTimeString} from '@/util/time';
import {CaretDown, Timer} from 'phosphor-react';
import React from 'react';

function SolveTable({title, rows}: {title: string; rows: UserAccountSolvesSummary[]}) {
	return (
		<div className="min-w-0">
			<h4 className="text-text m-0 mb-3 text-sm font-semibold">{title}</h4>
			{rows.length ? (
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Puzzle</TableHead>
							<TableHead className="text-right">Solves</TableHead>
							<TableHead className="text-right">Average</TableHead>
							<TableHead className="text-right">Best</TableHead>
							<TableHead className="text-right">Worst</TableHead>
							<TableHead className="text-right">Total time</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.cube_type ?? 'unknown'}>
								<TableCell className="font-medium">
									{getCubeTypeInfoById(row.cube_type ?? '')?.name ??
										row.cube_type ??
										'Unknown'}
								</TableCell>
								<TableCell className="text-right tabular-nums">
									{row.count.toLocaleString()}
								</TableCell>
								{[row.average, row.min_time, row.max_time, row.sum].map(
									(value, index) => (
										<TableCell key={index} className="text-right tabular-nums">
											{value === null ? '—' : getTimeString(value, 2)}
										</TableCell>
									),
								)}
							</TableRow>
						))}
					</TableBody>
				</Table>
			) : (
				<p className="text-text/50 m-0 text-sm">No solves recorded.</p>
			)}
		</div>
	);
}

export default function UserSummary({summary}: {summary: UserAccountSummary}) {
	const stats = [
		['Solves', summary.solves],
		['Bans', summary.bans],
		['Reports received', summary.reports_for],
		['Reports submitted', summary.reports_created],
	] as const;
	const winRate =
		summary.matches.count > 0
			? `${((summary.matches.wins / summary.matches.count) * 100).toFixed(1)}%`
			: '—';

	return (
		<div className="space-y-5">
			<dl className="m-0 grid grid-cols-2 gap-3 sm:grid-cols-4">
				{stats.map(([label, value]) => (
					<div
						key={label}
						className="border-tmo-module/10 bg-text/[0.025] rounded-xl border p-4"
					>
						<dt className="text-text/55 text-xs">{label}</dt>
						<dd className="text-text m-0 mt-2 text-2xl font-semibold tracking-tight tabular-nums">
							{value.toLocaleString()}
						</dd>
					</div>
				))}
			</dl>
			<details className="group border-tmo-module/10 rounded-xl border">
				<summary className="text-text focus-visible:outline-primary flex cursor-pointer list-none items-center gap-3 rounded-xl p-4 focus-visible:outline-2 [&::-webkit-details-marker]:hidden">
					<Timer size={20} className="text-text/45" aria-hidden />
					<span className="flex-1">
						<span className="block text-sm font-medium">Solve statistics</span>
						<span className="text-text/50 mt-1 block text-xs">
							Timer times, puzzle breakdowns, and 1v1 performance
						</span>
					</span>
					<CaretDown
						className="text-text/50 transition-transform group-open:rotate-180"
						aria-hidden
					/>
				</summary>
				<div className="border-tmo-module/10 space-y-6 border-t p-4 sm:p-5">
					<dl className="m-0 grid grid-cols-2 gap-4 sm:grid-cols-4">
						{[
							['Matches', summary.matches.count.toLocaleString()],
							['Wins', summary.matches.wins.toLocaleString()],
							['Losses', summary.matches.losses.toLocaleString()],
							['Win rate', winRate],
						].map(([label, value]) => (
							<div key={label}>
								<dt className="text-text/50 text-xs">{label}</dt>
								<dd className="text-text m-0 mt-1 text-lg font-medium tabular-nums">
									{value}
								</dd>
							</div>
						))}
					</dl>
					<SolveTable title="Timer solves" rows={summary.timer_solves} />
					<SolveTable title="1v1 solves" rows={summary.match_solves} />
				</div>
			</details>
		</div>
	);
}
