import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_email: z.literal(true).optional(),
  action_type: z.literal(true).optional(),
  action_details: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const ActionLogMinAggregateInputObjectSchema: z.ZodType<Prisma.ActionLogMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ActionLogMinAggregateInputType>;
export const ActionLogMinAggregateInputObjectZodSchema = makeSchema();
