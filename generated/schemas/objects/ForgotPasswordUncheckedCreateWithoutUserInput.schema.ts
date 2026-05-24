import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  code: z.string(),
  claimed: z.boolean().optional(),
  created_at: z.coerce.date().optional()
}).strict();
export const ForgotPasswordUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ForgotPasswordUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ForgotPasswordUncheckedCreateWithoutUserInput>;
export const ForgotPasswordUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
