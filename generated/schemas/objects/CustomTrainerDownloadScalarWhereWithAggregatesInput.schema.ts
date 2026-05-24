import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const customtrainerdownloadscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CustomTrainerDownloadScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CustomTrainerDownloadScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CustomTrainerDownloadScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CustomTrainerDownloadScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CustomTrainerDownloadScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  creator_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  new_trainer_id: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  source_trainer_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const CustomTrainerDownloadScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadScalarWhereWithAggregatesInput> = customtrainerdownloadscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CustomTrainerDownloadScalarWhereWithAggregatesInput>;
export const CustomTrainerDownloadScalarWhereWithAggregatesInputObjectZodSchema = customtrainerdownloadscalarwherewithaggregatesinputSchema;
