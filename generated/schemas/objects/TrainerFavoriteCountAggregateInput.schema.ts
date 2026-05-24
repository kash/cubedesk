import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  cube_key: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TrainerFavoriteCountAggregateInputObjectSchema: z.ZodType<Prisma.TrainerFavoriteCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TrainerFavoriteCountAggregateInputType>;
export const TrainerFavoriteCountAggregateInputObjectZodSchema = makeSchema();
