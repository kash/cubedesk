import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileViewCreateWithoutProfile_userInputObjectSchema as ProfileViewCreateWithoutProfile_userInputObjectSchema } from './ProfileViewCreateWithoutProfile_userInput.schema';
import { ProfileViewUncheckedCreateWithoutProfile_userInputObjectSchema as ProfileViewUncheckedCreateWithoutProfile_userInputObjectSchema } from './ProfileViewUncheckedCreateWithoutProfile_userInput.schema';
import { ProfileViewCreateOrConnectWithoutProfile_userInputObjectSchema as ProfileViewCreateOrConnectWithoutProfile_userInputObjectSchema } from './ProfileViewCreateOrConnectWithoutProfile_userInput.schema';
import { ProfileViewUpsertWithWhereUniqueWithoutProfile_userInputObjectSchema as ProfileViewUpsertWithWhereUniqueWithoutProfile_userInputObjectSchema } from './ProfileViewUpsertWithWhereUniqueWithoutProfile_userInput.schema';
import { ProfileViewCreateManyProfile_userInputEnvelopeObjectSchema as ProfileViewCreateManyProfile_userInputEnvelopeObjectSchema } from './ProfileViewCreateManyProfile_userInputEnvelope.schema';
import { ProfileViewWhereUniqueInputObjectSchema as ProfileViewWhereUniqueInputObjectSchema } from './ProfileViewWhereUniqueInput.schema';
import { ProfileViewUpdateWithWhereUniqueWithoutProfile_userInputObjectSchema as ProfileViewUpdateWithWhereUniqueWithoutProfile_userInputObjectSchema } from './ProfileViewUpdateWithWhereUniqueWithoutProfile_userInput.schema';
import { ProfileViewUpdateManyWithWhereWithoutProfile_userInputObjectSchema as ProfileViewUpdateManyWithWhereWithoutProfile_userInputObjectSchema } from './ProfileViewUpdateManyWithWhereWithoutProfile_userInput.schema';
import { ProfileViewScalarWhereInputObjectSchema as ProfileViewScalarWhereInputObjectSchema } from './ProfileViewScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileViewCreateWithoutProfile_userInputObjectSchema), z.lazy(() => ProfileViewCreateWithoutProfile_userInputObjectSchema).array(), z.lazy(() => ProfileViewUncheckedCreateWithoutProfile_userInputObjectSchema), z.lazy(() => ProfileViewUncheckedCreateWithoutProfile_userInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProfileViewCreateOrConnectWithoutProfile_userInputObjectSchema), z.lazy(() => ProfileViewCreateOrConnectWithoutProfile_userInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ProfileViewUpsertWithWhereUniqueWithoutProfile_userInputObjectSchema), z.lazy(() => ProfileViewUpsertWithWhereUniqueWithoutProfile_userInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProfileViewCreateManyProfile_userInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ProfileViewWhereUniqueInputObjectSchema), z.lazy(() => ProfileViewWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ProfileViewWhereUniqueInputObjectSchema), z.lazy(() => ProfileViewWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ProfileViewWhereUniqueInputObjectSchema), z.lazy(() => ProfileViewWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProfileViewWhereUniqueInputObjectSchema), z.lazy(() => ProfileViewWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ProfileViewUpdateWithWhereUniqueWithoutProfile_userInputObjectSchema), z.lazy(() => ProfileViewUpdateWithWhereUniqueWithoutProfile_userInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ProfileViewUpdateManyWithWhereWithoutProfile_userInputObjectSchema), z.lazy(() => ProfileViewUpdateManyWithWhereWithoutProfile_userInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ProfileViewScalarWhereInputObjectSchema), z.lazy(() => ProfileViewScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ProfileViewUncheckedUpdateManyWithoutProfile_userNestedInputObjectSchema: z.ZodType<Prisma.ProfileViewUncheckedUpdateManyWithoutProfile_userNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewUncheckedUpdateManyWithoutProfile_userNestedInput>;
export const ProfileViewUncheckedUpdateManyWithoutProfile_userNestedInputObjectZodSchema = makeSchema();
