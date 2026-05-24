import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { SolveOrderByRelationAggregateInputObjectSchema as SolveOrderByRelationAggregateInputObjectSchema } from './SolveOrderByRelationAggregateInput.schema';
import { SmartDeviceOrderByRelevanceInputObjectSchema as SmartDeviceOrderByRelevanceInputObjectSchema } from './SmartDeviceOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  internal_name: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  solves: z.lazy(() => SolveOrderByRelationAggregateInputObjectSchema).optional(),
  _relevance: z.lazy(() => SmartDeviceOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const SmartDeviceOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SmartDeviceOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceOrderByWithRelationInput>;
export const SmartDeviceOrderByWithRelationInputObjectZodSchema = makeSchema();
