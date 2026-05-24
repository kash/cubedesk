import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const trainerfavoritescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TrainerFavoriteScalarWhereInputObjectSchema), z.lazy(() => TrainerFavoriteScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TrainerFavoriteScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TrainerFavoriteScalarWhereInputObjectSchema), z.lazy(() => TrainerFavoriteScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  cube_key: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TrainerFavoriteScalarWhereInputObjectSchema: z.ZodType<Prisma.TrainerFavoriteScalarWhereInput> = trainerfavoritescalarwhereinputSchema as unknown as z.ZodType<Prisma.TrainerFavoriteScalarWhereInput>;
export const TrainerFavoriteScalarWhereInputObjectZodSchema = trainerfavoritescalarwhereinputSchema;
