import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const trainerfavoritescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TrainerFavoriteScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TrainerFavoriteScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TrainerFavoriteScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TrainerFavoriteScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TrainerFavoriteScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  cube_key: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TrainerFavoriteScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TrainerFavoriteScalarWhereWithAggregatesInput> = trainerfavoritescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TrainerFavoriteScalarWhereWithAggregatesInput>;
export const TrainerFavoriteScalarWhereWithAggregatesInputObjectZodSchema = trainerfavoritescalarwherewithaggregatesinputSchema;
