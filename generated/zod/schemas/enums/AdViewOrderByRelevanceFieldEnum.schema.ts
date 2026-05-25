import * as z from 'zod';

export const AdViewOrderByRelevanceFieldEnumSchema = z.enum(['id', 'user_id', 'ip_address', 'ad_key', 'browser_session_id', 'pathname'])

export type AdViewOrderByRelevanceFieldEnum = z.infer<typeof AdViewOrderByRelevanceFieldEnumSchema>;