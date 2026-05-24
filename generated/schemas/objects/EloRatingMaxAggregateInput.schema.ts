import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  elo_222_rating: z.literal(true).optional(),
  elo_333_rating: z.literal(true).optional(),
  elo_444_rating: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  elo_overall_rating: z.literal(true).optional(),
  profile_id: z.literal(true).optional(),
  games_222_count: z.literal(true).optional(),
  games_333_count: z.literal(true).optional(),
  games_444_count: z.literal(true).optional(),
  games_overall_count: z.literal(true).optional()
}).strict();
export const EloRatingMaxAggregateInputObjectSchema: z.ZodType<Prisma.EloRatingMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EloRatingMaxAggregateInputType>;
export const EloRatingMaxAggregateInputObjectZodSchema = makeSchema();
