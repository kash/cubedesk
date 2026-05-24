import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  subject: z.literal(true).optional(),
  template: z.literal(true).optional(),
  vars: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  email: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const EmailLogCountAggregateInputObjectSchema: z.ZodType<Prisma.EmailLogCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EmailLogCountAggregateInputType>;
export const EmailLogCountAggregateInputObjectZodSchema = makeSchema();
