import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  url: z.literal(true).optional(),
  storage_path: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ImageCountAggregateInputObjectSchema: z.ZodType<Prisma.ImageCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ImageCountAggregateInputType>;
export const ImageCountAggregateInputObjectZodSchema = makeSchema();
