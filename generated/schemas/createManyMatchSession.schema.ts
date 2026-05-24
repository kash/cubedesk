import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchSessionCreateManyInputObjectSchema as MatchSessionCreateManyInputObjectSchema } from './objects/MatchSessionCreateManyInput.schema';

export const MatchSessionCreateManySchema: z.ZodType<Prisma.MatchSessionCreateManyArgs> = z.object({ data: z.union([ MatchSessionCreateManyInputObjectSchema, z.array(MatchSessionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.MatchSessionCreateManyArgs>;

export const MatchSessionCreateManyZodSchema = z.object({ data: z.union([ MatchSessionCreateManyInputObjectSchema, z.array(MatchSessionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();