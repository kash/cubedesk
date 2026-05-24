import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  badge_type_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const BadgeCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BadgeCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeCountOrderByAggregateInput>;
export const BadgeCountOrderByAggregateInputObjectZodSchema = makeSchema();
