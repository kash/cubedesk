import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EloRatingSelectObjectSchema as EloRatingSelectObjectSchema } from './objects/EloRatingSelect.schema';
import { EloRatingCreateManyInputObjectSchema as EloRatingCreateManyInputObjectSchema } from './objects/EloRatingCreateManyInput.schema';

export const EloRatingCreateManyAndReturnSchema: z.ZodType<Prisma.EloRatingCreateManyAndReturnArgs> = z.object({ select: EloRatingSelectObjectSchema.optional(), data: z.union([ EloRatingCreateManyInputObjectSchema, z.array(EloRatingCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.EloRatingCreateManyAndReturnArgs>;

export const EloRatingCreateManyAndReturnZodSchema = z.object({ select: EloRatingSelectObjectSchema.optional(), data: z.union([ EloRatingCreateManyInputObjectSchema, z.array(EloRatingCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();