import {Spinner} from '@/components/ui/spinner';
import {
	getServerSolveDownloadProgress,
	getSolveDownloadProgress,
	type SolveDownloadProgress as SolveDownloadProgressState,
	subscribeSolveDownloadProgress,
} from '@/db/persist/solve-download';
import React, {useSyncExternalStore} from 'react';

function useSolveDownloadProgress() {
	return useSyncExternalStore(
		subscribeSolveDownloadProgress,
		getSolveDownloadProgress,
		getServerSolveDownloadProgress,
	);
}

function SolveDownloadMeter(props: SolveDownloadProgressState) {
	const {received, total} = props;
	const percent = (received / total) * 100;

	return (
		<div className="flex w-72 flex-col items-center gap-3">
			<p className="text-sm">Downloading solves</p>
			<div
				className="bg-tmo-module/15 h-2 w-full overflow-hidden rounded-full"
				role="progressbar"
				aria-label="Downloading solves"
				aria-valuemin={0}
				aria-valuemax={total}
				aria-valuenow={received}
				aria-valuetext={`${received.toLocaleString()} of ${total.toLocaleString()} solves`}
			>
				<div className="bg-primary h-full" style={{width: `${percent}%`}} />
			</div>
			<p className="text-secondary text-xs tabular-nums">
				{received.toLocaleString()} / {total.toLocaleString()}
			</p>
		</div>
	);
}

export function SolveDownloadOrSpinner() {
	const progress = useSolveDownloadProgress();
	if (!progress) {
		return <Spinner className="size-6" />;
	}
	return <SolveDownloadMeter {...progress} />;
}

export function SolveDownloadBanner() {
	const progress = useSolveDownloadProgress();
	if (!progress) {
		return null;
	}

	return (
		<div className="pointer-events-none fixed top-4 left-1/2 z-[9000000] -translate-x-1/2 animate-in fade-in fill-mode-backwards delay-300 duration-200">
			<div className="border-button bg-background text-text rounded-lg border px-4 py-3 shadow-md">
				<SolveDownloadMeter {...progress} />
			</div>
		</div>
	);
}
