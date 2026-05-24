import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EloRatingSelectObjectSchema as EloRatingSelectObjectSchema } from './objects/EloRatingSelect.schema';
import { EloRatingIncludeObjectSchema as EloRatingIncludeObjectSchema } from './objects/EloRatingInclude.schema';
import { EloRatingUpdateInputObjectSchema as EloRatingUpdateInputObjectSchema } from './objects/EloRatingUpdateInput.schema';
import { EloRatingUncheckedUpdateInputObjectSchema as EloRatingUncheckedUpdateInputObjectSchema } from './objects/EloRatingUncheckedUpdateInput.schema';
import { EloRatingWhereUniqueInputObjectSchema as EloRatingWhereUniqueInputObjectSchema } from './objects/EloRatingWhereUniqueInput.schema';

export const EloRatingUpdateOneSchema: z.ZodType<Prisma.EloRatingUpdateArgs> = z.object({ select: EloRatingSelectObjectSchema.optional(), include: EloRatingIncludeObjectSchema.optional(), data: z.union([EloRatingUpdateInputObjectSchema, EloRatingUncheckedUpdateInputObjectSchema]), where: EloRatingWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EloRatingUpdateArgs>;

export const EloRatingUpdateOneZodSchema = z.object({ select: EloRatingSelectObjectSchema.optional(), include: EloRatingIncludeObjectSchema.optional(), data: z.union([EloRatingUpdateInputObjectSchema, EloRatingUncheckedUpdateInputObjectSchema]), where: EloRatingWhereUniqueInputObjectSchema }).strict();