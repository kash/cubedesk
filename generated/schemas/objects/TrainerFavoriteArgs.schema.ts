import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TrainerFavoriteSelectObjectSchema as TrainerFavoriteSelectObjectSchema } from './TrainerFavoriteSelect.schema';
import { TrainerFavoriteIncludeObjectSchema as TrainerFavoriteIncludeObjectSchema } from './TrainerFavoriteInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TrainerFavoriteSelectObjectSchema).optional(),
  include: z.lazy(() => TrainerFavoriteIncludeObjectSchema).optional()
}).strict();
export const TrainerFavoriteArgsObjectSchema = makeSchema();
export const TrainerFavoriteArgsObjectZodSchema = makeSchema();
