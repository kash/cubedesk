import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string().optional()
}).strict();
export const TimerBackgroundWhereUniqueInputObjectSchema: z.ZodType<Prisma.TimerBackgroundWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TimerBackgroundWhereUniqueInput>;
export const TimerBackgroundWhereUniqueInputObjectZodSchema = makeSchema();
