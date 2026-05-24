import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { CustomCubeTypeListRelationFilterObjectSchema as CustomCubeTypeListRelationFilterObjectSchema } from './CustomCubeTypeListRelationFilter.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const settingwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SettingWhereInputObjectSchema), z.lazy(() => SettingWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SettingWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SettingWhereInputObjectSchema), z.lazy(() => SettingWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  focus_mode: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  freeze_time: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  inspection: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  manual_entry: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  inspection_delay: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  inverse_time_list: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  hide_time_when_solving: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  nav_collapsed: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  pb_confetti: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  play_inspection_sound: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  zero_out_time_after_solve: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  confirm_delete_solve: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  require_period_in_manual_time_entry: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  cube_type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  session_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  timer_decimal_points: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  beta_tester: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  use_space_with_smart_cube: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  inspection_auto_start: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  stats_module_json: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  custom_cube_types: z.lazy(() => CustomCubeTypeListRelationFilterObjectSchema).optional(),
  user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional()
}).strict();
export const SettingWhereInputObjectSchema: z.ZodType<Prisma.SettingWhereInput> = settingwhereinputSchema as unknown as z.ZodType<Prisma.SettingWhereInput>;
export const SettingWhereInputObjectZodSchema = settingwhereinputSchema;
