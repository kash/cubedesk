import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const customtrainerlikescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CustomTrainerLikeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CustomTrainerLikeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CustomTrainerLikeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CustomTrainerLikeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CustomTrainerLikeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  custom_trainer_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  creator_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const CustomTrainerLikeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeScalarWhereWithAggregatesInput> = customtrainerlikescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CustomTrainerLikeScalarWhereWithAggregatesInput>;
export const CustomTrainerLikeScalarWhereWithAggregatesInputObjectZodSchema = customtrainerlikescalarwherewithaggregatesinputSchema;
