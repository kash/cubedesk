import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChatMessageCreateManyMatch_sessionInputObjectSchema as ChatMessageCreateManyMatch_sessionInputObjectSchema } from './ChatMessageCreateManyMatch_sessionInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ChatMessageCreateManyMatch_sessionInputObjectSchema), z.lazy(() => ChatMessageCreateManyMatch_sessionInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ChatMessageCreateManyMatch_sessionInputEnvelopeObjectSchema: z.ZodType<Prisma.ChatMessageCreateManyMatch_sessionInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageCreateManyMatch_sessionInputEnvelope>;
export const ChatMessageCreateManyMatch_sessionInputEnvelopeObjectZodSchema = makeSchema();
