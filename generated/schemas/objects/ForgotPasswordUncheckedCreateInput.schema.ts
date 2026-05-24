import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  code: z.string(),
  claimed: z.boolean().optional(),
  created_at: z.coerce.date().optional()
}).strict();
export const ForgotPasswordUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ForgotPasswordUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ForgotPasswordUncheckedCreateInput>;
export const ForgotPasswordUncheckedCreateInputObjectZodSchema = makeSchema();
