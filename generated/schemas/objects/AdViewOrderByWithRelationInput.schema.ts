import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { AdViewOrderByRelevanceInputObjectSchema as AdViewOrderByRelevanceInputObjectSchema } from './AdViewOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ip_address: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ad_key: SortOrderSchema.optional(),
  view_time_seconds: SortOrderSchema.optional(),
  browser_session_id: SortOrderSchema.optional(),
  clicked_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  pathname: SortOrderSchema.optional(),
  last_session_started_at: SortOrderSchema.optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => AdViewOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const AdViewOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AdViewOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AdViewOrderByWithRelationInput>;
export const AdViewOrderByWithRelationInputObjectZodSchema = makeSchema();
