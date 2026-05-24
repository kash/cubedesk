import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateNestedOneWithoutViewsInputObjectSchema as ProfileCreateNestedOneWithoutViewsInputObjectSchema } from './ProfileCreateNestedOneWithoutViewsInput.schema';
import { UserAccountCreateNestedOneWithoutViewed_profilesInputObjectSchema as UserAccountCreateNestedOneWithoutViewed_profilesInputObjectSchema } from './UserAccountCreateNestedOneWithoutViewed_profilesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutViewsInputObjectSchema),
  viewer: z.lazy(() => UserAccountCreateNestedOneWithoutViewed_profilesInputObjectSchema).optional()
}).strict();
export const ProfileViewCreateWithoutProfile_userInputObjectSchema: z.ZodType<Prisma.ProfileViewCreateWithoutProfile_userInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewCreateWithoutProfile_userInput>;
export const ProfileViewCreateWithoutProfile_userInputObjectZodSchema = makeSchema();
