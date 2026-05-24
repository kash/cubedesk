import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChatMessageSelectObjectSchema as ChatMessageSelectObjectSchema } from './objects/ChatMessageSelect.schema';
import { ChatMessageIncludeObjectSchema as ChatMessageIncludeObjectSchema } from './objects/ChatMessageInclude.schema';
import { ChatMessageUpdateInputObjectSchema as ChatMessageUpdateInputObjectSchema } from './objects/ChatMessageUpdateInput.schema';
import { ChatMessageUncheckedUpdateInputObjectSchema as ChatMessageUncheckedUpdateInputObjectSchema } from './objects/ChatMessageUncheckedUpdateInput.schema';
import { ChatMessageWhereUniqueInputObjectSchema as ChatMessageWhereUniqueInputObjectSchema } from './objects/ChatMessageWhereUniqueInput.schema';

export const ChatMessageUpdateOneSchema: z.ZodType<Prisma.ChatMessageUpdateArgs> = z.object({ select: ChatMessageSelectObjectSchema.optional(), include: ChatMessageIncludeObjectSchema.optional(), data: z.union([ChatMessageUpdateInputObjectSchema, ChatMessageUncheckedUpdateInputObjectSchema]), where: ChatMessageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ChatMessageUpdateArgs>;

export const ChatMessageUpdateOneZodSchema = z.object({ select: ChatMessageSelectObjectSchema.optional(), include: ChatMessageIncludeObjectSchema.optional(), data: z.union([ChatMessageUpdateInputObjectSchema, ChatMessageUncheckedUpdateInputObjectSchema]), where: ChatMessageWhereUniqueInputObjectSchema }).strict();