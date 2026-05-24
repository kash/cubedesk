import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GameSessionSelectObjectSchema as GameSessionSelectObjectSchema } from './objects/GameSessionSelect.schema';
import { GameSessionUpdateManyMutationInputObjectSchema as GameSessionUpdateManyMutationInputObjectSchema } from './objects/GameSessionUpdateManyMutationInput.schema';
import { GameSessionWhereInputObjectSchema as GameSessionWhereInputObjectSchema } from './objects/GameSessionWhereInput.schema';

export const GameSessionUpdateManyAndReturnSchema: z.ZodType<Prisma.GameSessionUpdateManyAndReturnArgs> = z.object({ select: GameSessionSelectObjectSchema.optional(), data: GameSessionUpdateManyMutationInputObjectSchema, where: GameSessionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GameSessionUpdateManyAndReturnArgs>;

export const GameSessionUpdateManyAndReturnZodSchema = z.object({ select: GameSessionSelectObjectSchema.optional(), data: GameSessionUpdateManyMutationInputObjectSchema, where: GameSessionWhereInputObjectSchema.optional() }).strict();