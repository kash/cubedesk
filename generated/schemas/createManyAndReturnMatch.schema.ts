import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchSelectObjectSchema as MatchSelectObjectSchema } from './objects/MatchSelect.schema';
import { MatchCreateManyInputObjectSchema as MatchCreateManyInputObjectSchema } from './objects/MatchCreateManyInput.schema';

export const MatchCreateManyAndReturnSchema: z.ZodType<Prisma.MatchCreateManyAndReturnArgs> = z.object({ select: MatchSelectObjectSchema.optional(), data: z.union([ MatchCreateManyInputObjectSchema, z.array(MatchCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.MatchCreateManyAndReturnArgs>;

export const MatchCreateManyAndReturnZodSchema = z.object({ select: MatchSelectObjectSchema.optional(), data: z.union([ MatchCreateManyInputObjectSchema, z.array(MatchCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();