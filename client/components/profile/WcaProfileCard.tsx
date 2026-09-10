import {Button} from '@/components/ui/button';
import {LINKED_SERVICES} from '@/shared/integration';
import {formatWcaResult, WCA_EVENTS} from '@/shared/wca';
import type {WcaBest} from '@/types/wca';
import {ArrowUpRight, ArrowClockwise} from 'phosphor-react';
import React from 'react';
import type {useWcaProfile} from './useWcaProfile';

function Result({
	eventId,
	best,
	average = false,
}: {
	eventId: string;
	best: WcaBest | null;
	average?: boolean;
}) {
	return (
		<div>
			<div className="text-sm font-semibold whitespace-nowrap tabular-nums">
				{formatWcaResult(eventId, best?.value ?? null, average)}
			</div>
			{best ? (
				<div className="text-text/50 mt-1 flex flex-wrap gap-x-3 gap-y-0.5 text-[11px] tabular-nums">
					<span>
						National{' '}
						{best.nationalRank ? `#${best.nationalRank.toLocaleString()}` : '—'}
					</span>
					<span>
						World {best.worldRank ? `#${best.worldRank.toLocaleString()}` : '—'}
					</span>
				</div>
			) : null}
		</div>
	);
}

export default function WcaProfileCard({
	linked,
	loading,
	data,
	retry,
}: ReturnType<typeof useWcaProfile>) {
	if (!linked) return null;
	const stats = data?.stats;
	const unavailable = !loading && (!data || data.status === 'unavailable');
	const latest = stats?.latestCompetition;
	return (
		<section
			aria-labelledby="official-wca-heading"
			className="border-tmo-module/10 bg-module overflow-hidden rounded-xl border"
		>
			<div className="flex flex-wrap items-start justify-between gap-3 p-5">
				<div>
					<h2
						id="official-wca-heading"
						className="flex items-center gap-2 text-lg font-semibold tracking-tight"
					>
						<img
							src={LINKED_SERVICES.wca.logoSrc}
							className="size-5 object-contain"
							alt=""
						/>
						Official WCA
					</h2>
					<p className="text-text/50 mt-1 mb-0 text-xs">
						Personal bests from official competitions.
					</p>
				</div>
				{data?.url ? (
					<a
						href={data.url}
						target="_blank"
						rel="noopener noreferrer"
						className="text-text/60 hover:text-text inline-flex items-center gap-1 text-xs underline-offset-4 hover:underline"
					>
						{data.wcaId || 'WCA profile'}
						<ArrowUpRight size={12} aria-hidden="true" />
					</a>
				) : null}
			</div>
			{loading ? (
				<div className="px-5 pb-5" role="status">
					<span className="sr-only">Loading official WCA results</span>
					<div aria-hidden="true" className="space-y-3 motion-safe:animate-pulse">
						{[0, 1, 2].map((row) => (
							<div key={row} className="bg-tmo-module/5 h-12 rounded-lg" />
						))}
					</div>
				</div>
			) : unavailable ? (
				<div
					className="flex flex-wrap items-center justify-between gap-3 px-5 pb-5"
					role="status"
				>
					<p className="text-text/60 mb-0 text-sm">
						Official results are temporarily unavailable.
					</p>
					<Button variant="outline" size="sm" onClick={retry}>
						<ArrowClockwise />
						Try again
					</Button>
				</div>
			) : data?.status === 'no_wca_id' ? (
				<p className="text-text/60 mb-0 px-5 pb-5 text-sm" role="status">
					This linked WCA account doesn’t have a WCA ID yet. Official results will appear
					once an ID is assigned and connected to that account.
				</p>
			) : data?.status === 'no_results' ? (
				<p className="text-text/60 mb-0 px-5 pb-5 text-sm" role="status">
					No official results are available yet. Newly published results may take a day to
					appear.
				</p>
			) : stats ? (
				<>
					<div className="border-tmo-module/10 mx-5 flex flex-wrap gap-x-8 gap-y-3 border-t pt-4 pb-5">
						<div>
							<div className="text-text/50 mb-1 text-xs">Competitions</div>
							<div className="text-sm font-semibold tabular-nums">
								{stats.competitionCount.toLocaleString()}
							</div>
						</div>
						<div className="min-w-0 flex-1">
							<div className="text-text/50 mb-1 text-xs">Latest competition</div>
							{latest ? (
								<>
									<a
										href={latest.url}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm font-medium underline-offset-4 hover:underline"
									>
										{latest.name}
										<ArrowUpRight
											size={12}
											className="ml-1 inline"
											aria-hidden="true"
										/>
									</a>
									<time
										dateTime={latest.date}
										className="text-text/50 mt-1 block text-xs"
									>
										{new Date(`${latest.date}T00:00:00Z`).toLocaleDateString(
											undefined,
											{
												month: 'short',
												day: 'numeric',
												year: 'numeric',
												timeZone: 'UTC',
											},
										)}
									</time>
								</>
							) : (
								<span className="text-text/60 text-sm">
									{stats.competitionDetailsUnavailable
										? 'Temporarily unavailable'
										: '—'}
								</span>
							)}
						</div>
						{stats.competitionDetailsUnavailable ? (
							<Button
								variant="ghost"
								size="sm"
								onClick={retry}
								aria-label="Retry loading competition details"
							>
								<ArrowClockwise />
								Retry
							</Button>
						) : null}
					</div>
					{stats.records.length ? (
						<div className="overflow-x-auto">
							<table className="w-full text-left">
								<caption className="sr-only">
									Official personal bests and national and world rankings by event
								</caption>
								<thead className="bg-tmo-module/[0.025] text-text/50 text-[11px]">
									<tr>
										<th scope="col" className="px-5 py-2.5 font-medium">
											Event
										</th>
										<th scope="col" className="px-3 py-2.5 font-medium">
											Single
										</th>
										<th scope="col" className="py-2.5 pr-5 pl-3 font-medium">
											Average
										</th>
									</tr>
								</thead>
								<tbody>
									{stats.records.map((record) => (
										<tr
											key={record.eventId}
											className="border-tmo-module/10 border-t"
										>
											<th
												scope="row"
												className="px-5 py-3 text-xs font-medium"
											>
												{WCA_EVENTS[record.eventId] ?? record.eventId}
											</th>
											<td className="px-3 py-3">
												<Result
													eventId={record.eventId}
													best={record.single}
												/>
											</td>
											<td className="py-3 pr-5 pl-3">
												<Result
													eventId={record.eventId}
													best={record.average}
													average
												/>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					) : (
						<p className="text-text/60 mb-0 px-5 pb-5 text-sm">
							No successful official results yet.
						</p>
					)}
				</>
			) : null}
			<div className="border-tmo-module/10 text-text/40 border-t px-5 py-3 text-[11px] leading-relaxed">
				Results maintained by the{' '}
				<a
					href="https://www.worldcubeassociation.org/export/results"
					target="_blank"
					rel="noopener noreferrer"
					className="underline underline-offset-2"
				>
					World Cube Association
				</a>
				, via the{' '}
				<a
					href="https://wca-rest-api.robiningelbrecht.be/"
					target="_blank"
					rel="noopener noreferrer"
					className="underline underline-offset-2"
				>
					unofficial results API
				</a>
				. Updated daily.
			</div>
		</section>
	);
}
