import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  subject: z.boolean().optional(),
  template: z.boolean().optional(),
  vars: z.boolean().optional(),
  created_at: z.boolean().optional(),
  email: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const EmailLogSelectObjectSchema: z.ZodType<Prisma.EmailLogSelect> = makeSchema() as unknown as z.ZodType<Prisma.EmailLogSelect>;
export const EmailLogSelectObjectZodSchema = makeSchema();
