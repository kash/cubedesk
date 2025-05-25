import {MatchLobby} from '../../schemas/MatchLobby.schema';
import {generateId} from '../../../shared/code';

export function testGenerateMatchLobbyRows(count: number, options?: Partial<MatchLobby>) {
	const objects: MatchLobby[] = [];

	for (let i = 0; i < count; i += 1) {
		objects.push(testCreateMatchLobbyRow(options));
	}

	return objects;
}

export function testCreateMatchLobbyRow(options?: Partial<MatchLobby>) {
	const ml: MatchLobby = {
		id: generateId(),
		user_id: generateId(),
		cube_type: '333',
		client_id: generateId(),
		player_count: 2,
		elo: 1000,
		created_at: new Date(),
		...options,
	};

	return ml;
}
