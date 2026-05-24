import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SettingCountOrderByAggregateInputObjectSchema as SettingCountOrderByAggregateInputObjectSchema } from './SettingCountOrderByAggregateInput.schema';
import { SettingAvgOrderByAggregateInputObjectSchema as SettingAvgOrderByAggregateInputObjectSchema } from './SettingAvgOrderByAggregateInput.schema';
import { SettingMaxOrderByAggregateInputObjectSchema as SettingMaxOrderByAggregateInputObjectSchema } from './SettingMaxOrderByAggregateInput.schema';
import { SettingMinOrderByAggregateInputObjectSchema as SettingMinOrderByAggregateInputObjectSchema } from './SettingMinOrderByAggregateInput.schema';
import { SettingSumOrderByAggregateInputObjectSchema as SettingSumOrderByAggregateInputObjectSchema } from './SettingSumOrderByAggregateInput.schema'

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
  session_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  timer_decimal_points: SortOrderSchema.optional(),
  beta_tester: SortOrderSchema.optional(),
  use_space_with_smart_cube: SortOrderSchema.optional(),
  inspection_auto_start: SortOrderSchema.optional(),
  stats_module_json: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => SettingCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => SettingAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SettingMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SettingMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => SettingSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SettingOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SettingOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SettingOrderByWithAggregationInput>;
export const SettingOrderByWithAggregationInputObjectZodSchema = makeSchema();
