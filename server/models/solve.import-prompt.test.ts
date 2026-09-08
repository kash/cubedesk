import {bulkCreateSolves} from './solve';
import {getPrisma} from '@/server/database';
import type {SolveInput} from '@/types/solve';
import type {UserAccount} from '@/types/user';

jest.mock('@/server/database', () => ({getPrisma: jest.fn()}));

const user = {id: 'importing-user'} as UserAccount;
const solves = [{time: 12, raw_time: 12, cube_type: '333', scramble: 'R U', session_id: 'session'}] as SolveInput[];

function setup(count: number) {
	const tx = {
		solve: {createMany: jest.fn().mockResolvedValue({count})},
		userFeatureState: {upsert: jest.fn().mockResolvedValue({})},
	};
	(getPrisma as jest.Mock).mockReturnValue({$transaction: (work) => work(tx)});
	return tx;
}

it('records successful imports in the same transaction as the imported solves', async () => {
	const tx = setup(1);
	await expect(bulkCreateSolves(user, solves)).resolves.toEqual({count: 1});
	expect(tx.solve.createMany).toHaveBeenCalledWith({
		data: [expect.objectContaining({bulk: true, user_id: user.id})],
	});
	expect(tx.userFeatureState.upsert).toHaveBeenCalledWith({
		where: {user_id: user.id},
		create: {user_id: user.id, import_prompt_hidden: true},
		update: {import_prompt_hidden: true},
	});
});

it('does not hide the prompt for an empty import', async () => {
	const tx = setup(0);
	await bulkCreateSolves(user, []);
	expect(tx.userFeatureState.upsert).not.toHaveBeenCalled();
});

it('does not hide the prompt when importing fails', async () => {
	const tx = setup(1);
	tx.solve.createMany.mockRejectedValue(new Error('Import failed'));
	await expect(bulkCreateSolves(user, solves)).rejects.toThrow('Import failed');
	expect(tx.userFeatureState.upsert).not.toHaveBeenCalled();
});
