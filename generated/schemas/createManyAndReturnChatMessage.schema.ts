import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChatMessageSelectObjectSchema as ChatMessageSelectObjectSchema } from './objects/ChatMessageSelect.schema';
import { ChatMessageCreateManyInputObjectSchema as ChatMessageCreateManyInputObjectSchema } from './objects/ChatMessageCreateManyInput.schema';

export const ChatMessageCreateManyAndReturnSchema: z.ZodType<Prisma.ChatMessageCreateManyAndReturnArgs> = z.object({ select: ChatMessageSelectObjectSchema.optional(), data: z.union([ ChatMessageCreateManyInputObjectSchema, z.array(ChatMessageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ChatMessageCreateManyAndReturnArgs>;

export const ChatMessageCreateManyAndReturnZodSchema = z.object({ select: ChatMessageSelectObjectSchema.optional(), data: z.union([ ChatMessageCreateManyInputObjectSchema, z.array(ChatMessageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();