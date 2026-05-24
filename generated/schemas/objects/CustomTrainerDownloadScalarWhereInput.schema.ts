import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const customtrainerdownloadscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CustomTrainerDownloadScalarWhereInputObjectSchema), z.lazy(() => CustomTrainerDownloadScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CustomTrainerDownloadScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CustomTrainerDownloadScalarWhereInputObjectSchema), z.lazy(() => CustomTrainerDownloadScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  creator_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  new_trainer_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  source_trainer_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const CustomTrainerDownloadScalarWhereInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadScalarWhereInput> = customtrainerdownloadscalarwhereinputSchema as unknown as z.ZodType<Prisma.CustomTrainerDownloadScalarWhereInput>;
export const CustomTrainerDownloadScalarWhereInputObjectZodSchema = customtrainerdownloadscalarwhereinputSchema;
