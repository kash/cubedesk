import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChatMessageWhereUniqueInputObjectSchema as ChatMessageWhereUniqueInputObjectSchema } from './ChatMessageWhereUniqueInput.schema';
import { ChatMessageUpdateWithoutUserInputObjectSchema as ChatMessageUpdateWithoutUserInputObjectSchema } from './ChatMessageUpdateWithoutUserInput.schema';
import { ChatMessageUncheckedUpdateWithoutUserInputObjectSchema as ChatMessageUncheckedUpdateWithoutUserInputObjectSchema } from './ChatMessageUncheckedUpdateWithoutUserInput.schema';
import { ChatMessageCreateWithoutUserInputObjectSchema as ChatMessageCreateWithoutUserInputObjectSchema } from './ChatMessageCreateWithoutUserInput.schema';
import { ChatMessageUncheckedCreateWithoutUserInputObjectSchema as ChatMessageUncheckedCreateWithoutUserInputObjectSchema } from './ChatMessageUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChatMessageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ChatMessageUpdateWithoutUserInputObjectSchema), z.lazy(() => ChatMessageUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => ChatMessageCreateWithoutUserInputObjectSchema), z.lazy(() => ChatMessageUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ChatMessageUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ChatMessageUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageUpsertWithWhereUniqueWithoutUserInput>;
export const ChatMessageUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
