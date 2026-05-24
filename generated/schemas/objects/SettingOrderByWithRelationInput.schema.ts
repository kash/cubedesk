import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CustomCubeTypeOrderByRelationAggregateInputObjectSchema as CustomCubeTypeOrderByRelationAggregateInputObjectSchema } from './CustomCubeTypeOrderByRelationAggregateInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { SettingOrderByRelevanceInputObjectSchema as SettingOrderByRelevanceInputObjectSchema } from './SettingOrderByRelevanceInput.schema'

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
  custom_cube_types: z.lazy(() => CustomCubeTypeOrderByRelationAggregateInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => SettingOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const SettingOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SettingOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SettingOrderByWithRelationInput>;
export const SettingOrderByWithRelationInputObjectZodSchema = makeSchema();
