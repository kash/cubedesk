import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_email: z.literal(true).optional(),
  action_type: z.literal(true).optional(),
  action_details: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const ActionLogMaxAggregateInputObjectSchema: z.ZodType<Prisma.ActionLogMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ActionLogMaxAggregateInputType>;
export const ActionLogMaxAggregateInputObjectZodSchema = makeSchema();
