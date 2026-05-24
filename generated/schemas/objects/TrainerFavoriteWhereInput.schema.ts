import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const trainerfavoritewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TrainerFavoriteWhereInputObjectSchema), z.lazy(() => TrainerFavoriteWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TrainerFavoriteWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TrainerFavoriteWhereInputObjectSchema), z.lazy(() => TrainerFavoriteWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  cube_key: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional()
}).strict();
export const TrainerFavoriteWhereInputObjectSchema: z.ZodType<Prisma.TrainerFavoriteWhereInput> = trainerfavoritewhereinputSchema as unknown as z.ZodType<Prisma.TrainerFavoriteWhereInput>;
export const TrainerFavoriteWhereInputObjectZodSchema = trainerfavoritewhereinputSchema;
