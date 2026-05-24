import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChatMessageSelectObjectSchema as ChatMessageSelectObjectSchema } from './objects/ChatMessageSelect.schema';
import { ChatMessageIncludeObjectSchema as ChatMessageIncludeObjectSchema } from './objects/ChatMessageInclude.schema';
import { ChatMessageCreateInputObjectSchema as ChatMessageCreateInputObjectSchema } from './objects/ChatMessageCreateInput.schema';
import { ChatMessageUncheckedCreateInputObjectSchema as ChatMessageUncheckedCreateInputObjectSchema } from './objects/ChatMessageUncheckedCreateInput.schema';

export const ChatMessageCreateOneSchema: z.ZodType<Prisma.ChatMessageCreateArgs> = z.object({ select: ChatMessageSelectObjectSchema.optional(), include: ChatMessageIncludeObjectSchema.optional(), data: z.union([ChatMessageCreateInputObjectSchema, ChatMessageUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ChatMessageCreateArgs>;

export const ChatMessageCreateOneZodSchema = z.object({ select: ChatMessageSelectObjectSchema.optional(), include: ChatMessageIncludeObjectSchema.optional(), data: z.union([ChatMessageCreateInputObjectSchema, ChatMessageUncheckedCreateInputObjectSchema]) }).strict();