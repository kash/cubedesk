import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const customtrainerlikescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CustomTrainerLikeScalarWhereInputObjectSchema), z.lazy(() => CustomTrainerLikeScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CustomTrainerLikeScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CustomTrainerLikeScalarWhereInputObjectSchema), z.lazy(() => CustomTrainerLikeScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  custom_trainer_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  creator_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const CustomTrainerLikeScalarWhereInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeScalarWhereInput> = customtrainerlikescalarwhereinputSchema as unknown as z.ZodType<Prisma.CustomTrainerLikeScalarWhereInput>;
export const CustomTrainerLikeScalarWhereInputObjectZodSchema = customtrainerlikescalarwhereinputSchema;
