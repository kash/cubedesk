import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { TimerBackgroundOrderByRelevanceInputObjectSchema as TimerBackgroundOrderByRelevanceInputObjectSchema } from './TimerBackgroundOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  url: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  storage_path: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  user_id: SortOrderSchema.optional(),
  hex: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => TimerBackgroundOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const TimerBackgroundOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TimerBackgroundOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TimerBackgroundOrderByWithRelationInput>;
export const TimerBackgroundOrderByWithRelationInputObjectZodSchema = makeSchema();
