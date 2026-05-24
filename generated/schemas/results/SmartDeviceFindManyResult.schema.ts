import * as z from 'zod';
export const SmartDeviceFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  name: z.string(),
  internal_name: z.string(),
  created_at: z.date(),
  device_id: z.string(),
  user_id: z.string(),
  user: z.unknown(),
  solves: z.array(z.unknown())
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});