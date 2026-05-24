import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EloRatingSelectObjectSchema as EloRatingSelectObjectSchema } from './objects/EloRatingSelect.schema';
import { EloRatingIncludeObjectSchema as EloRatingIncludeObjectSchema } from './objects/EloRatingInclude.schema';
import { EloRatingWhereUniqueInputObjectSchema as EloRatingWhereUniqueInputObjectSchema } from './objects/EloRatingWhereUniqueInput.schema';

export const EloRatingFindUniqueSchema: z.ZodType<Prisma.EloRatingFindUniqueArgs> = z.object({ select: EloRatingSelectObjectSchema.optional(), include: EloRatingIncludeObjectSchema.optional(), where: EloRatingWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EloRatingFindUniqueArgs>;

export const EloRatingFindUniqueZodSchema = z.object({ select: EloRatingSelectObjectSchema.optional(), include: EloRatingIncludeObjectSchema.optional(), where: EloRatingWhereUniqueInputObjectSchema }).strict();