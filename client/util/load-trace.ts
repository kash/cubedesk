import {UserAccount} from '@/types/user';
import * as Sentry from '@sentry/browser';

type TraceSpan = NonNullable<ReturnType<typeof Sentry.startInactiveSpan>>;

export interface LoadTrace {
	step<T>(name: string, run: () => T | Promise<T>): Promise<T>;
	set(key: string, value: string | number | boolean): void;
	finish(): void;
}

export const noLoadTrace: LoadTrace = {
	step: async (_name, run) => run(),
	set: () => {},
	finish: () => {},
};

export function startLoadTrace(me: UserAccount): LoadTrace {
	if (!me.admin) {
		return noLoadTrace;
	}

	const startTime = performance.now();
	const root = Sentry.startInactiveSpan({
		name: 'Load app data',
		op: 'app.load',
		forceTransaction: true,
		sampled: true,
		attributes: {
			user_id: me.id,
			since_navigation_ms: Math.round(startTime),
		},
	});

	if (!root) {
		return noLoadTrace;
	}

	let solveListEntry: PerformanceResourceTiming | null = null;
	const observer = new PerformanceObserver((list) => {
		for (const entry of list.getEntries()) {
			if (
				entry instanceof PerformanceResourceTiming &&
				entry.name.includes('/trpc/solve.list')
			) {
				solveListEntry = entry;
			}
		}
	});
	observer.observe({type: 'resource'});

	return {
		async step(name, run) {
			const span = Sentry.withActiveSpan(root, () =>
				Sentry.startInactiveSpan({name, op: 'app.load.step'}),
			);
			try {
				return await run();
			} finally {
				span?.end();
			}
		},
		set(key, value) {
			root.setAttribute(key, value);
		},
		finish() {
			const render = Sentry.withActiveSpan(root, () =>
				Sentry.startInactiveSpan({name: 'render', op: 'app.load.step'}),
			);
			setTimeout(() => {
				render?.end();
				observer.disconnect();
				if (solveListEntry) {
					addSolveListTiming(root, solveListEntry);
				}
				root.end();
			});
		},
	};
}

function addSolveListTiming(root: TraceSpan, entry: PerformanceResourceTiming) {
	root.setAttributes({
		'solve_list.wait_ms': Math.round(entry.responseStart - entry.requestStart),
		'solve_list.download_ms': Math.round(entry.responseEnd - entry.responseStart),
		'solve_list.encoded_bytes': entry.encodedBodySize,
		'solve_list.decoded_bytes': entry.decodedBodySize,
	});

	for (const timing of entry.serverTiming) {
		root.setAttribute(`solve_list.server_${timing.name}_ms`, Math.round(timing.duration));
	}
}
