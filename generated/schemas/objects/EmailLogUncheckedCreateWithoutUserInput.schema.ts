import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  subject: z.string(),
  template: z.string(),
  vars: z.string(),
  created_at: z.coerce.date().optional(),
  email: z.string()
}).strict();
export const EmailLogUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.EmailLogUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.EmailLogUncheckedCreateWithoutUserInput>;
export const EmailLogUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
