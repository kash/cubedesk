import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChatMessageCreateManyInputObjectSchema as ChatMessageCreateManyInputObjectSchema } from './objects/ChatMessageCreateManyInput.schema';

export const ChatMessageCreateManySchema: z.ZodType<Prisma.ChatMessageCreateManyArgs> = z.object({ data: z.union([ ChatMessageCreateManyInputObjectSchema, z.array(ChatMessageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ChatMessageCreateManyArgs>;

export const ChatMessageCreateManyZodSchema = z.object({ data: z.union([ ChatMessageCreateManyInputObjectSchema, z.array(ChatMessageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();