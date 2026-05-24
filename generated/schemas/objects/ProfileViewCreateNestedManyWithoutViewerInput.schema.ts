import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileViewCreateWithoutViewerInputObjectSchema as ProfileViewCreateWithoutViewerInputObjectSchema } from './ProfileViewCreateWithoutViewerInput.schema';
import { ProfileViewUncheckedCreateWithoutViewerInputObjectSchema as ProfileViewUncheckedCreateWithoutViewerInputObjectSchema } from './ProfileViewUncheckedCreateWithoutViewerInput.schema';
import { ProfileViewCreateOrConnectWithoutViewerInputObjectSchema as ProfileViewCreateOrConnectWithoutViewerInputObjectSchema } from './ProfileViewCreateOrConnectWithoutViewerInput.schema';
import { ProfileViewCreateManyViewerInputEnvelopeObjectSchema as ProfileViewCreateManyViewerInputEnvelopeObjectSchema } from './ProfileViewCreateManyViewerInputEnvelope.schema';
import { ProfileViewWhereUniqueInputObjectSchema as ProfileViewWhereUniqueInputObjectSchema } from './ProfileViewWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileViewCreateWithoutViewerInputObjectSchema), z.lazy(() => ProfileViewCreateWithoutViewerInputObjectSchema).array(), z.lazy(() => ProfileViewUncheckedCreateWithoutViewerInputObjectSchema), z.lazy(() => ProfileViewUncheckedCreateWithoutViewerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProfileViewCreateOrConnectWithoutViewerInputObjectSchema), z.lazy(() => ProfileViewCreateOrConnectWithoutViewerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProfileViewCreateManyViewerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ProfileViewWhereUniqueInputObjectSchema), z.lazy(() => ProfileViewWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProfileViewCreateNestedManyWithoutViewerInputObjectSchema: z.ZodType<Prisma.ProfileViewCreateNestedManyWithoutViewerInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewCreateNestedManyWithoutViewerInput>;
export const ProfileViewCreateNestedManyWithoutViewerInputObjectZodSchema = makeSchema();
