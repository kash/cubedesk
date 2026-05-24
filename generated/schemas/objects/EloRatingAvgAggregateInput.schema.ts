import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  elo_222_rating: z.literal(true).optional(),
  elo_333_rating: z.literal(true).optional(),
  elo_444_rating: z.literal(true).optional(),
  elo_overall_rating: z.literal(true).optional(),
  games_222_count: z.literal(true).optional(),
  games_333_count: z.literal(true).optional(),
  games_444_count: z.literal(true).optional(),
  games_overall_count: z.literal(true).optional()
}).strict();
export const EloRatingAvgAggregateInputObjectSchema: z.ZodType<Prisma.EloRatingAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EloRatingAvgAggregateInputType>;
export const EloRatingAvgAggregateInputObjectZodSchema = makeSchema();
