import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileViewWhereUniqueInputObjectSchema as ProfileViewWhereUniqueInputObjectSchema } from './ProfileViewWhereUniqueInput.schema';
import { ProfileViewCreateWithoutProfile_userInputObjectSchema as ProfileViewCreateWithoutProfile_userInputObjectSchema } from './ProfileViewCreateWithoutProfile_userInput.schema';
import { ProfileViewUncheckedCreateWithoutProfile_userInputObjectSchema as ProfileViewUncheckedCreateWithoutProfile_userInputObjectSchema } from './ProfileViewUncheckedCreateWithoutProfile_userInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileViewWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProfileViewCreateWithoutProfile_userInputObjectSchema), z.lazy(() => ProfileViewUncheckedCreateWithoutProfile_userInputObjectSchema)])
}).strict();
export const ProfileViewCreateOrConnectWithoutProfile_userInputObjectSchema: z.ZodType<Prisma.ProfileViewCreateOrConnectWithoutProfile_userInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewCreateOrConnectWithoutProfile_userInput>;
export const ProfileViewCreateOrConnectWithoutProfile_userInputObjectZodSchema = makeSchema();
