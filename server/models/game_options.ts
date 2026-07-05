import {Prisma} from '@/generated/prisma/client';
import {GameOptions} from '@/types/match';
import {getPrisma} from '../database';

export async function createGameOptions(input: Prisma.GameOptionsUncheckedCreateInput): Promise<GameOptions> {
	return getPrisma().gameOptions.create({
		data: {
			...input,
			game_type: input.game_type as any,
		},
	});
}
