import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GameOptionsSelectObjectSchema as GameOptionsSelectObjectSchema } from './objects/GameOptionsSelect.schema';
import { GameOptionsCreateManyInputObjectSchema as GameOptionsCreateManyInputObjectSchema } from './objects/GameOptionsCreateManyInput.schema';

export const GameOptionsCreateManyAndReturnSchema: z.ZodType<Prisma.GameOptionsCreateManyAndReturnArgs> = z.object({ select: GameOptionsSelectObjectSchema.optional(), data: z.union([ GameOptionsCreateManyInputObjectSchema, z.array(GameOptionsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.GameOptionsCreateManyAndReturnArgs>;

export const GameOptionsCreateManyAndReturnZodSchema = z.object({ select: GameOptionsSelectObjectSchema.optional(), data: z.union([ GameOptionsCreateManyInputObjectSchema, z.array(GameOptionsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();