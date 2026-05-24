import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomCubeTypeFindManySchema as CustomCubeTypeFindManySchema } from '../findManyCustomCubeType.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema';
import { SettingCountOutputTypeArgsObjectSchema as SettingCountOutputTypeArgsObjectSchema } from './SettingCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  focus_mode: z.boolean().optional(),
  freeze_time: z.boolean().optional(),
  inspection: z.boolean().optional(),
  manual_entry: z.boolean().optional(),
  inspection_delay: z.boolean().optional(),
  inverse_time_list: z.boolean().optional(),
  hide_time_when_solving: z.boolean().optional(),
  nav_collapsed: z.boolean().optional(),
  pb_confetti: z.boolean().optional(),
  play_inspection_sound: z.boolean().optional(),
  zero_out_time_after_solve: z.boolean().optional(),
  confirm_delete_solve: z.boolean().optional(),
  require_period_in_manual_time_entry: z.boolean().optional(),
  created_at: z.boolean().optional(),
  cube_type: z.boolean().optional(),
  session_id: z.boolean().optional(),
  timer_decimal_points: z.boolean().optional(),
  beta_tester: z.boolean().optional(),
  use_space_with_smart_cube: z.boolean().optional(),
  inspection_auto_start: z.boolean().optional(),
  stats_module_json: z.boolean().optional(),
  custom_cube_types: z.union([z.boolean(), z.lazy(() => CustomCubeTypeFindManySchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SettingCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SettingSelectObjectSchema: z.ZodType<Prisma.SettingSelect> = makeSchema() as unknown as z.ZodType<Prisma.SettingSelect>;
export const SettingSelectObjectZodSchema = makeSchema();
