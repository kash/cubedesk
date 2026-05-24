import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChatMessageCreateWithoutUserInputObjectSchema as ChatMessageCreateWithoutUserInputObjectSchema } from './ChatMessageCreateWithoutUserInput.schema';
import { ChatMessageUncheckedCreateWithoutUserInputObjectSchema as ChatMessageUncheckedCreateWithoutUserInputObjectSchema } from './ChatMessageUncheckedCreateWithoutUserInput.schema';
import { ChatMessageCreateOrConnectWithoutUserInputObjectSchema as ChatMessageCreateOrConnectWithoutUserInputObjectSchema } from './ChatMessageCreateOrConnectWithoutUserInput.schema';
import { ChatMessageCreateManyUserInputEnvelopeObjectSchema as ChatMessageCreateManyUserInputEnvelopeObjectSchema } from './ChatMessageCreateManyUserInputEnvelope.schema';
import { ChatMessageWhereUniqueInputObjectSchema as ChatMessageWhereUniqueInputObjectSchema } from './ChatMessageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ChatMessageCreateWithoutUserInputObjectSchema), z.lazy(() => ChatMessageCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ChatMessageUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ChatMessageUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ChatMessageCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ChatMessageCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ChatMessageCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ChatMessageWhereUniqueInputObjectSchema), z.lazy(() => ChatMessageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ChatMessageUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.ChatMessageUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageUncheckedCreateNestedManyWithoutUserInput>;
export const ChatMessageUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
