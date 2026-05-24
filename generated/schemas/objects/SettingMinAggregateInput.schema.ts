import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  focus_mode: z.literal(true).optional(),
  freeze_time: z.literal(true).optional(),
  inspection: z.literal(true).optional(),
  manual_entry: z.literal(true).optional(),
  inspection_delay: z.literal(true).optional(),
  inverse_time_list: z.literal(true).optional(),
  hide_time_when_solving: z.literal(true).optional(),
  nav_collapsed: z.literal(true).optional(),
  pb_confetti: z.literal(true).optional(),
  play_inspection_sound: z.literal(true).optional(),
  zero_out_time_after_solve: z.literal(true).optional(),
  confirm_delete_solve: z.literal(true).optional(),
  require_period_in_manual_time_entry: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  cube_type: z.literal(true).optional(),
  session_id: z.literal(true).optional(),
  timer_decimal_points: z.literal(true).optional(),
  beta_tester: z.literal(true).optional(),
  use_space_with_smart_cube: z.literal(true).optional(),
  inspection_auto_start: z.literal(true).optional(),
  stats_module_json: z.literal(true).optional()
}).strict();
export const SettingMinAggregateInputObjectSchema: z.ZodType<Prisma.SettingMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SettingMinAggregateInputType>;
export const SettingMinAggregateInputObjectZodSchema = makeSchema();
