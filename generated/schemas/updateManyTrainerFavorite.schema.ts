import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TrainerFavoriteUpdateManyMutationInputObjectSchema as TrainerFavoriteUpdateManyMutationInputObjectSchema } from './objects/TrainerFavoriteUpdateManyMutationInput.schema';
import { TrainerFavoriteWhereInputObjectSchema as TrainerFavoriteWhereInputObjectSchema } from './objects/TrainerFavoriteWhereInput.schema';

export const TrainerFavoriteUpdateManySchema: z.ZodType<Prisma.TrainerFavoriteUpdateManyArgs> = z.object({ data: TrainerFavoriteUpdateManyMutationInputObjectSchema, where: TrainerFavoriteWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TrainerFavoriteUpdateManyArgs>;

export const TrainerFavoriteUpdateManyZodSchema = z.object({ data: TrainerFavoriteUpdateManyMutationInputObjectSchema, where: TrainerFavoriteWhereInputObjectSchema.optional() }).strict();