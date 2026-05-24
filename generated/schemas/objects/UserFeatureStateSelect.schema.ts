import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  received_welcome_screen: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  created_at: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const UserFeatureStateSelectObjectSchema: z.ZodType<Prisma.UserFeatureStateSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserFeatureStateSelect>;
export const UserFeatureStateSelectObjectZodSchema = makeSchema();
