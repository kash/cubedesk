import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  code: z.literal(true).optional(),
  claimed: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const ForgotPasswordMinAggregateInputObjectSchema: z.ZodType<Prisma.ForgotPasswordMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ForgotPasswordMinAggregateInputType>;
export const ForgotPasswordMinAggregateInputObjectZodSchema = makeSchema();
