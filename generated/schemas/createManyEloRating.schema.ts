import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EloRatingCreateManyInputObjectSchema as EloRatingCreateManyInputObjectSchema } from './objects/EloRatingCreateManyInput.schema';

export const EloRatingCreateManySchema: z.ZodType<Prisma.EloRatingCreateManyArgs> = z.object({ data: z.union([ EloRatingCreateManyInputObjectSchema, z.array(EloRatingCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.EloRatingCreateManyArgs>;

export const EloRatingCreateManyZodSchema = z.object({ data: z.union([ EloRatingCreateManyInputObjectSchema, z.array(EloRatingCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();