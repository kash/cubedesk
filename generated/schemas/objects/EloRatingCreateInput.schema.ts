import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateNestedOneWithoutElo_ratingInputObjectSchema as ProfileCreateNestedOneWithoutElo_ratingInputObjectSchema } from './ProfileCreateNestedOneWithoutElo_ratingInput.schema';
import { UserAccountCreateNestedOneWithoutElo_ratingInputObjectSchema as UserAccountCreateNestedOneWithoutElo_ratingInputObjectSchema } from './UserAccountCreateNestedOneWithoutElo_ratingInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  elo_222_rating: z.number().int(),
  elo_333_rating: z.number().int(),
  elo_444_rating: z.number().int(),
  created_at: z.coerce.date().optional(),
  elo_overall_rating: z.number().int(),
  games_222_count: z.number().int().optional(),
  games_333_count: z.number().int().optional(),
  games_444_count: z.number().int().optional(),
  games_overall_count: z.number().int().optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutElo_ratingInputObjectSchema),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutElo_ratingInputObjectSchema)
}).strict();
export const EloRatingCreateInputObjectSchema: z.ZodType<Prisma.EloRatingCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EloRatingCreateInput>;
export const EloRatingCreateInputObjectZodSchema = makeSchema();
