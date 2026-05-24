import * as z from 'zod';

export const SettingOrderByRelevanceFieldEnumSchema = z.enum(['id', 'user_id', 'cube_type', 'session_id', 'stats_module_json'])

export type SettingOrderByRelevanceFieldEnum = z.infer<typeof SettingOrderByRelevanceFieldEnumSchema>;