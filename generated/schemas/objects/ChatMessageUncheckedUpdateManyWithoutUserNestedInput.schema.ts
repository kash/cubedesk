import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChatMessageCreateWithoutUserInputObjectSchema as ChatMessageCreateWithoutUserInputObjectSchema } from './ChatMessageCreateWithoutUserInput.schema';
import { ChatMessageUncheckedCreateWithoutUserInputObjectSchema as ChatMessageUncheckedCreateWithoutUserInputObjectSchema } from './ChatMessageUncheckedCreateWithoutUserInput.schema';
import { ChatMessageCreateOrConnectWithoutUserInputObjectSchema as ChatMessageCreateOrConnectWithoutUserInputObjectSchema } from './ChatMessageCreateOrConnectWithoutUserInput.schema';
import { ChatMessageUpsertWithWhereUniqueWithoutUserInputObjectSchema as ChatMessageUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ChatMessageUpsertWithWhereUniqueWithoutUserInput.schema';
import { ChatMessageCreateManyUserInputEnvelopeObjectSchema as ChatMessageCreateManyUserInputEnvelopeObjectSchema } from './ChatMessageCreateManyUserInputEnvelope.schema';
import { ChatMessageWhereUniqueInputObjectSchema as ChatMessageWhereUniqueInputObjectSchema } from './ChatMessageWhereUniqueInput.schema';
import { ChatMessageUpdateWithWhereUniqueWithoutUserInputObjectSchema as ChatMessageUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ChatMessageUpdateWithWhereUniqueWithoutUserInput.schema';
import { ChatMessageUpdateManyWithWhereWithoutUserInputObjectSchema as ChatMessageUpdateManyWithWhereWithoutUserInputObjectSchema } from './ChatMessageUpdateManyWithWhereWithoutUserInput.schema';
import { ChatMessageScalarWhereInputObjectSchema as ChatMessageScalarWhereInputObjectSchema } from './ChatMessageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ChatMessageCreateWithoutUserInputObjectSchema), z.lazy(() => ChatMessageCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ChatMessageUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ChatMessageUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ChatMessageCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ChatMessageCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ChatMessageUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => ChatMessageUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ChatMessageCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ChatMessageWhereUniqueInputObjectSchema), z.lazy(() => ChatMessageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ChatMessageWhereUniqueInputObjectSchema), z.lazy(() => ChatMessageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ChatMessageWhereUniqueInputObjectSchema), z.lazy(() => ChatMessageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ChatMessageWhereUniqueInputObjectSchema), z.lazy(() => ChatMessageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ChatMessageUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => ChatMessageUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ChatMessageUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => ChatMessageUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ChatMessageScalarWhereInputObjectSchema), z.lazy(() => ChatMessageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ChatMessageUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.ChatMessageUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageUncheckedUpdateManyWithoutUserNestedInput>;
export const ChatMessageUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
