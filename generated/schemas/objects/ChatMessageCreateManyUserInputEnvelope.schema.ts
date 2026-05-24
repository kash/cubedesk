import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChatMessageCreateManyUserInputObjectSchema as ChatMessageCreateManyUserInputObjectSchema } from './ChatMessageCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ChatMessageCreateManyUserInputObjectSchema), z.lazy(() => ChatMessageCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ChatMessageCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.ChatMessageCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageCreateManyUserInputEnvelope>;
export const ChatMessageCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
