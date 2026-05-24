import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  demo_session_id: z.boolean().optional(),
  ip_address: z.boolean().optional(),
  raw_time: z.boolean().optional(),
  cube_type: z.boolean().optional(),
  scramble: z.boolean().optional(),
  started_at: z.boolean().optional(),
  ended_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  created_at: z.boolean().optional()
}).strict();
export const DemoSolveSelectObjectSchema: z.ZodType<Prisma.DemoSolveSelect> = makeSchema() as unknown as z.ZodType<Prisma.DemoSolveSelect>;
export const DemoSolveSelectObjectZodSchema = makeSchema();
