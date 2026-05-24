import * as z from 'zod';
export const IntegrationGroupByResultSchema = z.array(z.object({
  id: z.string(),
  user_id: z.string(),
  service_name: z.string(),
  auth_token: z.string(),
  refresh_token: z.string(),
  auth_expires_at: z.bigint(),
  created_at: z.date(),
  _count: z.object({
    id: z.number(),
    user_id: z.number(),
    service_name: z.number(),
    auth_token: z.number(),
    refresh_token: z.number(),
    auth_expires_at: z.number(),
    created_at: z.number(),
    user: z.number()
  }).optional(),
  _sum: z.object({
    auth_expires_at: z.bigint().nullable()
  }).nullable().optional(),
  _avg: z.object({
    auth_expires_at: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    service_name: z.string().nullable(),
    auth_token: z.string().nullable(),
    refresh_token: z.string().nullable(),
    auth_expires_at: z.bigint().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    service_name: z.string().nullable(),
    auth_token: z.string().nullable(),
    refresh_token: z.string().nullable(),
    auth_expires_at: z.bigint().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()
}));