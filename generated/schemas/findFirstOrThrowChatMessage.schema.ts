import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChatMessageIncludeObjectSchema as ChatMessageIncludeObjectSchema } from './objects/ChatMessageInclude.schema';
import { ChatMessageOrderByWithRelationInputObjectSchema as ChatMessageOrderByWithRelationInputObjectSchema } from './objects/ChatMessageOrderByWithRelationInput.schema';
import { ChatMessageWhereInputObjectSchema as ChatMessageWhereInputObjectSchema } from './objects/ChatMessageWhereInput.schema';
import { ChatMessageWhereUniqueInputObjectSchema as ChatMessageWhereUniqueInputObjectSchema } from './objects/ChatMessageWhereUniqueInput.schema';
import { ChatMessageScalarFieldEnumSchema } from './enums/ChatMessageScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ChatMessageFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ChatMessageSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    match_session_id: z.boolean().optional(),
    message: z.boolean().optional(),
    created_at: z.boolean().optional(),
    bad_words: z.boolean().optional(),
    raw_message: z.boolean().optional(),
    match_session: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ChatMessageSelect>;

export const ChatMessageFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    match_session_id: z.boolean().optional(),
    message: z.boolean().optional(),
    created_at: z.boolean().optional(),
    bad_words: z.boolean().optional(),
    raw_message: z.boolean().optional(),
    match_session: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const ChatMessageFindFirstOrThrowSchema: z.ZodType<Prisma.ChatMessageFindFirstOrThrowArgs> = z.object({ select: ChatMessageFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ChatMessageIncludeObjectSchema.optional()), orderBy: z.union([ChatMessageOrderByWithRelationInputObjectSchema, ChatMessageOrderByWithRelationInputObjectSchema.array()]).optional(), where: ChatMessageWhereInputObjectSchema.optional(), cursor: ChatMessageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ChatMessageScalarFieldEnumSchema, ChatMessageScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ChatMessageFindFirstOrThrowArgs>;

export const ChatMessageFindFirstOrThrowZodSchema = z.object({ select: ChatMessageFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ChatMessageIncludeObjectSchema.optional()), orderBy: z.union([ChatMessageOrderByWithRelationInputObjectSchema, ChatMessageOrderByWithRelationInputObjectSchema.array()]).optional(), where: ChatMessageWhereInputObjectSchema.optional(), cursor: ChatMessageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ChatMessageScalarFieldEnumSchema, ChatMessageScalarFieldEnumSchema.array()]).optional() }).strict();