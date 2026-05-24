import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_email: z.literal(true).optional(),
  action_type: z.literal(true).optional(),
  action_details: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ActionLogCountAggregateInputObjectSchema: z.ZodType<Prisma.ActionLogCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ActionLogCountAggregateInputType>;
export const ActionLogCountAggregateInputObjectZodSchema = makeSchema();
