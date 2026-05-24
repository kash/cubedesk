import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  colors: z.string().optional().nullable(),
  cube_type: z.string(),
  key: z.string(),
  created_at: z.coerce.date().optional(),
  name: z.string(),
  like_count: z.number().int().optional(),
  private: z.boolean().optional(),
  copy_of_id: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  downloaded: z.boolean().optional(),
  group_name: z.string().optional().nullable(),
  scrambles: z.string().optional().nullable(),
  solution: z.string().optional().nullable(),
  alt_solutions: z.string().optional().nullable(),
  three_d: z.boolean().optional(),
  algo_type: z.string().optional()
}).strict();
export const CustomTrainerCreateManyUserInputObjectSchema: z.ZodType<Prisma.CustomTrainerCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerCreateManyUserInput>;
export const CustomTrainerCreateManyUserInputObjectZodSchema = makeSchema();
