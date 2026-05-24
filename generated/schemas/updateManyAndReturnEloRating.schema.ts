import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EloRatingSelectObjectSchema as EloRatingSelectObjectSchema } from './objects/EloRatingSelect.schema';
import { EloRatingUpdateManyMutationInputObjectSchema as EloRatingUpdateManyMutationInputObjectSchema } from './objects/EloRatingUpdateManyMutationInput.schema';
import { EloRatingWhereInputObjectSchema as EloRatingWhereInputObjectSchema } from './objects/EloRatingWhereInput.schema';

export const EloRatingUpdateManyAndReturnSchema: z.ZodType<Prisma.EloRatingUpdateManyAndReturnArgs> = z.object({ select: EloRatingSelectObjectSchema.optional(), data: EloRatingUpdateManyMutationInputObjectSchema, where: EloRatingWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EloRatingUpdateManyAndReturnArgs>;

export const EloRatingUpdateManyAndReturnZodSchema = z.object({ select: EloRatingSelectObjectSchema.optional(), data: EloRatingUpdateManyMutationInputObjectSchema, where: EloRatingWhereInputObjectSchema.optional() }).strict();