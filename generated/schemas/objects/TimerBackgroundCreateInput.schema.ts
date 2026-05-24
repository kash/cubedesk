import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutTimer_backgroundInputObjectSchema as UserAccountCreateNestedOneWithoutTimer_backgroundInputObjectSchema } from './UserAccountCreateNestedOneWithoutTimer_backgroundInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string().optional().nullable(),
  storage_path: z.string().optional().nullable(),
  hex: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutTimer_backgroundInputObjectSchema)
}).strict();
export const TimerBackgroundCreateInputObjectSchema: z.ZodType<Prisma.TimerBackgroundCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TimerBackgroundCreateInput>;
export const TimerBackgroundCreateInputObjectZodSchema = makeSchema();
