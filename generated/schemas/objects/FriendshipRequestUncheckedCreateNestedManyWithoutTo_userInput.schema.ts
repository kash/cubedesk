import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestCreateWithoutTo_userInputObjectSchema as FriendshipRequestCreateWithoutTo_userInputObjectSchema } from './FriendshipRequestCreateWithoutTo_userInput.schema';
import { FriendshipRequestUncheckedCreateWithoutTo_userInputObjectSchema as FriendshipRequestUncheckedCreateWithoutTo_userInputObjectSchema } from './FriendshipRequestUncheckedCreateWithoutTo_userInput.schema';
import { FriendshipRequestCreateOrConnectWithoutTo_userInputObjectSchema as FriendshipRequestCreateOrConnectWithoutTo_userInputObjectSchema } from './FriendshipRequestCreateOrConnectWithoutTo_userInput.schema';
import { FriendshipRequestCreateManyTo_userInputEnvelopeObjectSchema as FriendshipRequestCreateManyTo_userInputEnvelopeObjectSchema } from './FriendshipRequestCreateManyTo_userInputEnvelope.schema';
import { FriendshipRequestWhereUniqueInputObjectSchema as FriendshipRequestWhereUniqueInputObjectSchema } from './FriendshipRequestWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FriendshipRequestCreateWithoutTo_userInputObjectSchema), z.lazy(() => FriendshipRequestCreateWithoutTo_userInputObjectSchema).array(), z.lazy(() => FriendshipRequestUncheckedCreateWithoutTo_userInputObjectSchema), z.lazy(() => FriendshipRequestUncheckedCreateWithoutTo_userInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FriendshipRequestCreateOrConnectWithoutTo_userInputObjectSchema), z.lazy(() => FriendshipRequestCreateOrConnectWithoutTo_userInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FriendshipRequestCreateManyTo_userInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema), z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FriendshipRequestUncheckedCreateNestedManyWithoutTo_userInputObjectSchema: z.ZodType<Prisma.FriendshipRequestUncheckedCreateNestedManyWithoutTo_userInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestUncheckedCreateNestedManyWithoutTo_userInput>;
export const FriendshipRequestUncheckedCreateNestedManyWithoutTo_userInputObjectZodSchema = makeSchema();
