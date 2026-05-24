import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GameSessionCreateManyInputObjectSchema as GameSessionCreateManyInputObjectSchema } from './objects/GameSessionCreateManyInput.schema';

export const GameSessionCreateManySchema: z.ZodType<Prisma.GameSessionCreateManyArgs> = z.object({ data: z.union([ GameSessionCreateManyInputObjectSchema, z.array(GameSessionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.GameSessionCreateManyArgs>;

export const GameSessionCreateManyZodSchema = z.object({ data: z.union([ GameSessionCreateManyInputObjectSchema, z.array(GameSessionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();