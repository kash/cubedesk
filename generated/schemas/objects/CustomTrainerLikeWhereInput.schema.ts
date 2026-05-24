import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { CustomTrainerScalarRelationFilterObjectSchema as CustomTrainerScalarRelationFilterObjectSchema } from './CustomTrainerScalarRelationFilter.schema';
import { CustomTrainerWhereInputObjectSchema as CustomTrainerWhereInputObjectSchema } from './CustomTrainerWhereInput.schema'

const customtrainerlikewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CustomTrainerLikeWhereInputObjectSchema), z.lazy(() => CustomTrainerLikeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CustomTrainerLikeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CustomTrainerLikeWhereInputObjectSchema), z.lazy(() => CustomTrainerLikeWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  custom_trainer_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  creator_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  creator: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  custom_trainer: z.union([z.lazy(() => CustomTrainerScalarRelationFilterObjectSchema), z.lazy(() => CustomTrainerWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional()
}).strict();
export const CustomTrainerLikeWhereInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeWhereInput> = customtrainerlikewhereinputSchema as unknown as z.ZodType<Prisma.CustomTrainerLikeWhereInput>;
export const CustomTrainerLikeWhereInputObjectZodSchema = customtrainerlikewhereinputSchema;
