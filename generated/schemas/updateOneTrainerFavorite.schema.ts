import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TrainerFavoriteSelectObjectSchema as TrainerFavoriteSelectObjectSchema } from './objects/TrainerFavoriteSelect.schema';
import { TrainerFavoriteIncludeObjectSchema as TrainerFavoriteIncludeObjectSchema } from './objects/TrainerFavoriteInclude.schema';
import { TrainerFavoriteUpdateInputObjectSchema as TrainerFavoriteUpdateInputObjectSchema } from './objects/TrainerFavoriteUpdateInput.schema';
import { TrainerFavoriteUncheckedUpdateInputObjectSchema as TrainerFavoriteUncheckedUpdateInputObjectSchema } from './objects/TrainerFavoriteUncheckedUpdateInput.schema';
import { TrainerFavoriteWhereUniqueInputObjectSchema as TrainerFavoriteWhereUniqueInputObjectSchema } from './objects/TrainerFavoriteWhereUniqueInput.schema';

export const TrainerFavoriteUpdateOneSchema: z.ZodType<Prisma.TrainerFavoriteUpdateArgs> = z.object({ select: TrainerFavoriteSelectObjectSchema.optional(), include: TrainerFavoriteIncludeObjectSchema.optional(), data: z.union([TrainerFavoriteUpdateInputObjectSchema, TrainerFavoriteUncheckedUpdateInputObjectSchema]), where: TrainerFavoriteWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TrainerFavoriteUpdateArgs>;

export const TrainerFavoriteUpdateOneZodSchema = z.object({ select: TrainerFavoriteSelectObjectSchema.optional(), include: TrainerFavoriteIncludeObjectSchema.optional(), data: z.union([TrainerFavoriteUpdateInputObjectSchema, TrainerFavoriteUncheckedUpdateInputObjectSchema]), where: TrainerFavoriteWhereUniqueInputObjectSchema }).strict();