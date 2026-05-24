import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EloRatingSelectObjectSchema as EloRatingSelectObjectSchema } from './objects/EloRatingSelect.schema';
import { EloRatingIncludeObjectSchema as EloRatingIncludeObjectSchema } from './objects/EloRatingInclude.schema';
import { EloRatingWhereUniqueInputObjectSchema as EloRatingWhereUniqueInputObjectSchema } from './objects/EloRatingWhereUniqueInput.schema';

export const EloRatingDeleteOneSchema: z.ZodType<Prisma.EloRatingDeleteArgs> = z.object({ select: EloRatingSelectObjectSchema.optional(), include: EloRatingIncludeObjectSchema.optional(), where: EloRatingWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EloRatingDeleteArgs>;

export const EloRatingDeleteOneZodSchema = z.object({ select: EloRatingSelectObjectSchema.optional(), include: EloRatingIncludeObjectSchema.optional(), where: EloRatingWhereUniqueInputObjectSchema }).strict();