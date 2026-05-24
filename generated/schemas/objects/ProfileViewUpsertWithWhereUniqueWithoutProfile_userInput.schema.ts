import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileViewWhereUniqueInputObjectSchema as ProfileViewWhereUniqueInputObjectSchema } from './ProfileViewWhereUniqueInput.schema';
import { ProfileViewUpdateWithoutProfile_userInputObjectSchema as ProfileViewUpdateWithoutProfile_userInputObjectSchema } from './ProfileViewUpdateWithoutProfile_userInput.schema';
import { ProfileViewUncheckedUpdateWithoutProfile_userInputObjectSchema as ProfileViewUncheckedUpdateWithoutProfile_userInputObjectSchema } from './ProfileViewUncheckedUpdateWithoutProfile_userInput.schema';
import { ProfileViewCreateWithoutProfile_userInputObjectSchema as ProfileViewCreateWithoutProfile_userInputObjectSchema } from './ProfileViewCreateWithoutProfile_userInput.schema';
import { ProfileViewUncheckedCreateWithoutProfile_userInputObjectSchema as ProfileViewUncheckedCreateWithoutProfile_userInputObjectSchema } from './ProfileViewUncheckedCreateWithoutProfile_userInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileViewWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ProfileViewUpdateWithoutProfile_userInputObjectSchema), z.lazy(() => ProfileViewUncheckedUpdateWithoutProfile_userInputObjectSchema)]),
  create: z.union([z.lazy(() => ProfileViewCreateWithoutProfile_userInputObjectSchema), z.lazy(() => ProfileViewUncheckedCreateWithoutProfile_userInputObjectSchema)])
}).strict();
export const ProfileViewUpsertWithWhereUniqueWithoutProfile_userInputObjectSchema: z.ZodType<Prisma.ProfileViewUpsertWithWhereUniqueWithoutProfile_userInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewUpsertWithWhereUniqueWithoutProfile_userInput>;
export const ProfileViewUpsertWithWhereUniqueWithoutProfile_userInputObjectZodSchema = makeSchema();
