import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EloRatingSelectObjectSchema as EloRatingSelectObjectSchema } from './objects/EloRatingSelect.schema';
import { EloRatingIncludeObjectSchema as EloRatingIncludeObjectSchema } from './objects/EloRatingInclude.schema';
import { EloRatingCreateInputObjectSchema as EloRatingCreateInputObjectSchema } from './objects/EloRatingCreateInput.schema';
import { EloRatingUncheckedCreateInputObjectSchema as EloRatingUncheckedCreateInputObjectSchema } from './objects/EloRatingUncheckedCreateInput.schema';

export const EloRatingCreateOneSchema: z.ZodType<Prisma.EloRatingCreateArgs> = z.object({ select: EloRatingSelectObjectSchema.optional(), include: EloRatingIncludeObjectSchema.optional(), data: z.union([EloRatingCreateInputObjectSchema, EloRatingUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.EloRatingCreateArgs>;

export const EloRatingCreateOneZodSchema = z.object({ select: EloRatingSelectObjectSchema.optional(), include: EloRatingIncludeObjectSchema.optional(), data: z.union([EloRatingCreateInputObjectSchema, EloRatingUncheckedCreateInputObjectSchema]) }).strict();