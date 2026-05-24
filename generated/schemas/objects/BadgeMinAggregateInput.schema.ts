import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  badge_type_id: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const BadgeMinAggregateInputObjectSchema: z.ZodType<Prisma.BadgeMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BadgeMinAggregateInputType>;
export const BadgeMinAggregateInputObjectZodSchema = makeSchema();
