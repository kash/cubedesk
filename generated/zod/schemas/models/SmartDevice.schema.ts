import * as z from 'zod';

export const SmartDeviceSchema = z.object({
  id: z.string(),
  name: z.string(),
  internal_name: z.string(),
  created_at: z.date(),
  device_id: z.string(),
  user_id: z.string(),
});

export type SmartDevice = z.infer<typeof SmartDeviceSchema>;
