import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileArgsObjectSchema as ProfileArgsObjectSchema } from './ProfileArgs.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  elo_222_rating: z.boolean().optional(),
  elo_333_rating: z.boolean().optional(),
  elo_444_rating: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  created_at: z.boolean().optional(),
  elo_overall_rating: z.boolean().optional(),
  profile_id: z.boolean().optional(),
  games_222_count: z.boolean().optional(),
  games_333_count: z.boolean().optional(),
  games_444_count: z.boolean().optional(),
  games_overall_count: z.boolean().optional(),
  profile: z.union([z.boolean(), z.lazy(() => ProfileArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const EloRatingSelectObjectSchema: z.ZodType<Prisma.EloRatingSelect> = makeSchema() as unknown as z.ZodType<Prisma.EloRatingSelect>;
export const EloRatingSelectObjectZodSchema = makeSchema();
