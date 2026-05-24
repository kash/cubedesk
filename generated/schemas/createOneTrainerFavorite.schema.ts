import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TrainerFavoriteSelectObjectSchema as TrainerFavoriteSelectObjectSchema } from './objects/TrainerFavoriteSelect.schema';
import { TrainerFavoriteIncludeObjectSchema as TrainerFavoriteIncludeObjectSchema } from './objects/TrainerFavoriteInclude.schema';
import { TrainerFavoriteCreateInputObjectSchema as TrainerFavoriteCreateInputObjectSchema } from './objects/TrainerFavoriteCreateInput.schema';
import { TrainerFavoriteUncheckedCreateInputObjectSchema as TrainerFavoriteUncheckedCreateInputObjectSchema } from './objects/TrainerFavoriteUncheckedCreateInput.schema';

export const TrainerFavoriteCreateOneSchema: z.ZodType<Prisma.TrainerFavoriteCreateArgs> = z.object({ select: TrainerFavoriteSelectObjectSchema.optional(), include: TrainerFavoriteIncludeObjectSchema.optional(), data: z.union([TrainerFavoriteCreateInputObjectSchema, TrainerFavoriteUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TrainerFavoriteCreateArgs>;

export const TrainerFavoriteCreateOneZodSchema = z.object({ select: TrainerFavoriteSelectObjectSchema.optional(), include: TrainerFavoriteIncludeObjectSchema.optional(), data: z.union([TrainerFavoriteCreateInputObjectSchema, TrainerFavoriteUncheckedCreateInputObjectSchema]) }).strict();