import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  created_by_id: z.literal(true).optional(),
  banned_user_id: z.literal(true).optional(),
  reason: z.literal(true).optional(),
  active: z.literal(true).optional(),
  banned_until: z.literal(true).optional(),
  minutes: z.literal(true).optional(),
  forever: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const BanLogMaxAggregateInputObjectSchema: z.ZodType<Prisma.BanLogMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BanLogMaxAggregateInputType>;
export const BanLogMaxAggregateInputObjectZodSchema = makeSchema();
