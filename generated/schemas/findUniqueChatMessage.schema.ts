import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChatMessageSelectObjectSchema as ChatMessageSelectObjectSchema } from './objects/ChatMessageSelect.schema';
import { ChatMessageIncludeObjectSchema as ChatMessageIncludeObjectSchema } from './objects/ChatMessageInclude.schema';
import { ChatMessageWhereUniqueInputObjectSchema as ChatMessageWhereUniqueInputObjectSchema } from './objects/ChatMessageWhereUniqueInput.schema';

export const ChatMessageFindUniqueSchema: z.ZodType<Prisma.ChatMessageFindUniqueArgs> = z.object({ select: ChatMessageSelectObjectSchema.optional(), include: ChatMessageIncludeObjectSchema.optional(), where: ChatMessageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ChatMessageFindUniqueArgs>;

export const ChatMessageFindUniqueZodSchema = z.object({ select: ChatMessageSelectObjectSchema.optional(), include: ChatMessageIncludeObjectSchema.optional(), where: ChatMessageWhereUniqueInputObjectSchema }).strict();