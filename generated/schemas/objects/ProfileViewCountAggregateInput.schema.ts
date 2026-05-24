import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  viewer_id: z.literal(true).optional(),
  profile_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  profile_user_id: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ProfileViewCountAggregateInputObjectSchema: z.ZodType<Prisma.ProfileViewCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewCountAggregateInputType>;
export const ProfileViewCountAggregateInputObjectZodSchema = makeSchema();
