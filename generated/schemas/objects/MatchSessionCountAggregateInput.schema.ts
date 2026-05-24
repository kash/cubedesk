import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  min_players: z.literal(true).optional(),
  max_players: z.literal(true).optional(),
  match_type: z.literal(true).optional(),
  custom_match: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  created_by_id: z.literal(true).optional(),
  rated: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const MatchSessionCountAggregateInputObjectSchema: z.ZodType<Prisma.MatchSessionCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionCountAggregateInputType>;
export const MatchSessionCountAggregateInputObjectZodSchema = makeSchema();
