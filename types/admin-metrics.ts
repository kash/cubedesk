export type SolveCategory = 'timer' | 'trainer' | '1v1' | 'other';

export interface AdminMetricsDay {
	date: string;
	solves: number;
	imports: number;
	importsSucceeded: number;
	importsFailed: number;
	importsPending: number;
	activeUsers: number;
	demoSolves: number;
	demoSessions: number;
	signups: number;
	trainerSolves: number;
	trainerSessions: number;
}

export interface AdminMetricsSnapshot {
	version: 4;
	cutoff: string;
	completedAt: string;
	totals: {
		registeredSolves: number;
		importedSolves: number;
		demoSolves: number;
		accounts: number;
	};
	activeUsers: {daily: number; weekly: number; monthly: number};
	days: AdminMetricsDay[];
}

export type AdminMetricsResponse =
	| {status: 'ready'; snapshot: AdminMetricsSnapshot; stale: boolean}
	| {status: 'preparing' | 'unavailable'};
