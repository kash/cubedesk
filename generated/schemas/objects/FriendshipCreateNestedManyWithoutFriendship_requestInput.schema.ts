import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipCreateWithoutFriendship_requestInputObjectSchema as FriendshipCreateWithoutFriendship_requestInputObjectSchema } from './FriendshipCreateWithoutFriendship_requestInput.schema';
import { FriendshipUncheckedCreateWithoutFriendship_requestInputObjectSchema as FriendshipUncheckedCreateWithoutFriendship_requestInputObjectSchema } from './FriendshipUncheckedCreateWithoutFriendship_requestInput.schema';
import { FriendshipCreateOrConnectWithoutFriendship_requestInputObjectSchema as FriendshipCreateOrConnectWithoutFriendship_requestInputObjectSchema } from './FriendshipCreateOrConnectWithoutFriendship_requestInput.schema';
import { FriendshipCreateManyFriendship_requestInputEnvelopeObjectSchema as FriendshipCreateManyFriendship_requestInputEnvelopeObjectSchema } from './FriendshipCreateManyFriendship_requestInputEnvelope.schema';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FriendshipCreateWithoutFriendship_requestInputObjectSchema), z.lazy(() => FriendshipCreateWithoutFriendship_requestInputObjectSchema).array(), z.lazy(() => FriendshipUncheckedCreateWithoutFriendship_requestInputObjectSchema), z.lazy(() => FriendshipUncheckedCreateWithoutFriendship_requestInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FriendshipCreateOrConnectWithoutFriendship_requestInputObjectSchema), z.lazy(() => FriendshipCreateOrConnectWithoutFriendship_requestInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FriendshipCreateManyFriendship_requestInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FriendshipCreateNestedManyWithoutFriendship_requestInputObjectSchema: z.ZodType<Prisma.FriendshipCreateNestedManyWithoutFriendship_requestInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateNestedManyWithoutFriendship_requestInput>;
export const FriendshipCreateNestedManyWithoutFriendship_requestInputObjectZodSchema = makeSchema();
