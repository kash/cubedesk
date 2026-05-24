import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GameOptionsWhereInputObjectSchema as GameOptionsWhereInputObjectSchema } from './objects/GameOptionsWhereInput.schema';

export const GameOptionsDeleteManySchema: z.ZodType<Prisma.GameOptionsDeleteManyArgs> = z.object({ where: GameOptionsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GameOptionsDeleteManyArgs>;

export const GameOptionsDeleteManyZodSchema = z.object({ where: GameOptionsWhereInputObjectSchema.optional() }).strict();