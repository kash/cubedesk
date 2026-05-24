import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipCreateWithoutOther_userInputObjectSchema as FriendshipCreateWithoutOther_userInputObjectSchema } from './FriendshipCreateWithoutOther_userInput.schema';
import { FriendshipUncheckedCreateWithoutOther_userInputObjectSchema as FriendshipUncheckedCreateWithoutOther_userInputObjectSchema } from './FriendshipUncheckedCreateWithoutOther_userInput.schema';
import { FriendshipCreateOrConnectWithoutOther_userInputObjectSchema as FriendshipCreateOrConnectWithoutOther_userInputObjectSchema } from './FriendshipCreateOrConnectWithoutOther_userInput.schema';
import { FriendshipCreateManyOther_userInputEnvelopeObjectSchema as FriendshipCreateManyOther_userInputEnvelopeObjectSchema } from './FriendshipCreateManyOther_userInputEnvelope.schema';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FriendshipCreateWithoutOther_userInputObjectSchema), z.lazy(() => FriendshipCreateWithoutOther_userInputObjectSchema).array(), z.lazy(() => FriendshipUncheckedCreateWithoutOther_userInputObjectSchema), z.lazy(() => FriendshipUncheckedCreateWithoutOther_userInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FriendshipCreateOrConnectWithoutOther_userInputObjectSchema), z.lazy(() => FriendshipCreateOrConnectWithoutOther_userInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FriendshipCreateManyOther_userInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FriendshipUncheckedCreateNestedManyWithoutOther_userInputObjectSchema: z.ZodType<Prisma.FriendshipUncheckedCreateNestedManyWithoutOther_userInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUncheckedCreateNestedManyWithoutOther_userInput>;
export const FriendshipUncheckedCreateNestedManyWithoutOther_userInputObjectZodSchema = makeSchema();
