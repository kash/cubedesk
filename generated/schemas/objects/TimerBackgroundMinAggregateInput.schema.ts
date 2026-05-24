import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  url: z.literal(true).optional(),
  storage_path: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  hex: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const TimerBackgroundMinAggregateInputObjectSchema: z.ZodType<Prisma.TimerBackgroundMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TimerBackgroundMinAggregateInputType>;
export const TimerBackgroundMinAggregateInputObjectZodSchema = makeSchema();
