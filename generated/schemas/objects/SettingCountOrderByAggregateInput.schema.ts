import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  focus_mode: SortOrderSchema.optional(),
  freeze_time: SortOrderSchema.optional(),
  inspection: SortOrderSchema.optional(),
  manual_entry: SortOrderSchema.optional(),
  inspection_delay: SortOrderSchema.optional(),
  inverse_time_list: SortOrderSchema.optional(),
  hide_time_when_solving: SortOrderSchema.optional(),
  nav_collapsed: SortOrderSchema.optional(),
  pb_confetti: SortOrderSchema.optional(),
  play_inspection_sound: SortOrderSchema.optional(),
  zero_out_time_after_solve: SortOrderSchema.optional(),
  confirm_delete_solve: SortOrderSchema.optional(),
  require_period_in_manual_time_entry: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  cube_type: SortOrderSchema.optional(),
  session_id: SortOrderSchema.optional(),
  timer_decimal_points: SortOrderSchema.optional(),
  beta_tester: SortOrderSchema.optional(),
  use_space_with_smart_cube: SortOrderSchema.optional(),
  inspection_auto_start: SortOrderSchema.optional(),
  stats_module_json: SortOrderSchema.optional()
}).strict();
export const SettingCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SettingCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SettingCountOrderByAggregateInput>;
export const SettingCountOrderByAggregateInputObjectZodSchema = makeSchema();
