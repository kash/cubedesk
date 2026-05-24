import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema'

const customtrainerscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CustomTrainerScalarWhereInputObjectSchema), z.lazy(() => CustomTrainerScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CustomTrainerScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CustomTrainerScalarWhereInputObjectSchema), z.lazy(() => CustomTrainerScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  colors: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  cube_type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  key: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  like_count: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  private: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  copy_of_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  downloaded: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  group_name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  scrambles: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  solution: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  alt_solutions: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  three_d: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  algo_type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const CustomTrainerScalarWhereInputObjectSchema: z.ZodType<Prisma.CustomTrainerScalarWhereInput> = customtrainerscalarwhereinputSchema as unknown as z.ZodType<Prisma.CustomTrainerScalarWhereInput>;
export const CustomTrainerScalarWhereInputObjectZodSchema = customtrainerscalarwhereinputSchema;
