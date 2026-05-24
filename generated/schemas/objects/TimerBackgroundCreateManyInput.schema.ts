import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string().optional().nullable(),
  storage_path: z.string().optional().nullable(),
  user_id: z.string(),
  hex: z.string().optional().nullable(),
  created_at: z.coerce.date().optional()
}).strict();
export const TimerBackgroundCreateManyInputObjectSchema: z.ZodType<Prisma.TimerBackgroundCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TimerBackgroundCreateManyInput>;
export const TimerBackgroundCreateManyInputObjectZodSchema = makeSchema();
