import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChatMessageSelectObjectSchema as ChatMessageSelectObjectSchema } from './objects/ChatMessageSelect.schema';
import { ChatMessageIncludeObjectSchema as ChatMessageIncludeObjectSchema } from './objects/ChatMessageInclude.schema';
import { ChatMessageWhereUniqueInputObjectSchema as ChatMessageWhereUniqueInputObjectSchema } from './objects/ChatMessageWhereUniqueInput.schema';

export const ChatMessageDeleteOneSchema: z.ZodType<Prisma.ChatMessageDeleteArgs> = z.object({ select: ChatMessageSelectObjectSchema.optional(), include: ChatMessageIncludeObjectSchema.optional(), where: ChatMessageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ChatMessageDeleteArgs>;

export const ChatMessageDeleteOneZodSchema = z.object({ select: ChatMessageSelectObjectSchema.optional(), include: ChatMessageIncludeObjectSchema.optional(), where: ChatMessageWhereUniqueInputObjectSchema }).strict();