import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  badge_type_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const BadgeCountAggregateInputObjectSchema: z.ZodType<Prisma.BadgeCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BadgeCountAggregateInputType>;
export const BadgeCountAggregateInputObjectZodSchema = makeSchema();
