import {getPrisma} from '../database';
import {Prisma} from '@prisma/client';
import {GameOptions} from '../schemas/GameOptions.schema';

export async function createGameOptions(input: Prisma.GameOptionsUncheckedCreateInput): Promise<GameOptions> {
	return getPrisma().gameOptions.create({
		data: {
			...input,
			game_type: input.game_type as any,
		},
	});
}
