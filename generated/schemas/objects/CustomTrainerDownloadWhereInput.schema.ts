import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { CustomTrainerNullableScalarRelationFilterObjectSchema as CustomTrainerNullableScalarRelationFilterObjectSchema } from './CustomTrainerNullableScalarRelationFilter.schema';
import { CustomTrainerWhereInputObjectSchema as CustomTrainerWhereInputObjectSchema } from './CustomTrainerWhereInput.schema';
import { CustomTrainerScalarRelationFilterObjectSchema as CustomTrainerScalarRelationFilterObjectSchema } from './CustomTrainerScalarRelationFilter.schema'

const customtrainerdownloadwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CustomTrainerDownloadWhereInputObjectSchema), z.lazy(() => CustomTrainerDownloadWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CustomTrainerDownloadWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CustomTrainerDownloadWhereInputObjectSchema), z.lazy(() => CustomTrainerDownloadWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  creator_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  new_trainer_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  source_trainer_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  creator: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  new_trainer: z.union([z.lazy(() => CustomTrainerNullableScalarRelationFilterObjectSchema), z.lazy(() => CustomTrainerWhereInputObjectSchema)]).optional(),
  source_trainer: z.union([z.lazy(() => CustomTrainerScalarRelationFilterObjectSchema), z.lazy(() => CustomTrainerWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional()
}).strict();
export const CustomTrainerDownloadWhereInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadWhereInput> = customtrainerdownloadwhereinputSchema as unknown as z.ZodType<Prisma.CustomTrainerDownloadWhereInput>;
export const CustomTrainerDownloadWhereInputObjectZodSchema = customtrainerdownloadwhereinputSchema;
