import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  order: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const SessionCountAggregateInputObjectSchema: z.ZodType<Prisma.SessionCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SessionCountAggregateInputType>;
export const SessionCountAggregateInputObjectZodSchema = makeSchema();
