import type {TranslationDictionary} from '../../types';

const messages: TranslationDictionary = {
	'sessions.createFailed': 'Server error: Could not create session',
	'sessions.demoSession': 'Demo session',
	'sessions.demoPuzzleSession': 'Demo {puzzle} session',
	'sessions.mergeConfirmTitle': 'Merge sessions',
	'sessions.mergeConfirmDescription':
		'You are about to merge "{source}" into "{target}". "{source}" will be deleted after the merge.',
	'sessions.mergeConfirmButton': 'Merge sessions',
	'sessions.actionsFor': 'Actions for {name}',
	'sessions.reorder': 'Reorder {name}',
	'sessions.untitledSession': 'Untitled session',
	'sessions.loadError': 'Could not load existing sessions.',
	'sessions.createdAt': 'Created {date}',
	'sessions.solveTimesChart': 'Solve times in chronological order',
	'sessions.timeDistributionChart': 'Number of completed solves in each time range',
	'sessions.session': 'Session',
	'sessions.selectSession': 'Select session',
	'sessions.importDemoSolves': 'Import demo solves?',
	'sessions.importIntoSession': 'Import into session',
	'sessions.makeCurrent': 'Make current',
	'sessions.mergeSession': 'Merge session',
	'sessions.sessions': 'Sessions',
	'sessions.createASession': 'Create a session',
	'sessions.createNewSession': 'Create new session',
	'sessions.organizationHint':
		"In CubeDesk, sessions can have multiple cube types. You can split up sessions however you'd like: by cube type, by day, etc.",
	'sessions.deleteSession': 'Delete session',
	'sessions.deleteWarning':
		'Be careful here. You are about to delete "{name}". This action is irreversible.',
	'sessions.successfullyDeletedSession': 'Successfully deleted session "{name}"',
	'sessions.yourSessions': 'Your sessions',
	'sessions.chartDescription': 'Completed solves, oldest to newest · Grouped for longer sessions',
	'sessions.solvesPerSession': 'Solves per session',
	'sessions.newSession': 'New session',
	'sessions.sessionName': 'Session name',
	'sessions.analytics.solveCount_one': '{count} solve',
	'sessions.analytics.solveCount_other': '{count} solves',
	'sessions.analytics.rangeCount_one': '{count} range',
	'sessions.analytics.rangeCount_other': '{count} ranges',
	'sessions.youCanChangeThisLater': 'You can change this later',
	'sessions.createSession': 'Create Session',
	'sessions.saveToDefaultPrompt': 'Save these solves to your default session.',
	'sessions.loadingSessions': 'Loading sessions…',
	'sessions.createSessionPrompt': 'Create a session to start organizing your solves.',
};

export default messages;
