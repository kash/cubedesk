import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChatMessageWhereUniqueInputObjectSchema as ChatMessageWhereUniqueInputObjectSchema } from './ChatMessageWhereUniqueInput.schema';
import { ChatMessageUpdateWithoutMatch_sessionInputObjectSchema as ChatMessageUpdateWithoutMatch_sessionInputObjectSchema } from './ChatMessageUpdateWithoutMatch_sessionInput.schema';
import { ChatMessageUncheckedUpdateWithoutMatch_sessionInputObjectSchema as ChatMessageUncheckedUpdateWithoutMatch_sessionInputObjectSchema } from './ChatMessageUncheckedUpdateWithoutMatch_sessionInput.schema';
import { ChatMessageCreateWithoutMatch_sessionInputObjectSchema as ChatMessageCreateWithoutMatch_sessionInputObjectSchema } from './ChatMessageCreateWithoutMatch_sessionInput.schema';
import { ChatMessageUncheckedCreateWithoutMatch_sessionInputObjectSchema as ChatMessageUncheckedCreateWithoutMatch_sessionInputObjectSchema } from './ChatMessageUncheckedCreateWithoutMatch_sessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChatMessageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ChatMessageUpdateWithoutMatch_sessionInputObjectSchema), z.lazy(() => ChatMessageUncheckedUpdateWithoutMatch_sessionInputObjectSchema)]),
  create: z.union([z.lazy(() => ChatMessageCreateWithoutMatch_sessionInputObjectSchema), z.lazy(() => ChatMessageUncheckedCreateWithoutMatch_sessionInputObjectSchema)])
}).strict();
export const ChatMessageUpsertWithWhereUniqueWithoutMatch_sessionInputObjectSchema: z.ZodType<Prisma.ChatMessageUpsertWithWhereUniqueWithoutMatch_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageUpsertWithWhereUniqueWithoutMatch_sessionInput>;
export const ChatMessageUpsertWithWhereUniqueWithoutMatch_sessionInputObjectZodSchema = makeSchema();
