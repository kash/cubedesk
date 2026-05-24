import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  turn_count: z.number().int(),
  turns: z.string().optional().nullable(),
  method_name: z.string(),
  step_index: z.number().int(),
  step_name: z.string(),
  created_at: z.coerce.date().optional(),
  total_time: z.number().optional().nullable(),
  tps: z.number().optional().nullable(),
  parent_name: z.string().optional().nullable(),
  recognition_time: z.number().optional(),
  skipped: z.boolean().optional(),
  oll_case_key: z.string().optional().nullable(),
  pll_case_key: z.string().optional().nullable()
}).strict();
export const SolveMethodStepCreateWithoutSolveInputObjectSchema: z.ZodType<Prisma.SolveMethodStepCreateWithoutSolveInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveMethodStepCreateWithoutSolveInput>;
export const SolveMethodStepCreateWithoutSolveInputObjectZodSchema = makeSchema();
