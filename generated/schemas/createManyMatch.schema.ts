import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchCreateManyInputObjectSchema as MatchCreateManyInputObjectSchema } from './objects/MatchCreateManyInput.schema';

export const MatchCreateManySchema: z.ZodType<Prisma.MatchCreateManyArgs> = z.object({ data: z.union([ MatchCreateManyInputObjectSchema, z.array(MatchCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.MatchCreateManyArgs>;

export const MatchCreateManyZodSchema = z.object({ data: z.union([ MatchCreateManyInputObjectSchema, z.array(MatchCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();