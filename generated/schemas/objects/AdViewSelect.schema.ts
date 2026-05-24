import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  ip_address: z.boolean().optional(),
  ad_key: z.boolean().optional(),
  view_time_seconds: z.boolean().optional(),
  browser_session_id: z.boolean().optional(),
  clicked_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  created_at: z.boolean().optional(),
  pathname: z.boolean().optional(),
  last_session_started_at: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const AdViewSelectObjectSchema: z.ZodType<Prisma.AdViewSelect> = makeSchema() as unknown as z.ZodType<Prisma.AdViewSelect>;
export const AdViewSelectObjectZodSchema = makeSchema();
