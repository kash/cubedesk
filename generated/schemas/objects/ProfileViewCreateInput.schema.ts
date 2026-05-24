import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateNestedOneWithoutViewsInputObjectSchema as ProfileCreateNestedOneWithoutViewsInputObjectSchema } from './ProfileCreateNestedOneWithoutViewsInput.schema';
import { UserAccountCreateNestedOneWithoutProfile_viewsInputObjectSchema as UserAccountCreateNestedOneWithoutProfile_viewsInputObjectSchema } from './UserAccountCreateNestedOneWithoutProfile_viewsInput.schema';
import { UserAccountCreateNestedOneWithoutViewed_profilesInputObjectSchema as UserAccountCreateNestedOneWithoutViewed_profilesInputObjectSchema } from './UserAccountCreateNestedOneWithoutViewed_profilesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutViewsInputObjectSchema),
  profile_user: z.lazy(() => UserAccountCreateNestedOneWithoutProfile_viewsInputObjectSchema),
  viewer: z.lazy(() => UserAccountCreateNestedOneWithoutViewed_profilesInputObjectSchema).optional()
}).strict();
export const ProfileViewCreateInputObjectSchema: z.ZodType<Prisma.ProfileViewCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewCreateInput>;
export const ProfileViewCreateInputObjectZodSchema = makeSchema();
