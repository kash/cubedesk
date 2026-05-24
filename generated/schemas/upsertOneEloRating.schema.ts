import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EloRatingSelectObjectSchema as EloRatingSelectObjectSchema } from './objects/EloRatingSelect.schema';
import { EloRatingIncludeObjectSchema as EloRatingIncludeObjectSchema } from './objects/EloRatingInclude.schema';
import { EloRatingWhereUniqueInputObjectSchema as EloRatingWhereUniqueInputObjectSchema } from './objects/EloRatingWhereUniqueInput.schema';
import { EloRatingCreateInputObjectSchema as EloRatingCreateInputObjectSchema } from './objects/EloRatingCreateInput.schema';
import { EloRatingUncheckedCreateInputObjectSchema as EloRatingUncheckedCreateInputObjectSchema } from './objects/EloRatingUncheckedCreateInput.schema';
import { EloRatingUpdateInputObjectSchema as EloRatingUpdateInputObjectSchema } from './objects/EloRatingUpdateInput.schema';
import { EloRatingUncheckedUpdateInputObjectSchema as EloRatingUncheckedUpdateInputObjectSchema } from './objects/EloRatingUncheckedUpdateInput.schema';

export const EloRatingUpsertOneSchema: z.ZodType<Prisma.EloRatingUpsertArgs> = z.object({ select: EloRatingSelectObjectSchema.optional(), include: EloRatingIncludeObjectSchema.optional(), where: EloRatingWhereUniqueInputObjectSchema, create: z.union([ EloRatingCreateInputObjectSchema, EloRatingUncheckedCreateInputObjectSchema ]), update: z.union([ EloRatingUpdateInputObjectSchema, EloRatingUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.EloRatingUpsertArgs>;

export const EloRatingUpsertOneZodSchema = z.object({ select: EloRatingSelectObjectSchema.optional(), include: EloRatingIncludeObjectSchema.optional(), where: EloRatingWhereUniqueInputObjectSchema, create: z.union([ EloRatingCreateInputObjectSchema, EloRatingUncheckedCreateInputObjectSchema ]), update: z.union([ EloRatingUpdateInputObjectSchema, EloRatingUncheckedUpdateInputObjectSchema ]) }).strict();