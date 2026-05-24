import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchSessionSelectObjectSchema as MatchSessionSelectObjectSchema } from './objects/MatchSessionSelect.schema';
import { MatchSessionCreateManyInputObjectSchema as MatchSessionCreateManyInputObjectSchema } from './objects/MatchSessionCreateManyInput.schema';

export const MatchSessionCreateManyAndReturnSchema: z.ZodType<Prisma.MatchSessionCreateManyAndReturnArgs> = z.object({ select: MatchSessionSelectObjectSchema.optional(), data: z.union([ MatchSessionCreateManyInputObjectSchema, z.array(MatchSessionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.MatchSessionCreateManyAndReturnArgs>;

export const MatchSessionCreateManyAndReturnZodSchema = z.object({ select: MatchSessionSelectObjectSchema.optional(), data: z.union([ MatchSessionCreateManyInputObjectSchema, z.array(MatchSessionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();