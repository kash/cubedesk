import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TrainerFavoriteWhereInputObjectSchema as TrainerFavoriteWhereInputObjectSchema } from './objects/TrainerFavoriteWhereInput.schema';

export const TrainerFavoriteDeleteManySchema: z.ZodType<Prisma.TrainerFavoriteDeleteManyArgs> = z.object({ where: TrainerFavoriteWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TrainerFavoriteDeleteManyArgs>;

export const TrainerFavoriteDeleteManyZodSchema = z.object({ where: TrainerFavoriteWhereInputObjectSchema.optional() }).strict();