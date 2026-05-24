import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChatMessageWhereUniqueInputObjectSchema as ChatMessageWhereUniqueInputObjectSchema } from './ChatMessageWhereUniqueInput.schema';
import { ChatMessageUpdateWithoutMatch_sessionInputObjectSchema as ChatMessageUpdateWithoutMatch_sessionInputObjectSchema } from './ChatMessageUpdateWithoutMatch_sessionInput.schema';
import { ChatMessageUncheckedUpdateWithoutMatch_sessionInputObjectSchema as ChatMessageUncheckedUpdateWithoutMatch_sessionInputObjectSchema } from './ChatMessageUncheckedUpdateWithoutMatch_sessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChatMessageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ChatMessageUpdateWithoutMatch_sessionInputObjectSchema), z.lazy(() => ChatMessageUncheckedUpdateWithoutMatch_sessionInputObjectSchema)])
}).strict();
export const ChatMessageUpdateWithWhereUniqueWithoutMatch_sessionInputObjectSchema: z.ZodType<Prisma.ChatMessageUpdateWithWhereUniqueWithoutMatch_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageUpdateWithWhereUniqueWithoutMatch_sessionInput>;
export const ChatMessageUpdateWithWhereUniqueWithoutMatch_sessionInputObjectZodSchema = makeSchema();
