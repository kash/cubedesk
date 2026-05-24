import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutEmail_logInputObjectSchema as UserAccountCreateNestedOneWithoutEmail_logInputObjectSchema } from './UserAccountCreateNestedOneWithoutEmail_logInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  subject: z.string(),
  template: z.string(),
  vars: z.string(),
  created_at: z.coerce.date().optional(),
  email: z.string(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutEmail_logInputObjectSchema).optional()
}).strict();
export const EmailLogCreateInputObjectSchema: z.ZodType<Prisma.EmailLogCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EmailLogCreateInput>;
export const EmailLogCreateInputObjectZodSchema = makeSchema();
