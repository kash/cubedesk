import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChatMessageOrderByWithRelationInputObjectSchema as ChatMessageOrderByWithRelationInputObjectSchema } from './objects/ChatMessageOrderByWithRelationInput.schema';
import { ChatMessageWhereInputObjectSchema as ChatMessageWhereInputObjectSchema } from './objects/ChatMessageWhereInput.schema';
import { ChatMessageWhereUniqueInputObjectSchema as ChatMessageWhereUniqueInputObjectSchema } from './objects/ChatMessageWhereUniqueInput.schema';
import { ChatMessageCountAggregateInputObjectSchema as ChatMessageCountAggregateInputObjectSchema } from './objects/ChatMessageCountAggregateInput.schema';

export const ChatMessageCountSchema: z.ZodType<Prisma.ChatMessageCountArgs> = z.object({ orderBy: z.union([ChatMessageOrderByWithRelationInputObjectSchema, ChatMessageOrderByWithRelationInputObjectSchema.array()]).optional(), where: ChatMessageWhereInputObjectSchema.optional(), cursor: ChatMessageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ChatMessageCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ChatMessageCountArgs>;

export const ChatMessageCountZodSchema = z.object({ orderBy: z.union([ChatMessageOrderByWithRelationInputObjectSchema, ChatMessageOrderByWithRelationInputObjectSchema.array()]).optional(), where: ChatMessageWhereInputObjectSchema.optional(), cursor: ChatMessageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ChatMessageCountAggregateInputObjectSchema ]).optional() }).strict();