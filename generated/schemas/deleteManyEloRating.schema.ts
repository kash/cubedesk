import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EloRatingWhereInputObjectSchema as EloRatingWhereInputObjectSchema } from './objects/EloRatingWhereInput.schema';

export const EloRatingDeleteManySchema: z.ZodType<Prisma.EloRatingDeleteManyArgs> = z.object({ where: EloRatingWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EloRatingDeleteManyArgs>;

export const EloRatingDeleteManyZodSchema = z.object({ where: EloRatingWhereInputObjectSchema.optional() }).strict();