import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestWhereUniqueInputObjectSchema as FriendshipRequestWhereUniqueInputObjectSchema } from './FriendshipRequestWhereUniqueInput.schema';
import { FriendshipRequestCreateWithoutFrom_userInputObjectSchema as FriendshipRequestCreateWithoutFrom_userInputObjectSchema } from './FriendshipRequestCreateWithoutFrom_userInput.schema';
import { FriendshipRequestUncheckedCreateWithoutFrom_userInputObjectSchema as FriendshipRequestUncheckedCreateWithoutFrom_userInputObjectSchema } from './FriendshipRequestUncheckedCreateWithoutFrom_userInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FriendshipRequestCreateWithoutFrom_userInputObjectSchema), z.lazy(() => FriendshipRequestUncheckedCreateWithoutFrom_userInputObjectSchema)])
}).strict();
export const FriendshipRequestCreateOrConnectWithoutFrom_userInputObjectSchema: z.ZodType<Prisma.FriendshipRequestCreateOrConnectWithoutFrom_userInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestCreateOrConnectWithoutFrom_userInput>;
export const FriendshipRequestCreateOrConnectWithoutFrom_userInputObjectZodSchema = makeSchema();
