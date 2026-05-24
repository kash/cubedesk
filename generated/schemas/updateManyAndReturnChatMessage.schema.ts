import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChatMessageSelectObjectSchema as ChatMessageSelectObjectSchema } from './objects/ChatMessageSelect.schema';
import { ChatMessageUpdateManyMutationInputObjectSchema as ChatMessageUpdateManyMutationInputObjectSchema } from './objects/ChatMessageUpdateManyMutationInput.schema';
import { ChatMessageWhereInputObjectSchema as ChatMessageWhereInputObjectSchema } from './objects/ChatMessageWhereInput.schema';

export const ChatMessageUpdateManyAndReturnSchema: z.ZodType<Prisma.ChatMessageUpdateManyAndReturnArgs> = z.object({ select: ChatMessageSelectObjectSchema.optional(), data: ChatMessageUpdateManyMutationInputObjectSchema, where: ChatMessageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ChatMessageUpdateManyAndReturnArgs>;

export const ChatMessageUpdateManyAndReturnZodSchema = z.object({ select: ChatMessageSelectObjectSchema.optional(), data: ChatMessageUpdateManyMutationInputObjectSchema, where: ChatMessageWhereInputObjectSchema.optional() }).strict();