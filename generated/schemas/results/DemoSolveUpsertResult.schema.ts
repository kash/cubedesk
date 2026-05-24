import * as z from 'zod';
export const DemoSolveUpsertResultSchema = z.object({
  id: z.string(),
  demo_session_id: z.string(),
  ip_address: z.string().optional(),
  raw_time: z.number().optional(),
  cube_type: z.string().optional(),
  scramble: z.string().optional(),
  started_at: z.bigint().optional(),
  ended_at: z.bigint().optional(),
  updated_at: z.date(),
  created_at: z.date()
});