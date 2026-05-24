import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_email: z.string().optional().nullable(),
  action_type: z.string(),
  action_details: z.string().optional().nullable(),
  created_at: z.coerce.date().optional()
}).strict();
export const ActionLogUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ActionLogUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActionLogUncheckedCreateInput>;
export const ActionLogUncheckedCreateInputObjectZodSchema = makeSchema();
