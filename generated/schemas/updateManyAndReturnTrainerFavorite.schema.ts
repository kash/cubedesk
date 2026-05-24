import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TrainerFavoriteSelectObjectSchema as TrainerFavoriteSelectObjectSchema } from './objects/TrainerFavoriteSelect.schema';
import { TrainerFavoriteUpdateManyMutationInputObjectSchema as TrainerFavoriteUpdateManyMutationInputObjectSchema } from './objects/TrainerFavoriteUpdateManyMutationInput.schema';
import { TrainerFavoriteWhereInputObjectSchema as TrainerFavoriteWhereInputObjectSchema } from './objects/TrainerFavoriteWhereInput.schema';

export const TrainerFavoriteUpdateManyAndReturnSchema: z.ZodType<Prisma.TrainerFavoriteUpdateManyAndReturnArgs> = z.object({ select: TrainerFavoriteSelectObjectSchema.optional(), data: TrainerFavoriteUpdateManyMutationInputObjectSchema, where: TrainerFavoriteWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TrainerFavoriteUpdateManyAndReturnArgs>;

export const TrainerFavoriteUpdateManyAndReturnZodSchema = z.object({ select: TrainerFavoriteSelectObjectSchema.optional(), data: TrainerFavoriteUpdateManyMutationInputObjectSchema, where: TrainerFavoriteWhereInputObjectSchema.optional() }).strict();