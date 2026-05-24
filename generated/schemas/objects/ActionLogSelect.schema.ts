import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_email: z.boolean().optional(),
  action_type: z.boolean().optional(),
  action_details: z.boolean().optional(),
  created_at: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const ActionLogSelectObjectSchema: z.ZodType<Prisma.ActionLogSelect> = makeSchema() as unknown as z.ZodType<Prisma.ActionLogSelect>;
export const ActionLogSelectObjectZodSchema = makeSchema();
