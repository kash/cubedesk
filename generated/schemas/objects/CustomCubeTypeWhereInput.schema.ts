import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { SettingScalarRelationFilterObjectSchema as SettingScalarRelationFilterObjectSchema } from './SettingScalarRelationFilter.schema';
import { SettingWhereInputObjectSchema as SettingWhereInputObjectSchema } from './SettingWhereInput.schema'

const customcubetypewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CustomCubeTypeWhereInputObjectSchema), z.lazy(() => CustomCubeTypeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CustomCubeTypeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CustomCubeTypeWhereInputObjectSchema), z.lazy(() => CustomCubeTypeWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  scramble: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  private: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  setting: z.union([z.lazy(() => SettingScalarRelationFilterObjectSchema), z.lazy(() => SettingWhereInputObjectSchema)]).optional()
}).strict();
export const CustomCubeTypeWhereInputObjectSchema: z.ZodType<Prisma.CustomCubeTypeWhereInput> = customcubetypewhereinputSchema as unknown as z.ZodType<Prisma.CustomCubeTypeWhereInput>;
export const CustomCubeTypeWhereInputObjectZodSchema = customcubetypewhereinputSchema;
