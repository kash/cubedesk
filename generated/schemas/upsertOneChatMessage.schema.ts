import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChatMessageSelectObjectSchema as ChatMessageSelectObjectSchema } from './objects/ChatMessageSelect.schema';
import { ChatMessageIncludeObjectSchema as ChatMessageIncludeObjectSchema } from './objects/ChatMessageInclude.schema';
import { ChatMessageWhereUniqueInputObjectSchema as ChatMessageWhereUniqueInputObjectSchema } from './objects/ChatMessageWhereUniqueInput.schema';
import { ChatMessageCreateInputObjectSchema as ChatMessageCreateInputObjectSchema } from './objects/ChatMessageCreateInput.schema';
import { ChatMessageUncheckedCreateInputObjectSchema as ChatMessageUncheckedCreateInputObjectSchema } from './objects/ChatMessageUncheckedCreateInput.schema';
import { ChatMessageUpdateInputObjectSchema as ChatMessageUpdateInputObjectSchema } from './objects/ChatMessageUpdateInput.schema';
import { ChatMessageUncheckedUpdateInputObjectSchema as ChatMessageUncheckedUpdateInputObjectSchema } from './objects/ChatMessageUncheckedUpdateInput.schema';

export const ChatMessageUpsertOneSchema: z.ZodType<Prisma.ChatMessageUpsertArgs> = z.object({ select: ChatMessageSelectObjectSchema.optional(), include: ChatMessageIncludeObjectSchema.optional(), where: ChatMessageWhereUniqueInputObjectSchema, create: z.union([ ChatMessageCreateInputObjectSchema, ChatMessageUncheckedCreateInputObjectSchema ]), update: z.union([ ChatMessageUpdateInputObjectSchema, ChatMessageUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ChatMessageUpsertArgs>;

export const ChatMessageUpsertOneZodSchema = z.object({ select: ChatMessageSelectObjectSchema.optional(), include: ChatMessageIncludeObjectSchema.optional(), where: ChatMessageWhereUniqueInputObjectSchema, create: z.union([ ChatMessageCreateInputObjectSchema, ChatMessageUncheckedCreateInputObjectSchema ]), update: z.union([ ChatMessageUpdateInputObjectSchema, ChatMessageUncheckedUpdateInputObjectSchema ]) }).strict();