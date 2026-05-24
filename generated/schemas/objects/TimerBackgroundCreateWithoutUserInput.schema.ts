import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string().optional().nullable(),
  storage_path: z.string().optional().nullable(),
  hex: z.string().optional().nullable(),
  created_at: z.coerce.date().optional()
}).strict();
export const TimerBackgroundCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.TimerBackgroundCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TimerBackgroundCreateWithoutUserInput>;
export const TimerBackgroundCreateWithoutUserInputObjectZodSchema = makeSchema();
