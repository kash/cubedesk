import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProfileViewCountOrderByAggregateInputObjectSchema as ProfileViewCountOrderByAggregateInputObjectSchema } from './ProfileViewCountOrderByAggregateInput.schema';
import { ProfileViewMaxOrderByAggregateInputObjectSchema as ProfileViewMaxOrderByAggregateInputObjectSchema } from './ProfileViewMaxOrderByAggregateInput.schema';
import { ProfileViewMinOrderByAggregateInputObjectSchema as ProfileViewMinOrderByAggregateInputObjectSchema } from './ProfileViewMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  viewer_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  profile_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  profile_user_id: SortOrderSchema.optional(),
  _count: z.lazy(() => ProfileViewCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ProfileViewMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ProfileViewMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ProfileViewOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ProfileViewOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewOrderByWithAggregationInput>;
export const ProfileViewOrderByWithAggregationInputObjectZodSchema = makeSchema();
