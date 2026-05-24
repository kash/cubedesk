import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GameSessionSelectObjectSchema as GameSessionSelectObjectSchema } from './objects/GameSessionSelect.schema';
import { GameSessionCreateManyInputObjectSchema as GameSessionCreateManyInputObjectSchema } from './objects/GameSessionCreateManyInput.schema';

export const GameSessionCreateManyAndReturnSchema: z.ZodType<Prisma.GameSessionCreateManyAndReturnArgs> = z.object({ select: GameSessionSelectObjectSchema.optional(), data: z.union([ GameSessionCreateManyInputObjectSchema, z.array(GameSessionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.GameSessionCreateManyAndReturnArgs>;

export const GameSessionCreateManyAndReturnZodSchema = z.object({ select: GameSessionSelectObjectSchema.optional(), data: z.union([ GameSessionCreateManyInputObjectSchema, z.array(GameSessionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();