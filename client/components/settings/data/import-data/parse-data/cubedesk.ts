import {IImportDataContext, ImportableData} from '@/components/settings/data/import-data/ImportData';
import {parseCubeDeskLegacyData} from '@/components/settings/data/import-data/parse-data/cubedesk-legacy';
import {fetchSessions} from '@/db/sessions/query';
import {SessionInput} from '@/types/session';
import {Solve} from '@/types/solve';
import {v4 as uuid} from 'uuid';

interface CubeDeskExportSchema {
	solves: Solve[];
	sessions: SessionInput[];
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

	const sessions: SessionInput[] = [];

	const oldNewSessionMap: Record<string, string> = {};
	for (const session of importedData.sessions) {
		const newSession: SessionInput = {
			id: uuid(),
			name: session.name,
		};

		if (session.order !== undefined && session.order !== null) {
			newSession.order = currentSessions.length + session.order;
		}

		oldNewSessionMap[session.id as string] = newSession.id as string;
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

		delete (solve as Partial<Solve>).bulk;
		delete (solve as Partial<Solve>).from_timer;
		delete (solve as Partial<Solve>).created_at;

		if (trainerName) {
			delete (solve as Partial<Solve>).session_id;
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
