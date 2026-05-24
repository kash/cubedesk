import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateNestedOneWithoutViewsInputObjectSchema as ProfileCreateNestedOneWithoutViewsInputObjectSchema } from './ProfileCreateNestedOneWithoutViewsInput.schema';
import { UserAccountCreateNestedOneWithoutProfile_viewsInputObjectSchema as UserAccountCreateNestedOneWithoutProfile_viewsInputObjectSchema } from './UserAccountCreateNestedOneWithoutProfile_viewsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutViewsInputObjectSchema),
  profile_user: z.lazy(() => UserAccountCreateNestedOneWithoutProfile_viewsInputObjectSchema)
}).strict();
export const ProfileViewCreateWithoutViewerInputObjectSchema: z.ZodType<Prisma.ProfileViewCreateWithoutViewerInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewCreateWithoutViewerInput>;
export const ProfileViewCreateWithoutViewerInputObjectZodSchema = makeSchema();
