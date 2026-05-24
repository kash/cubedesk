import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileViewCreateWithoutProfileInputObjectSchema as ProfileViewCreateWithoutProfileInputObjectSchema } from './ProfileViewCreateWithoutProfileInput.schema';
import { ProfileViewUncheckedCreateWithoutProfileInputObjectSchema as ProfileViewUncheckedCreateWithoutProfileInputObjectSchema } from './ProfileViewUncheckedCreateWithoutProfileInput.schema';
import { ProfileViewCreateOrConnectWithoutProfileInputObjectSchema as ProfileViewCreateOrConnectWithoutProfileInputObjectSchema } from './ProfileViewCreateOrConnectWithoutProfileInput.schema';
import { ProfileViewCreateManyProfileInputEnvelopeObjectSchema as ProfileViewCreateManyProfileInputEnvelopeObjectSchema } from './ProfileViewCreateManyProfileInputEnvelope.schema';
import { ProfileViewWhereUniqueInputObjectSchema as ProfileViewWhereUniqueInputObjectSchema } from './ProfileViewWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileViewCreateWithoutProfileInputObjectSchema), z.lazy(() => ProfileViewCreateWithoutProfileInputObjectSchema).array(), z.lazy(() => ProfileViewUncheckedCreateWithoutProfileInputObjectSchema), z.lazy(() => ProfileViewUncheckedCreateWithoutProfileInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProfileViewCreateOrConnectWithoutProfileInputObjectSchema), z.lazy(() => ProfileViewCreateOrConnectWithoutProfileInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProfileViewCreateManyProfileInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ProfileViewWhereUniqueInputObjectSchema), z.lazy(() => ProfileViewWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProfileViewCreateNestedManyWithoutProfileInputObjectSchema: z.ZodType<Prisma.ProfileViewCreateNestedManyWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewCreateNestedManyWithoutProfileInput>;
export const ProfileViewCreateNestedManyWithoutProfileInputObjectZodSchema = makeSchema();
