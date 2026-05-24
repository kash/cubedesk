import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChatMessageWhereUniqueInputObjectSchema as ChatMessageWhereUniqueInputObjectSchema } from './ChatMessageWhereUniqueInput.schema';
import { ChatMessageCreateWithoutMatch_sessionInputObjectSchema as ChatMessageCreateWithoutMatch_sessionInputObjectSchema } from './ChatMessageCreateWithoutMatch_sessionInput.schema';
import { ChatMessageUncheckedCreateWithoutMatch_sessionInputObjectSchema as ChatMessageUncheckedCreateWithoutMatch_sessionInputObjectSchema } from './ChatMessageUncheckedCreateWithoutMatch_sessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChatMessageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ChatMessageCreateWithoutMatch_sessionInputObjectSchema), z.lazy(() => ChatMessageUncheckedCreateWithoutMatch_sessionInputObjectSchema)])
}).strict();
export const ChatMessageCreateOrConnectWithoutMatch_sessionInputObjectSchema: z.ZodType<Prisma.ChatMessageCreateOrConnectWithoutMatch_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageCreateOrConnectWithoutMatch_sessionInput>;
export const ChatMessageCreateOrConnectWithoutMatch_sessionInputObjectZodSchema = makeSchema();
