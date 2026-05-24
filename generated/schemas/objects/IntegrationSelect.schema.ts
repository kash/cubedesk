import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  service_name: z.boolean().optional(),
  auth_token: z.boolean().optional(),
  refresh_token: z.boolean().optional(),
  auth_expires_at: z.boolean().optional(),
  created_at: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const IntegrationSelectObjectSchema: z.ZodType<Prisma.IntegrationSelect> = makeSchema() as unknown as z.ZodType<Prisma.IntegrationSelect>;
export const IntegrationSelectObjectZodSchema = makeSchema();
