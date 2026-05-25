import * as z from 'zod';

export const SettingScalarFieldEnumSchema = z.enum(['id', 'user_id', 'focus_mode', 'freeze_time', 'inspection', 'manual_entry', 'inspection_delay', 'inverse_time_list', 'hide_time_when_solving', 'nav_collapsed', 'pb_confetti', 'play_inspection_sound', 'zero_out_time_after_solve', 'confirm_delete_solve', 'require_period_in_manual_time_entry', 'created_at', 'cube_type', 'session_id', 'timer_decimal_points', 'beta_tester', 'use_space_with_smart_cube', 'inspection_auto_start', 'stats_module_json'])

export type SettingScalarFieldEnum = z.infer<typeof SettingScalarFieldEnumSchema>;