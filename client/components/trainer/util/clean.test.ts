import {cleanTrainerAlgorithm} from './clean';
import {getLokiDb, initLokiDb} from '@/db/lokijs';
import type {TrainerAlgorithmExtended} from '@/db/trainer/init';
import {toggleTrainerAlgoFavorite} from '@/db/trainer/operations';
import {fetchTrainerAlgorithmById} from '@/db/trainer/query';
import {trpc} from '@/util/trpc';

jest.mock('@/util/trpc', () => ({
	trpc: {
		trainer: {
			createFavorite: {mutate: jest.fn().mockResolvedValue({})},
			deleteFavorite: {mutate: jest.fn().mockResolvedValue({})},
		},
	},
}));

beforeEach(() => {
	jest.clearAllMocks();
	initLokiDb();
	getLokiDb().addCollection<TrainerAlgorithmExtended>('trainer', {unique: ['id']});
});

it.each([false, true])('toggles favorite=%s after reloading saved overrides', (favorite) => {
	// listAlgorithmOverrides returns full database rows, including the override's own ID.
	const savedOverride = {
		id: 'override-id',
		cube_key: 'case-id',
		user_id: 'user-id',
		created_at: '2026-09-08T00:00:00.000Z',
		name: 'Edited case',
		solution: "R U R'",
		rotate: 90,
		scrambles: '',
	};
	const algo = getLokiDb().getCollection<TrainerAlgorithmExtended>('trainer').insert({
		id: 'case-id',
		name: 'Original case',
		cube_type: '333',
		algo_type: 'OLL',
		favorite,
		overrides: savedOverride,
	})!;
	const clean = cleanTrainerAlgorithm(algo);

	expect(clean).toMatchObject({id: 'case-id', name: 'Edited case', solution: "R U R'", rotate: 90});
	toggleTrainerAlgoFavorite(clean);
	expect(fetchTrainerAlgorithmById('case-id')?.favorite).toBe(!favorite);
	const mutation = favorite ? trpc.trainer.deleteFavorite : trpc.trainer.createFavorite;
	expect(mutation.mutate).toHaveBeenCalledWith({cubeKey: 'case-id'});
});
