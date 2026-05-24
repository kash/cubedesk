import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GameOptionsCreateManyInputObjectSchema as GameOptionsCreateManyInputObjectSchema } from './objects/GameOptionsCreateManyInput.schema';

export const GameOptionsCreateManySchema: z.ZodType<Prisma.GameOptionsCreateManyArgs> = z.object({ data: z.union([ GameOptionsCreateManyInputObjectSchema, z.array(GameOptionsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.GameOptionsCreateManyArgs>;

export const GameOptionsCreateManyZodSchema = z.object({ data: z.union([ GameOptionsCreateManyInputObjectSchema, z.array(GameOptionsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();