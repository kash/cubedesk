import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  ip_address: z.literal(true).optional(),
  ad_key: z.literal(true).optional(),
  view_time_seconds: z.literal(true).optional(),
  browser_session_id: z.literal(true).optional(),
  clicked_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  pathname: z.literal(true).optional(),
  last_session_started_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const AdViewCountAggregateInputObjectSchema: z.ZodType<Prisma.AdViewCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AdViewCountAggregateInputType>;
export const AdViewCountAggregateInputObjectZodSchema = makeSchema();
