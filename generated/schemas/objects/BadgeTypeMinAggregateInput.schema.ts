import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  priority: z.literal(true).optional(),
  color: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  description: z.literal(true).optional(),
  created_by_id: z.literal(true).optional()
}).strict();
export const BadgeTypeMinAggregateInputObjectSchema: z.ZodType<Prisma.BadgeTypeMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeMinAggregateInputType>;
export const BadgeTypeMinAggregateInputObjectZodSchema = makeSchema();
