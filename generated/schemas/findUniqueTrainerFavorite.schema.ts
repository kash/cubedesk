import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TrainerFavoriteSelectObjectSchema as TrainerFavoriteSelectObjectSchema } from './objects/TrainerFavoriteSelect.schema';
import { TrainerFavoriteIncludeObjectSchema as TrainerFavoriteIncludeObjectSchema } from './objects/TrainerFavoriteInclude.schema';
import { TrainerFavoriteWhereUniqueInputObjectSchema as TrainerFavoriteWhereUniqueInputObjectSchema } from './objects/TrainerFavoriteWhereUniqueInput.schema';

export const TrainerFavoriteFindUniqueSchema: z.ZodType<Prisma.TrainerFavoriteFindUniqueArgs> = z.object({ select: TrainerFavoriteSelectObjectSchema.optional(), include: TrainerFavoriteIncludeObjectSchema.optional(), where: TrainerFavoriteWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TrainerFavoriteFindUniqueArgs>;

export const TrainerFavoriteFindUniqueZodSchema = z.object({ select: TrainerFavoriteSelectObjectSchema.optional(), include: TrainerFavoriteIncludeObjectSchema.optional(), where: TrainerFavoriteWhereUniqueInputObjectSchema }).strict();