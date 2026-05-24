import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChatMessageWhereInputObjectSchema as ChatMessageWhereInputObjectSchema } from './objects/ChatMessageWhereInput.schema';

export const ChatMessageDeleteManySchema: z.ZodType<Prisma.ChatMessageDeleteManyArgs> = z.object({ where: ChatMessageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ChatMessageDeleteManyArgs>;

export const ChatMessageDeleteManyZodSchema = z.object({ where: ChatMessageWhereInputObjectSchema.optional() }).strict();