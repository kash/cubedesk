import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EloRatingUpdateManyMutationInputObjectSchema as EloRatingUpdateManyMutationInputObjectSchema } from './objects/EloRatingUpdateManyMutationInput.schema';
import { EloRatingWhereInputObjectSchema as EloRatingWhereInputObjectSchema } from './objects/EloRatingWhereInput.schema';

export const EloRatingUpdateManySchema: z.ZodType<Prisma.EloRatingUpdateManyArgs> = z.object({ data: EloRatingUpdateManyMutationInputObjectSchema, where: EloRatingWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EloRatingUpdateManyArgs>;

export const EloRatingUpdateManyZodSchema = z.object({ data: EloRatingUpdateManyMutationInputObjectSchema, where: EloRatingWhereInputObjectSchema.optional() }).strict();