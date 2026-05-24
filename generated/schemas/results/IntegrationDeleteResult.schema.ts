import * as z from 'zod';
export const IntegrationDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  user_id: z.string(),
  service_name: z.string(),
  auth_token: z.string(),
  refresh_token: z.string(),
  auth_expires_at: z.bigint(),
  created_at: z.date(),
  user: z.unknown()
}));