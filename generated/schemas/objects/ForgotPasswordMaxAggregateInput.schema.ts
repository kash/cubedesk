import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  code: z.literal(true).optional(),
  claimed: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const ForgotPasswordMaxAggregateInputObjectSchema: z.ZodType<Prisma.ForgotPasswordMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ForgotPasswordMaxAggregateInputType>;
export const ForgotPasswordMaxAggregateInputObjectZodSchema = makeSchema();
