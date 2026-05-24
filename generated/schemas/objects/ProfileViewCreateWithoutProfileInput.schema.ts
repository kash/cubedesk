import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutProfile_viewsInputObjectSchema as UserAccountCreateNestedOneWithoutProfile_viewsInputObjectSchema } from './UserAccountCreateNestedOneWithoutProfile_viewsInput.schema';
import { UserAccountCreateNestedOneWithoutViewed_profilesInputObjectSchema as UserAccountCreateNestedOneWithoutViewed_profilesInputObjectSchema } from './UserAccountCreateNestedOneWithoutViewed_profilesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  profile_user: z.lazy(() => UserAccountCreateNestedOneWithoutProfile_viewsInputObjectSchema),
  viewer: z.lazy(() => UserAccountCreateNestedOneWithoutViewed_profilesInputObjectSchema).optional()
}).strict();
export const ProfileViewCreateWithoutProfileInputObjectSchema: z.ZodType<Prisma.ProfileViewCreateWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewCreateWithoutProfileInput>;
export const ProfileViewCreateWithoutProfileInputObjectZodSchema = makeSchema();
