import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipCreateWithoutUserInputObjectSchema as FriendshipCreateWithoutUserInputObjectSchema } from './FriendshipCreateWithoutUserInput.schema';
import { FriendshipUncheckedCreateWithoutUserInputObjectSchema as FriendshipUncheckedCreateWithoutUserInputObjectSchema } from './FriendshipUncheckedCreateWithoutUserInput.schema';
import { FriendshipCreateOrConnectWithoutUserInputObjectSchema as FriendshipCreateOrConnectWithoutUserInputObjectSchema } from './FriendshipCreateOrConnectWithoutUserInput.schema';
import { FriendshipCreateManyUserInputEnvelopeObjectSchema as FriendshipCreateManyUserInputEnvelopeObjectSchema } from './FriendshipCreateManyUserInputEnvelope.schema';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FriendshipCreateWithoutUserInputObjectSchema), z.lazy(() => FriendshipCreateWithoutUserInputObjectSchema).array(), z.lazy(() => FriendshipUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => FriendshipUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FriendshipCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => FriendshipCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FriendshipCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FriendshipCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.FriendshipCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateNestedManyWithoutUserInput>;
export const FriendshipCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
