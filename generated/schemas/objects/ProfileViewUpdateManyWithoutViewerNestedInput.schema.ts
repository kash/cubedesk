import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileViewCreateWithoutViewerInputObjectSchema as ProfileViewCreateWithoutViewerInputObjectSchema } from './ProfileViewCreateWithoutViewerInput.schema';
import { ProfileViewUncheckedCreateWithoutViewerInputObjectSchema as ProfileViewUncheckedCreateWithoutViewerInputObjectSchema } from './ProfileViewUncheckedCreateWithoutViewerInput.schema';
import { ProfileViewCreateOrConnectWithoutViewerInputObjectSchema as ProfileViewCreateOrConnectWithoutViewerInputObjectSchema } from './ProfileViewCreateOrConnectWithoutViewerInput.schema';
import { ProfileViewUpsertWithWhereUniqueWithoutViewerInputObjectSchema as ProfileViewUpsertWithWhereUniqueWithoutViewerInputObjectSchema } from './ProfileViewUpsertWithWhereUniqueWithoutViewerInput.schema';
import { ProfileViewCreateManyViewerInputEnvelopeObjectSchema as ProfileViewCreateManyViewerInputEnvelopeObjectSchema } from './ProfileViewCreateManyViewerInputEnvelope.schema';
import { ProfileViewWhereUniqueInputObjectSchema as ProfileViewWhereUniqueInputObjectSchema } from './ProfileViewWhereUniqueInput.schema';
import { ProfileViewUpdateWithWhereUniqueWithoutViewerInputObjectSchema as ProfileViewUpdateWithWhereUniqueWithoutViewerInputObjectSchema } from './ProfileViewUpdateWithWhereUniqueWithoutViewerInput.schema';
import { ProfileViewUpdateManyWithWhereWithoutViewerInputObjectSchema as ProfileViewUpdateManyWithWhereWithoutViewerInputObjectSchema } from './ProfileViewUpdateManyWithWhereWithoutViewerInput.schema';
import { ProfileViewScalarWhereInputObjectSchema as ProfileViewScalarWhereInputObjectSchema } from './ProfileViewScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileViewCreateWithoutViewerInputObjectSchema), z.lazy(() => ProfileViewCreateWithoutViewerInputObjectSchema).array(), z.lazy(() => ProfileViewUncheckedCreateWithoutViewerInputObjectSchema), z.lazy(() => ProfileViewUncheckedCreateWithoutViewerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProfileViewCreateOrConnectWithoutViewerInputObjectSchema), z.lazy(() => ProfileViewCreateOrConnectWithoutViewerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ProfileViewUpsertWithWhereUniqueWithoutViewerInputObjectSchema), z.lazy(() => ProfileViewUpsertWithWhereUniqueWithoutViewerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProfileViewCreateManyViewerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ProfileViewWhereUniqueInputObjectSchema), z.lazy(() => ProfileViewWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ProfileViewWhereUniqueInputObjectSchema), z.lazy(() => ProfileViewWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ProfileViewWhereUniqueInputObjectSchema), z.lazy(() => ProfileViewWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProfileViewWhereUniqueInputObjectSchema), z.lazy(() => ProfileViewWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ProfileViewUpdateWithWhereUniqueWithoutViewerInputObjectSchema), z.lazy(() => ProfileViewUpdateWithWhereUniqueWithoutViewerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ProfileViewUpdateManyWithWhereWithoutViewerInputObjectSchema), z.lazy(() => ProfileViewUpdateManyWithWhereWithoutViewerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ProfileViewScalarWhereInputObjectSchema), z.lazy(() => ProfileViewScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ProfileViewUpdateManyWithoutViewerNestedInputObjectSchema: z.ZodType<Prisma.ProfileViewUpdateManyWithoutViewerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewUpdateManyWithoutViewerNestedInput>;
export const ProfileViewUpdateManyWithoutViewerNestedInputObjectZodSchema = makeSchema();
