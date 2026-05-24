import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileViewCreateWithoutProfileInputObjectSchema as ProfileViewCreateWithoutProfileInputObjectSchema } from './ProfileViewCreateWithoutProfileInput.schema';
import { ProfileViewUncheckedCreateWithoutProfileInputObjectSchema as ProfileViewUncheckedCreateWithoutProfileInputObjectSchema } from './ProfileViewUncheckedCreateWithoutProfileInput.schema';
import { ProfileViewCreateOrConnectWithoutProfileInputObjectSchema as ProfileViewCreateOrConnectWithoutProfileInputObjectSchema } from './ProfileViewCreateOrConnectWithoutProfileInput.schema';
import { ProfileViewUpsertWithWhereUniqueWithoutProfileInputObjectSchema as ProfileViewUpsertWithWhereUniqueWithoutProfileInputObjectSchema } from './ProfileViewUpsertWithWhereUniqueWithoutProfileInput.schema';
import { ProfileViewCreateManyProfileInputEnvelopeObjectSchema as ProfileViewCreateManyProfileInputEnvelopeObjectSchema } from './ProfileViewCreateManyProfileInputEnvelope.schema';
import { ProfileViewWhereUniqueInputObjectSchema as ProfileViewWhereUniqueInputObjectSchema } from './ProfileViewWhereUniqueInput.schema';
import { ProfileViewUpdateWithWhereUniqueWithoutProfileInputObjectSchema as ProfileViewUpdateWithWhereUniqueWithoutProfileInputObjectSchema } from './ProfileViewUpdateWithWhereUniqueWithoutProfileInput.schema';
import { ProfileViewUpdateManyWithWhereWithoutProfileInputObjectSchema as ProfileViewUpdateManyWithWhereWithoutProfileInputObjectSchema } from './ProfileViewUpdateManyWithWhereWithoutProfileInput.schema';
import { ProfileViewScalarWhereInputObjectSchema as ProfileViewScalarWhereInputObjectSchema } from './ProfileViewScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileViewCreateWithoutProfileInputObjectSchema), z.lazy(() => ProfileViewCreateWithoutProfileInputObjectSchema).array(), z.lazy(() => ProfileViewUncheckedCreateWithoutProfileInputObjectSchema), z.lazy(() => ProfileViewUncheckedCreateWithoutProfileInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProfileViewCreateOrConnectWithoutProfileInputObjectSchema), z.lazy(() => ProfileViewCreateOrConnectWithoutProfileInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ProfileViewUpsertWithWhereUniqueWithoutProfileInputObjectSchema), z.lazy(() => ProfileViewUpsertWithWhereUniqueWithoutProfileInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProfileViewCreateManyProfileInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ProfileViewWhereUniqueInputObjectSchema), z.lazy(() => ProfileViewWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ProfileViewWhereUniqueInputObjectSchema), z.lazy(() => ProfileViewWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ProfileViewWhereUniqueInputObjectSchema), z.lazy(() => ProfileViewWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProfileViewWhereUniqueInputObjectSchema), z.lazy(() => ProfileViewWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ProfileViewUpdateWithWhereUniqueWithoutProfileInputObjectSchema), z.lazy(() => ProfileViewUpdateWithWhereUniqueWithoutProfileInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ProfileViewUpdateManyWithWhereWithoutProfileInputObjectSchema), z.lazy(() => ProfileViewUpdateManyWithWhereWithoutProfileInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ProfileViewScalarWhereInputObjectSchema), z.lazy(() => ProfileViewScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ProfileViewUncheckedUpdateManyWithoutProfileNestedInputObjectSchema: z.ZodType<Prisma.ProfileViewUncheckedUpdateManyWithoutProfileNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewUncheckedUpdateManyWithoutProfileNestedInput>;
export const ProfileViewUncheckedUpdateManyWithoutProfileNestedInputObjectZodSchema = makeSchema();
