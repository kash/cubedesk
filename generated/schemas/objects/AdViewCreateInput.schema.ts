import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutAd_viewsInputObjectSchema as UserAccountCreateNestedOneWithoutAd_viewsInputObjectSchema } from './UserAccountCreateNestedOneWithoutAd_viewsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  ip_address: z.string().optional().nullable(),
  ad_key: z.string(),
  view_time_seconds: z.number().int(),
  browser_session_id: z.string(),
  clicked_at: z.coerce.date().optional().nullable(),
  created_at: z.coerce.date().optional(),
  pathname: z.string(),
  last_session_started_at: z.coerce.date().optional(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutAd_viewsInputObjectSchema).optional()
}).strict();
export const AdViewCreateInputObjectSchema: z.ZodType<Prisma.AdViewCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AdViewCreateInput>;
export const AdViewCreateInputObjectZodSchema = makeSchema();
