import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileViewWhereUniqueInputObjectSchema as ProfileViewWhereUniqueInputObjectSchema } from './ProfileViewWhereUniqueInput.schema';
import { ProfileViewUpdateWithoutProfile_userInputObjectSchema as ProfileViewUpdateWithoutProfile_userInputObjectSchema } from './ProfileViewUpdateWithoutProfile_userInput.schema';
import { ProfileViewUncheckedUpdateWithoutProfile_userInputObjectSchema as ProfileViewUncheckedUpdateWithoutProfile_userInputObjectSchema } from './ProfileViewUncheckedUpdateWithoutProfile_userInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileViewWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProfileViewUpdateWithoutProfile_userInputObjectSchema), z.lazy(() => ProfileViewUncheckedUpdateWithoutProfile_userInputObjectSchema)])
}).strict();
export const ProfileViewUpdateWithWhereUniqueWithoutProfile_userInputObjectSchema: z.ZodType<Prisma.ProfileViewUpdateWithWhereUniqueWithoutProfile_userInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewUpdateWithWhereUniqueWithoutProfile_userInput>;
export const ProfileViewUpdateWithWhereUniqueWithoutProfile_userInputObjectZodSchema = makeSchema();
