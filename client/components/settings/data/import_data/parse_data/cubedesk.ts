import {v4 as uuid} from 'uuid';
import {IImportDataContext, ImportableData} from '../ImportData';
import {Session} from '../../../../../@types/generated/graphql';
import {fetchSessions} from '../../../../../db/sessions/query';
import {parseCubeDeskLegacyData} from './cubedesk_legacy';
import {Solve} from '../../../../../../server/schemas/Solve.schema';

interface CubeDeskExportSchema {
	solves: Solve[];
	sessions: Session[];
}

export function parseCubeDeskData(txt: string, context: IImportDataContext): ImportableData {
	const currentSessions = fetchSessions();
	let importedData: CubeDeskExportSchema;

	try {
		importedData = JSON.parse(txt);

		// Checking for legacy version
		if (!importedData.sessions && (importedData as any).timer) {
			return parseCubeDeskLegacyData(txt, context);
		}
	} catch (e) {
		throw new Error('Invalid import file. Please make sure this is a valid file exported from CubeDesk');
	}

	const sessions = [];

	const oldNewSessionMap: Record<string, string> = {};
	for (const session of importedData.sessions) {
		const newSession: Session = {
			id: uuid(),
			name: session.name,
		};

		if (session.order !== undefined) {
			newSession.order = currentSessions.length + session.order;
		}

		oldNewSessionMap[session.id] = newSession.id;
		sessions.push(newSession);
	}

	const solves = getUpdatedSolves(importedData.solves, oldNewSessionMap);

	return {
		sessions,
		solves,
	};
}

function getUpdatedSolves(solves: Solve[], oldNewSessionMap: Record<string, string>) {
	const newSolves: Solve[] = [];

	for (const solve of solves) {
		const sessionId = solve.session_id;
		const trainerName = solve.trainer_name;

		if (!sessionId && !trainerName) {
			continue;
		}

		delete solve.bulk;
		delete solve.from_timer;
		delete solve.created_at;

		if (trainerName) {
			delete solve.session_id;
		} else {
			const newSessionId = oldNewSessionMap[sessionId];
			if (newSessionId) {
				solve.session_id = newSessionId;
			} else {
				throw new Error(
					'There is a solve in this data that is not associated with a session. Terminating import.'
				);
			}
		}

		newSolves.push(solve);
	}

	return newSolves;
}
