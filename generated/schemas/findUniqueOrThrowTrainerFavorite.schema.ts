import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TrainerFavoriteSelectObjectSchema as TrainerFavoriteSelectObjectSchema } from './objects/TrainerFavoriteSelect.schema';
import { TrainerFavoriteIncludeObjectSchema as TrainerFavoriteIncludeObjectSchema } from './objects/TrainerFavoriteInclude.schema';
import { TrainerFavoriteWhereUniqueInputObjectSchema as TrainerFavoriteWhereUniqueInputObjectSchema } from './objects/TrainerFavoriteWhereUniqueInput.schema';

export const TrainerFavoriteFindUniqueOrThrowSchema: z.ZodType<Prisma.TrainerFavoriteFindUniqueOrThrowArgs> = z.object({ select: TrainerFavoriteSelectObjectSchema.optional(), include: TrainerFavoriteIncludeObjectSchema.optional(), where: TrainerFavoriteWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TrainerFavoriteFindUniqueOrThrowArgs>;

export const TrainerFavoriteFindUniqueOrThrowZodSchema = z.object({ select: TrainerFavoriteSelectObjectSchema.optional(), include: TrainerFavoriteIncludeObjectSchema.optional(), where: TrainerFavoriteWhereUniqueInputObjectSchema }).strict();