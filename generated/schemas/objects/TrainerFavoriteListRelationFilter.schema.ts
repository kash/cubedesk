import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TrainerFavoriteWhereInputObjectSchema as TrainerFavoriteWhereInputObjectSchema } from './TrainerFavoriteWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TrainerFavoriteWhereInputObjectSchema).optional(),
  some: z.lazy(() => TrainerFavoriteWhereInputObjectSchema).optional(),
  none: z.lazy(() => TrainerFavoriteWhereInputObjectSchema).optional()
}).strict();
export const TrainerFavoriteListRelationFilterObjectSchema: z.ZodType<Prisma.TrainerFavoriteListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TrainerFavoriteListRelationFilter>;
export const TrainerFavoriteListRelationFilterObjectZodSchema = makeSchema();
