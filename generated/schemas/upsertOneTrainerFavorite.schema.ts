import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TrainerFavoriteSelectObjectSchema as TrainerFavoriteSelectObjectSchema } from './objects/TrainerFavoriteSelect.schema';
import { TrainerFavoriteIncludeObjectSchema as TrainerFavoriteIncludeObjectSchema } from './objects/TrainerFavoriteInclude.schema';
import { TrainerFavoriteWhereUniqueInputObjectSchema as TrainerFavoriteWhereUniqueInputObjectSchema } from './objects/TrainerFavoriteWhereUniqueInput.schema';
import { TrainerFavoriteCreateInputObjectSchema as TrainerFavoriteCreateInputObjectSchema } from './objects/TrainerFavoriteCreateInput.schema';
import { TrainerFavoriteUncheckedCreateInputObjectSchema as TrainerFavoriteUncheckedCreateInputObjectSchema } from './objects/TrainerFavoriteUncheckedCreateInput.schema';
import { TrainerFavoriteUpdateInputObjectSchema as TrainerFavoriteUpdateInputObjectSchema } from './objects/TrainerFavoriteUpdateInput.schema';
import { TrainerFavoriteUncheckedUpdateInputObjectSchema as TrainerFavoriteUncheckedUpdateInputObjectSchema } from './objects/TrainerFavoriteUncheckedUpdateInput.schema';

export const TrainerFavoriteUpsertOneSchema: z.ZodType<Prisma.TrainerFavoriteUpsertArgs> = z.object({ select: TrainerFavoriteSelectObjectSchema.optional(), include: TrainerFavoriteIncludeObjectSchema.optional(), where: TrainerFavoriteWhereUniqueInputObjectSchema, create: z.union([ TrainerFavoriteCreateInputObjectSchema, TrainerFavoriteUncheckedCreateInputObjectSchema ]), update: z.union([ TrainerFavoriteUpdateInputObjectSchema, TrainerFavoriteUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TrainerFavoriteUpsertArgs>;

export const TrainerFavoriteUpsertOneZodSchema = z.object({ select: TrainerFavoriteSelectObjectSchema.optional(), include: TrainerFavoriteIncludeObjectSchema.optional(), where: TrainerFavoriteWhereUniqueInputObjectSchema, create: z.union([ TrainerFavoriteCreateInputObjectSchema, TrainerFavoriteUncheckedCreateInputObjectSchema ]), update: z.union([ TrainerFavoriteUpdateInputObjectSchema, TrainerFavoriteUncheckedUpdateInputObjectSchema ]) }).strict();