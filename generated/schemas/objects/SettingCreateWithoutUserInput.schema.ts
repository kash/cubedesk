import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomCubeTypeCreateNestedManyWithoutSettingInputObjectSchema as CustomCubeTypeCreateNestedManyWithoutSettingInputObjectSchema } from './CustomCubeTypeCreateNestedManyWithoutSettingInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  focus_mode: z.boolean().optional(),
  freeze_time: z.number().optional(),
  inspection: z.boolean().optional(),
  manual_entry: z.boolean().optional(),
  inspection_delay: z.number().int().optional(),
  inverse_time_list: z.boolean().optional(),
  hide_time_when_solving: z.boolean().optional(),
  nav_collapsed: z.boolean().optional(),
  pb_confetti: z.boolean().optional(),
  play_inspection_sound: z.boolean().optional(),
  zero_out_time_after_solve: z.boolean().optional(),
  confirm_delete_solve: z.boolean().optional(),
  require_period_in_manual_time_entry: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  cube_type: z.string().optional(),
  session_id: z.string().optional().nullable(),
  timer_decimal_points: z.number().int().optional(),
  beta_tester: z.boolean().optional(),
  use_space_with_smart_cube: z.boolean().optional(),
  inspection_auto_start: z.boolean().optional(),
  stats_module_json: z.string().optional().nullable(),
  custom_cube_types: z.lazy(() => CustomCubeTypeCreateNestedManyWithoutSettingInputObjectSchema).optional()
}).strict();
export const SettingCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.SettingCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SettingCreateWithoutUserInput>;
export const SettingCreateWithoutUserInputObjectZodSchema = makeSchema();
