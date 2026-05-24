import * as z from 'zod';
export const AdViewGroupByResultSchema = z.array(z.object({
  id: z.string(),
  user_id: z.string(),
  ip_address: z.string(),
  ad_key: z.string(),
  view_time_seconds: z.number().int(),
  browser_session_id: z.string(),
  clicked_at: z.date(),
  updated_at: z.date(),
  created_at: z.date(),
  pathname: z.string(),
  last_session_started_at: z.date(),
  _count: z.object({
    id: z.number(),
    user_id: z.number(),
    ip_address: z.number(),
    ad_key: z.number(),
    view_time_seconds: z.number(),
    browser_session_id: z.number(),
    clicked_at: z.number(),
    updated_at: z.number(),
    created_at: z.number(),
    pathname: z.number(),
    last_session_started_at: z.number(),
    user: z.number()
  }).optional(),
  _sum: z.object({
    view_time_seconds: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    view_time_seconds: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    ip_address: z.string().nullable(),
    ad_key: z.string().nullable(),
    view_time_seconds: z.number().int().nullable(),
    browser_session_id: z.string().nullable(),
    clicked_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    created_at: z.date().nullable(),
    pathname: z.string().nullable(),
    last_session_started_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    ip_address: z.string().nullable(),
    ad_key: z.string().nullable(),
    view_time_seconds: z.number().int().nullable(),
    browser_session_id: z.string().nullable(),
    clicked_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    created_at: z.date().nullable(),
    pathname: z.string().nullable(),
    last_session_started_at: z.date().nullable()
  }).nullable().optional()
}));