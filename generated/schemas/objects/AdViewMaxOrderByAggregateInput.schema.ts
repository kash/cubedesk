import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  ip_address: SortOrderSchema.optional(),
  ad_key: SortOrderSchema.optional(),
  view_time_seconds: SortOrderSchema.optional(),
  browser_session_id: SortOrderSchema.optional(),
  clicked_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  pathname: SortOrderSchema.optional(),
  last_session_started_at: SortOrderSchema.optional()
}).strict();
export const AdViewMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AdViewMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AdViewMaxOrderByAggregateInput>;
export const AdViewMaxOrderByAggregateInputObjectZodSchema = makeSchema();
