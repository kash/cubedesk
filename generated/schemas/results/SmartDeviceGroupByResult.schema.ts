import * as z from 'zod';
export const SmartDeviceGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  internal_name: z.string(),
  created_at: z.date(),
  device_id: z.string(),
  user_id: z.string(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    internal_name: z.number(),
    created_at: z.number(),
    device_id: z.number(),
    user_id: z.number(),
    user: z.number(),
    solves: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    internal_name: z.string().nullable(),
    created_at: z.date().nullable(),
    device_id: z.string().nullable(),
    user_id: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    internal_name: z.string().nullable(),
    created_at: z.date().nullable(),
    device_id: z.string().nullable(),
    user_id: z.string().nullable()
  }).nullable().optional()
}));