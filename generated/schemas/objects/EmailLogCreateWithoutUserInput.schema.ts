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
export const EmailLogCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.EmailLogCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.EmailLogCreateWithoutUserInput>;
export const EmailLogCreateWithoutUserInputObjectZodSchema = makeSchema();
