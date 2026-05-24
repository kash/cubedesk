import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestWhereUniqueInputObjectSchema as FriendshipRequestWhereUniqueInputObjectSchema } from './FriendshipRequestWhereUniqueInput.schema';
import { FriendshipRequestCreateWithoutTo_userInputObjectSchema as FriendshipRequestCreateWithoutTo_userInputObjectSchema } from './FriendshipRequestCreateWithoutTo_userInput.schema';
import { FriendshipRequestUncheckedCreateWithoutTo_userInputObjectSchema as FriendshipRequestUncheckedCreateWithoutTo_userInputObjectSchema } from './FriendshipRequestUncheckedCreateWithoutTo_userInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FriendshipRequestCreateWithoutTo_userInputObjectSchema), z.lazy(() => FriendshipRequestUncheckedCreateWithoutTo_userInputObjectSchema)])
}).strict();
export const FriendshipRequestCreateOrConnectWithoutTo_userInputObjectSchema: z.ZodType<Prisma.FriendshipRequestCreateOrConnectWithoutTo_userInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestCreateOrConnectWithoutTo_userInput>;
export const FriendshipRequestCreateOrConnectWithoutTo_userInputObjectZodSchema = makeSchema();
