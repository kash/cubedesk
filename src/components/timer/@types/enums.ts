export enum TimerModuleType {
	HISTORY = 'history',
	LAST_SOLVE = 'last_solve',
	TRAINER_ALGO = 'trainer_algo',
	STATS = 'stats',
	SESSION_STATS = 'session_stats',
	SCRAMBLE = 'scramble',
	SOLVE_GRAPH = 'solve_graph',
	TIME_DISTRO = 'time_distro',
	CONSISTENCY = 'consistency',
	CHAT = 'chat',
	NONE = 'none',
}

export type TimerModuleDropdownOptions = {
	label: string;
	value: TimerModuleType;
};
