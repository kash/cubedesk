import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  code: z.boolean().optional(),
  claimed: z.boolean().optional(),
  created_at: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const ForgotPasswordSelectObjectSchema: z.ZodType<Prisma.ForgotPasswordSelect> = makeSchema() as unknown as z.ZodType<Prisma.ForgotPasswordSelect>;
export const ForgotPasswordSelectObjectZodSchema = makeSchema();
