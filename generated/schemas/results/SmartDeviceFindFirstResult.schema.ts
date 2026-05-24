import * as z from 'zod';
export const SmartDeviceFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  internal_name: z.string(),
  created_at: z.date(),
  device_id: z.string(),
  user_id: z.string(),
  user: z.unknown(),
  solves: z.array(z.unknown())
}));