import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileViewCreateWithoutProfile_userInputObjectSchema as ProfileViewCreateWithoutProfile_userInputObjectSchema } from './ProfileViewCreateWithoutProfile_userInput.schema';
import { ProfileViewUncheckedCreateWithoutProfile_userInputObjectSchema as ProfileViewUncheckedCreateWithoutProfile_userInputObjectSchema } from './ProfileViewUncheckedCreateWithoutProfile_userInput.schema';
import { ProfileViewCreateOrConnectWithoutProfile_userInputObjectSchema as ProfileViewCreateOrConnectWithoutProfile_userInputObjectSchema } from './ProfileViewCreateOrConnectWithoutProfile_userInput.schema';
import { ProfileViewCreateManyProfile_userInputEnvelopeObjectSchema as ProfileViewCreateManyProfile_userInputEnvelopeObjectSchema } from './ProfileViewCreateManyProfile_userInputEnvelope.schema';
import { ProfileViewWhereUniqueInputObjectSchema as ProfileViewWhereUniqueInputObjectSchema } from './ProfileViewWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileViewCreateWithoutProfile_userInputObjectSchema), z.lazy(() => ProfileViewCreateWithoutProfile_userInputObjectSchema).array(), z.lazy(() => ProfileViewUncheckedCreateWithoutProfile_userInputObjectSchema), z.lazy(() => ProfileViewUncheckedCreateWithoutProfile_userInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProfileViewCreateOrConnectWithoutProfile_userInputObjectSchema), z.lazy(() => ProfileViewCreateOrConnectWithoutProfile_userInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProfileViewCreateManyProfile_userInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ProfileViewWhereUniqueInputObjectSchema), z.lazy(() => ProfileViewWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProfileViewUncheckedCreateNestedManyWithoutProfile_userInputObjectSchema: z.ZodType<Prisma.ProfileViewUncheckedCreateNestedManyWithoutProfile_userInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewUncheckedCreateNestedManyWithoutProfile_userInput>;
export const ProfileViewUncheckedCreateNestedManyWithoutProfile_userInputObjectZodSchema = makeSchema();
