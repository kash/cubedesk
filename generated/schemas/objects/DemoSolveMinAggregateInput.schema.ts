import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  demo_session_id: z.literal(true).optional(),
  ip_address: z.literal(true).optional(),
  raw_time: z.literal(true).optional(),
  cube_type: z.literal(true).optional(),
  scramble: z.literal(true).optional(),
  started_at: z.literal(true).optional(),
  ended_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const DemoSolveMinAggregateInputObjectSchema: z.ZodType<Prisma.DemoSolveMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DemoSolveMinAggregateInputType>;
export const DemoSolveMinAggregateInputObjectZodSchema = makeSchema();
