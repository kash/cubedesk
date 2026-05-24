import * as z from 'zod';
export const SettingAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    user_id: z.number(),
    focus_mode: z.number(),
    freeze_time: z.number(),
    inspection: z.number(),
    manual_entry: z.number(),
    inspection_delay: z.number(),
    inverse_time_list: z.number(),
    hide_time_when_solving: z.number(),
    nav_collapsed: z.number(),
    pb_confetti: z.number(),
    play_inspection_sound: z.number(),
    zero_out_time_after_solve: z.number(),
    confirm_delete_solve: z.number(),
    require_period_in_manual_time_entry: z.number(),
    created_at: z.number(),
    cube_type: z.number(),
    session_id: z.number(),
    timer_decimal_points: z.number(),
    beta_tester: z.number(),
    use_space_with_smart_cube: z.number(),
    inspection_auto_start: z.number(),
    stats_module_json: z.number(),
    custom_cube_types: z.number(),
    user: z.number()
  }).optional(),
  _sum: z.object({
    freeze_time: z.number().nullable(),
    inspection_delay: z.number().nullable(),
    timer_decimal_points: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    freeze_time: z.number().nullable(),
    inspection_delay: z.number().nullable(),
    timer_decimal_points: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    freeze_time: z.number().nullable(),
    inspection_delay: z.number().int().nullable(),
    created_at: z.date().nullable(),
    cube_type: z.string().nullable(),
    session_id: z.string().nullable(),
    timer_decimal_points: z.number().int().nullable(),
    stats_module_json: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    freeze_time: z.number().nullable(),
    inspection_delay: z.number().int().nullable(),
    created_at: z.date().nullable(),
    cube_type: z.string().nullable(),
    session_id: z.string().nullable(),
    timer_decimal_points: z.number().int().nullable(),
    stats_module_json: z.string().nullable()
  }).nullable().optional()});