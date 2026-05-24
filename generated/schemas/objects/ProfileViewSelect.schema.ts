import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileArgsObjectSchema as ProfileArgsObjectSchema } from './ProfileArgs.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  viewer_id: z.boolean().optional(),
  profile_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  profile_user_id: z.boolean().optional(),
  profile: z.union([z.boolean(), z.lazy(() => ProfileArgsObjectSchema)]).optional(),
  profile_user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  viewer: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const ProfileViewSelectObjectSchema: z.ZodType<Prisma.ProfileViewSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewSelect>;
export const ProfileViewSelectObjectZodSchema = makeSchema();
