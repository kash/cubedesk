import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateNestedOneWithoutElo_ratingInputObjectSchema as ProfileCreateNestedOneWithoutElo_ratingInputObjectSchema } from './ProfileCreateNestedOneWithoutElo_ratingInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  elo_222_rating: z.number().int(),
  elo_333_rating: z.number().int(),
  elo_444_rating: z.number().int(),
  updated_at: z.coerce.date().optional(),
  created_at: z.coerce.date().optional(),
  elo_overall_rating: z.number().int(),
  games_222_count: z.number().int().optional(),
  games_333_count: z.number().int().optional(),
  games_444_count: z.number().int().optional(),
  games_overall_count: z.number().int().optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutElo_ratingInputObjectSchema)
}).strict();
export const EloRatingCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.EloRatingCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.EloRatingCreateWithoutUserInput>;
export const EloRatingCreateWithoutUserInputObjectZodSchema = makeSchema();
