import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  elo_222_rating: z.number().int(),
  elo_333_rating: z.number().int(),
  elo_444_rating: z.number().int(),
  updated_at: z.coerce.date().optional(),
  created_at: z.coerce.date().optional(),
  elo_overall_rating: z.number().int(),
  profile_id: z.string(),
  games_222_count: z.number().int().optional(),
  games_333_count: z.number().int().optional(),
  games_444_count: z.number().int().optional(),
  games_overall_count: z.number().int().optional()
}).strict();
export const EloRatingUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.EloRatingUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.EloRatingUncheckedCreateWithoutUserInput>;
export const EloRatingUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
