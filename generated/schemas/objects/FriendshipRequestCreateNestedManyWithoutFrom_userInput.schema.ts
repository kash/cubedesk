import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestCreateWithoutFrom_userInputObjectSchema as FriendshipRequestCreateWithoutFrom_userInputObjectSchema } from './FriendshipRequestCreateWithoutFrom_userInput.schema';
import { FriendshipRequestUncheckedCreateWithoutFrom_userInputObjectSchema as FriendshipRequestUncheckedCreateWithoutFrom_userInputObjectSchema } from './FriendshipRequestUncheckedCreateWithoutFrom_userInput.schema';
import { FriendshipRequestCreateOrConnectWithoutFrom_userInputObjectSchema as FriendshipRequestCreateOrConnectWithoutFrom_userInputObjectSchema } from './FriendshipRequestCreateOrConnectWithoutFrom_userInput.schema';
import { FriendshipRequestCreateManyFrom_userInputEnvelopeObjectSchema as FriendshipRequestCreateManyFrom_userInputEnvelopeObjectSchema } from './FriendshipRequestCreateManyFrom_userInputEnvelope.schema';
import { FriendshipRequestWhereUniqueInputObjectSchema as FriendshipRequestWhereUniqueInputObjectSchema } from './FriendshipRequestWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FriendshipRequestCreateWithoutFrom_userInputObjectSchema), z.lazy(() => FriendshipRequestCreateWithoutFrom_userInputObjectSchema).array(), z.lazy(() => FriendshipRequestUncheckedCreateWithoutFrom_userInputObjectSchema), z.lazy(() => FriendshipRequestUncheckedCreateWithoutFrom_userInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FriendshipRequestCreateOrConnectWithoutFrom_userInputObjectSchema), z.lazy(() => FriendshipRequestCreateOrConnectWithoutFrom_userInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FriendshipRequestCreateManyFrom_userInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema), z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FriendshipRequestCreateNestedManyWithoutFrom_userInputObjectSchema: z.ZodType<Prisma.FriendshipRequestCreateNestedManyWithoutFrom_userInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestCreateNestedManyWithoutFrom_userInput>;
export const FriendshipRequestCreateNestedManyWithoutFrom_userInputObjectZodSchema = makeSchema();
