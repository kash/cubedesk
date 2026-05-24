import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GameSessionWhereInputObjectSchema as GameSessionWhereInputObjectSchema } from './objects/GameSessionWhereInput.schema';

export const GameSessionDeleteManySchema: z.ZodType<Prisma.GameSessionDeleteManyArgs> = z.object({ where: GameSessionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GameSessionDeleteManyArgs>;

export const GameSessionDeleteManyZodSchema = z.object({ where: GameSessionWhereInputObjectSchema.optional() }).strict();