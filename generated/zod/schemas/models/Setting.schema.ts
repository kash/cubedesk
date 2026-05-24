import * as z from 'zod';

export const SettingSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  focus_mode: z.boolean(),
  freeze_time: z.number().default(0.2),
  inspection: z.boolean(),
  manual_entry: z.boolean(),
  inspection_delay: z.number().int().default(15),
  inverse_time_list: z.boolean(),
  hide_time_when_solving: z.boolean(),
  nav_collapsed: z.boolean(),
  pb_confetti: z.boolean().default(true),
  play_inspection_sound: z.boolean(),
  zero_out_time_after_solve: z.boolean(),
  confirm_delete_solve: z.boolean(),
  require_period_in_manual_time_entry: z.boolean(),
  created_at: z.date(),
  cube_type: z.string().default("333"),
  session_id: z.string().nullable(),
  timer_decimal_points: z.number().int().default(2),
  beta_tester: z.boolean(),
  use_space_with_smart_cube: z.boolean(),
  inspection_auto_start: z.boolean(),
  stats_module_json: z.string().nullable(),
});

export type Setting = z.infer<typeof SettingSchema>;
