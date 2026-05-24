import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChatMessageWhereUniqueInputObjectSchema as ChatMessageWhereUniqueInputObjectSchema } from './ChatMessageWhereUniqueInput.schema';
import { ChatMessageCreateWithoutUserInputObjectSchema as ChatMessageCreateWithoutUserInputObjectSchema } from './ChatMessageCreateWithoutUserInput.schema';
import { ChatMessageUncheckedCreateWithoutUserInputObjectSchema as ChatMessageUncheckedCreateWithoutUserInputObjectSchema } from './ChatMessageUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChatMessageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ChatMessageCreateWithoutUserInputObjectSchema), z.lazy(() => ChatMessageUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ChatMessageCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.ChatMessageCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageCreateOrConnectWithoutUserInput>;
export const ChatMessageCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
