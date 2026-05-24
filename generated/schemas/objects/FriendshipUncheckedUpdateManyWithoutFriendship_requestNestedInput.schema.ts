import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipCreateWithoutFriendship_requestInputObjectSchema as FriendshipCreateWithoutFriendship_requestInputObjectSchema } from './FriendshipCreateWithoutFriendship_requestInput.schema';
import { FriendshipUncheckedCreateWithoutFriendship_requestInputObjectSchema as FriendshipUncheckedCreateWithoutFriendship_requestInputObjectSchema } from './FriendshipUncheckedCreateWithoutFriendship_requestInput.schema';
import { FriendshipCreateOrConnectWithoutFriendship_requestInputObjectSchema as FriendshipCreateOrConnectWithoutFriendship_requestInputObjectSchema } from './FriendshipCreateOrConnectWithoutFriendship_requestInput.schema';
import { FriendshipUpsertWithWhereUniqueWithoutFriendship_requestInputObjectSchema as FriendshipUpsertWithWhereUniqueWithoutFriendship_requestInputObjectSchema } from './FriendshipUpsertWithWhereUniqueWithoutFriendship_requestInput.schema';
import { FriendshipCreateManyFriendship_requestInputEnvelopeObjectSchema as FriendshipCreateManyFriendship_requestInputEnvelopeObjectSchema } from './FriendshipCreateManyFriendship_requestInputEnvelope.schema';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema';
import { FriendshipUpdateWithWhereUniqueWithoutFriendship_requestInputObjectSchema as FriendshipUpdateWithWhereUniqueWithoutFriendship_requestInputObjectSchema } from './FriendshipUpdateWithWhereUniqueWithoutFriendship_requestInput.schema';
import { FriendshipUpdateManyWithWhereWithoutFriendship_requestInputObjectSchema as FriendshipUpdateManyWithWhereWithoutFriendship_requestInputObjectSchema } from './FriendshipUpdateManyWithWhereWithoutFriendship_requestInput.schema';
import { FriendshipScalarWhereInputObjectSchema as FriendshipScalarWhereInputObjectSchema } from './FriendshipScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FriendshipCreateWithoutFriendship_requestInputObjectSchema), z.lazy(() => FriendshipCreateWithoutFriendship_requestInputObjectSchema).array(), z.lazy(() => FriendshipUncheckedCreateWithoutFriendship_requestInputObjectSchema), z.lazy(() => FriendshipUncheckedCreateWithoutFriendship_requestInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FriendshipCreateOrConnectWithoutFriendship_requestInputObjectSchema), z.lazy(() => FriendshipCreateOrConnectWithoutFriendship_requestInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FriendshipUpsertWithWhereUniqueWithoutFriendship_requestInputObjectSchema), z.lazy(() => FriendshipUpsertWithWhereUniqueWithoutFriendship_requestInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FriendshipCreateManyFriendship_requestInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FriendshipUpdateWithWhereUniqueWithoutFriendship_requestInputObjectSchema), z.lazy(() => FriendshipUpdateWithWhereUniqueWithoutFriendship_requestInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FriendshipUpdateManyWithWhereWithoutFriendship_requestInputObjectSchema), z.lazy(() => FriendshipUpdateManyWithWhereWithoutFriendship_requestInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FriendshipScalarWhereInputObjectSchema), z.lazy(() => FriendshipScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FriendshipUncheckedUpdateManyWithoutFriendship_requestNestedInputObjectSchema: z.ZodType<Prisma.FriendshipUncheckedUpdateManyWithoutFriendship_requestNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUncheckedUpdateManyWithoutFriendship_requestNestedInput>;
export const FriendshipUncheckedUpdateManyWithoutFriendship_requestNestedInputObjectZodSchema = makeSchema();
