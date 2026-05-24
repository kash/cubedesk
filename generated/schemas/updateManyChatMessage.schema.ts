import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChatMessageUpdateManyMutationInputObjectSchema as ChatMessageUpdateManyMutationInputObjectSchema } from './objects/ChatMessageUpdateManyMutationInput.schema';
import { ChatMessageWhereInputObjectSchema as ChatMessageWhereInputObjectSchema } from './objects/ChatMessageWhereInput.schema';

export const ChatMessageUpdateManySchema: z.ZodType<Prisma.ChatMessageUpdateManyArgs> = z.object({ data: ChatMessageUpdateManyMutationInputObjectSchema, where: ChatMessageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ChatMessageUpdateManyArgs>;

export const ChatMessageUpdateManyZodSchema = z.object({ data: ChatMessageUpdateManyMutationInputObjectSchema, where: ChatMessageWhereInputObjectSchema.optional() }).strict();