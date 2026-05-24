import * as z from 'zod';
export const AdViewUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  user_id: z.string().optional(),
  ip_address: z.string().optional(),
  ad_key: z.string(),
  view_time_seconds: z.number().int(),
  browser_session_id: z.string(),
  clicked_at: z.date().optional(),
  updated_at: z.date(),
  created_at: z.date(),
  pathname: z.string(),
  last_session_started_at: z.date(),
  user: z.unknown().optional()
}));