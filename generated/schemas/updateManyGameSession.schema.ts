import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GameSessionUpdateManyMutationInputObjectSchema as GameSessionUpdateManyMutationInputObjectSchema } from './objects/GameSessionUpdateManyMutationInput.schema';
import { GameSessionWhereInputObjectSchema as GameSessionWhereInputObjectSchema } from './objects/GameSessionWhereInput.schema';

export const GameSessionUpdateManySchema: z.ZodType<Prisma.GameSessionUpdateManyArgs> = z.object({ data: GameSessionUpdateManyMutationInputObjectSchema, where: GameSessionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GameSessionUpdateManyArgs>;

export const GameSessionUpdateManyZodSchema = z.object({ data: GameSessionUpdateManyMutationInputObjectSchema, where: GameSessionWhereInputObjectSchema.optional() }).strict();