import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChatMessageScalarWhereInputObjectSchema as ChatMessageScalarWhereInputObjectSchema } from './ChatMessageScalarWhereInput.schema';
import { ChatMessageUpdateManyMutationInputObjectSchema as ChatMessageUpdateManyMutationInputObjectSchema } from './ChatMessageUpdateManyMutationInput.schema';
import { ChatMessageUncheckedUpdateManyWithoutUserInputObjectSchema as ChatMessageUncheckedUpdateManyWithoutUserInputObjectSchema } from './ChatMessageUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChatMessageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ChatMessageUpdateManyMutationInputObjectSchema), z.lazy(() => ChatMessageUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const ChatMessageUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.ChatMessageUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageUpdateManyWithWhereWithoutUserInput>;
export const ChatMessageUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
