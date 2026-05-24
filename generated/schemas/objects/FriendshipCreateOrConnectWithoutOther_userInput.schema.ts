import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema';
import { FriendshipCreateWithoutOther_userInputObjectSchema as FriendshipCreateWithoutOther_userInputObjectSchema } from './FriendshipCreateWithoutOther_userInput.schema';
import { FriendshipUncheckedCreateWithoutOther_userInputObjectSchema as FriendshipUncheckedCreateWithoutOther_userInputObjectSchema } from './FriendshipUncheckedCreateWithoutOther_userInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FriendshipCreateWithoutOther_userInputObjectSchema), z.lazy(() => FriendshipUncheckedCreateWithoutOther_userInputObjectSchema)])
}).strict();
export const FriendshipCreateOrConnectWithoutOther_userInputObjectSchema: z.ZodType<Prisma.FriendshipCreateOrConnectWithoutOther_userInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateOrConnectWithoutOther_userInput>;
export const FriendshipCreateOrConnectWithoutOther_userInputObjectZodSchema = makeSchema();
