import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChatMessageWhereUniqueInputObjectSchema as ChatMessageWhereUniqueInputObjectSchema } from './ChatMessageWhereUniqueInput.schema';
import { ChatMessageUpdateWithoutUserInputObjectSchema as ChatMessageUpdateWithoutUserInputObjectSchema } from './ChatMessageUpdateWithoutUserInput.schema';
import { ChatMessageUncheckedUpdateWithoutUserInputObjectSchema as ChatMessageUncheckedUpdateWithoutUserInputObjectSchema } from './ChatMessageUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChatMessageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ChatMessageUpdateWithoutUserInputObjectSchema), z.lazy(() => ChatMessageUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const ChatMessageUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ChatMessageUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageUpdateWithWhereUniqueWithoutUserInput>;
export const ChatMessageUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
