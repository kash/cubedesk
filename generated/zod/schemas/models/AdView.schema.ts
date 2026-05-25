import * as z from 'zod';

export const AdViewSchema = z.object({
  id: z.string(),
  user_id: z.string().nullable(),
  ip_address: z.string().nullable(),
  ad_key: z.string(),
  view_time_seconds: z.number().int(),
  browser_session_id: z.string(),
  clicked_at: z.date().nullable(),
  updated_at: z.date(),
  created_at: z.date(),
  pathname: z.string(),
  last_session_started_at: z.date(),
});

export type AdView = z.infer<typeof AdViewSchema>;
