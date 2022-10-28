import {v4 as uuid} from 'uuid';
import {IImportDataContext, ImportableData} from '../ImportData';
import {Session} from '../../../../../@types/generated/graphql';
import {fetchSessions} from '../../../../../db/sessions/query';
import {Solve} from '../../../../../../server/schemas/Solve.schema';

type LegacySession = {
	id: string;
	name: string;
	order: number;
	createdAt: string;
	cubeTypes: string[];
	solves: Record<string, [any[]]>;
};

type LegacyDataSessionMap = Record<string, LegacySession>;

interface CubeDeskLegacyExportSchema {
	timer: {
		sessionMap: LegacyDataSessionMap;
	};
}

/**
 * Need to keep this around (forever) because the (v1) export type differs from the new export versions. The old version
 * was based on how the Redux store was structured, but the new version is based on the sessions and solves data.
 */
export function parseCubeDeskLegacyData(txt: string, context: IImportDataContext): ImportableData {
	const currentSessions = fetchSessions();
	let sessionMap: LegacyDataSessionMap;

	try {
		sessionMap = (JSON.parse(txt) as CubeDeskLegacyExportSchema).timer.sessionMap;
	} catch (e) {
		throw new Error('Invalid import file. Please make sure this is a valid file exported from CubeDesk');
	}

	const sessionIds = Object.keys(sessionMap);

	const sessions = [];
	let solves = [];
	for (const id of sessionIds) {
		const session = sessionMap[id];

		const newSession: Session = {
			id: uuid(),
			name: session.name,
		};

		if (session.order !== undefined) {
			newSession.order = currentSessions.length + session.order;
		}

		const sessionSolves = getSessionSolves(newSession, session);

		sessions.push(newSession);
		solves = solves.concat(sessionSolves);
	}

	return {
		sessions,
		solves,
	};
}

function getSessionSolves(newSession: Session, sessionMap: LegacySession) {
	const cubeTypes = Object.keys(sessionMap.solves);

	const output: Solve[] = [];

	for (const ct of cubeTypes) {
		const solves = sessionMap.solves[ct];
		for (const solve of solves) {
			const newSolve = convertSolveArrayToObject(solve);

			delete newSolve.id;
			newSolve.session_id = newSession.id;
			output.push(newSolve);
		}
	}

	return output;
}

const solveArrayIndexMapping: (keyof Solve)[] = [
	'time',
	'raw_time',
	'cube_type',
	'scramble',
	'session_id',
	'started_at',
	'ended_at',
	'id',
	'dnf',
	'plus_two',
	'notes',
	'trainer_name',
	'is_smart_cube',
	'match_id',
];

export function convertSolveArrayToObject(solveArr: any[]): Solve {
	// Should be of type Solve but TypeScript is being difficult
	const solve: any = {};

	for (let i = 0; i < solveArr.length; i += 1) {
		const solveKey = solveArrayIndexMapping[i];
		const value = solveArr[i] as any;

		solve[solveKey] = value;
	}

	return solve as Solve;
}
