import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChatMessageScalarWhereInputObjectSchema as ChatMessageScalarWhereInputObjectSchema } from './ChatMessageScalarWhereInput.schema';
import { ChatMessageUpdateManyMutationInputObjectSchema as ChatMessageUpdateManyMutationInputObjectSchema } from './ChatMessageUpdateManyMutationInput.schema';
import { ChatMessageUncheckedUpdateManyWithoutMatch_sessionInputObjectSchema as ChatMessageUncheckedUpdateManyWithoutMatch_sessionInputObjectSchema } from './ChatMessageUncheckedUpdateManyWithoutMatch_sessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChatMessageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ChatMessageUpdateManyMutationInputObjectSchema), z.lazy(() => ChatMessageUncheckedUpdateManyWithoutMatch_sessionInputObjectSchema)])
}).strict();
export const ChatMessageUpdateManyWithWhereWithoutMatch_sessionInputObjectSchema: z.ZodType<Prisma.ChatMessageUpdateManyWithWhereWithoutMatch_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageUpdateManyWithWhereWithoutMatch_sessionInput>;
export const ChatMessageUpdateManyWithWhereWithoutMatch_sessionInputObjectZodSchema = makeSchema();
