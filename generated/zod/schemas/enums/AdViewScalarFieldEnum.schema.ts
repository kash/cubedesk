import * as z from 'zod';

export const AdViewScalarFieldEnumSchema = z.enum(['id', 'user_id', 'ip_address', 'ad_key', 'view_time_seconds', 'browser_session_id', 'clicked_at', 'updated_at', 'created_at', 'pathname', 'last_session_started_at'])

export type AdViewScalarFieldEnum = z.infer<typeof AdViewScalarFieldEnumSchema>;