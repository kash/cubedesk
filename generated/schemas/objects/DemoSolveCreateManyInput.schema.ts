import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  demo_session_id: z.string(),
  ip_address: z.string().optional().nullable(),
  raw_time: z.number().optional().nullable(),
  cube_type: z.string().optional().nullable(),
  scramble: z.string().optional().nullable(),
  started_at: z.bigint().optional().nullable(),
  ended_at: z.bigint().optional().nullable(),
  updated_at: z.coerce.date().optional(),
  created_at: z.coerce.date().optional()
}).strict();
export const DemoSolveCreateManyInputObjectSchema: z.ZodType<Prisma.DemoSolveCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.DemoSolveCreateManyInput>;
export const DemoSolveCreateManyInputObjectZodSchema = makeSchema();
