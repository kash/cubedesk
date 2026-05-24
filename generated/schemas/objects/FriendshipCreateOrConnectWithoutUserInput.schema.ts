import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema';
import { FriendshipCreateWithoutUserInputObjectSchema as FriendshipCreateWithoutUserInputObjectSchema } from './FriendshipCreateWithoutUserInput.schema';
import { FriendshipUncheckedCreateWithoutUserInputObjectSchema as FriendshipUncheckedCreateWithoutUserInputObjectSchema } from './FriendshipUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FriendshipCreateWithoutUserInputObjectSchema), z.lazy(() => FriendshipUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const FriendshipCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.FriendshipCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateOrConnectWithoutUserInput>;
export const FriendshipCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
