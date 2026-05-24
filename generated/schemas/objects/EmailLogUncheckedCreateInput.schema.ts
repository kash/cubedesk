import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string().optional().nullable(),
  subject: z.string(),
  template: z.string(),
  vars: z.string(),
  created_at: z.coerce.date().optional(),
  email: z.string()
}).strict();
export const EmailLogUncheckedCreateInputObjectSchema: z.ZodType<Prisma.EmailLogUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EmailLogUncheckedCreateInput>;
export const EmailLogUncheckedCreateInputObjectZodSchema = makeSchema();
