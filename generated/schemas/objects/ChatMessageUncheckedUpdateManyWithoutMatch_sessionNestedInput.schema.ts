import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChatMessageCreateWithoutMatch_sessionInputObjectSchema as ChatMessageCreateWithoutMatch_sessionInputObjectSchema } from './ChatMessageCreateWithoutMatch_sessionInput.schema';
import { ChatMessageUncheckedCreateWithoutMatch_sessionInputObjectSchema as ChatMessageUncheckedCreateWithoutMatch_sessionInputObjectSchema } from './ChatMessageUncheckedCreateWithoutMatch_sessionInput.schema';
import { ChatMessageCreateOrConnectWithoutMatch_sessionInputObjectSchema as ChatMessageCreateOrConnectWithoutMatch_sessionInputObjectSchema } from './ChatMessageCreateOrConnectWithoutMatch_sessionInput.schema';
import { ChatMessageUpsertWithWhereUniqueWithoutMatch_sessionInputObjectSchema as ChatMessageUpsertWithWhereUniqueWithoutMatch_sessionInputObjectSchema } from './ChatMessageUpsertWithWhereUniqueWithoutMatch_sessionInput.schema';
import { ChatMessageCreateManyMatch_sessionInputEnvelopeObjectSchema as ChatMessageCreateManyMatch_sessionInputEnvelopeObjectSchema } from './ChatMessageCreateManyMatch_sessionInputEnvelope.schema';
import { ChatMessageWhereUniqueInputObjectSchema as ChatMessageWhereUniqueInputObjectSchema } from './ChatMessageWhereUniqueInput.schema';
import { ChatMessageUpdateWithWhereUniqueWithoutMatch_sessionInputObjectSchema as ChatMessageUpdateWithWhereUniqueWithoutMatch_sessionInputObjectSchema } from './ChatMessageUpdateWithWhereUniqueWithoutMatch_sessionInput.schema';
import { ChatMessageUpdateManyWithWhereWithoutMatch_sessionInputObjectSchema as ChatMessageUpdateManyWithWhereWithoutMatch_sessionInputObjectSchema } from './ChatMessageUpdateManyWithWhereWithoutMatch_sessionInput.schema';
import { ChatMessageScalarWhereInputObjectSchema as ChatMessageScalarWhereInputObjectSchema } from './ChatMessageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ChatMessageCreateWithoutMatch_sessionInputObjectSchema), z.lazy(() => ChatMessageCreateWithoutMatch_sessionInputObjectSchema).array(), z.lazy(() => ChatMessageUncheckedCreateWithoutMatch_sessionInputObjectSchema), z.lazy(() => ChatMessageUncheckedCreateWithoutMatch_sessionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ChatMessageCreateOrConnectWithoutMatch_sessionInputObjectSchema), z.lazy(() => ChatMessageCreateOrConnectWithoutMatch_sessionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ChatMessageUpsertWithWhereUniqueWithoutMatch_sessionInputObjectSchema), z.lazy(() => ChatMessageUpsertWithWhereUniqueWithoutMatch_sessionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ChatMessageCreateManyMatch_sessionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ChatMessageWhereUniqueInputObjectSchema), z.lazy(() => ChatMessageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ChatMessageWhereUniqueInputObjectSchema), z.lazy(() => ChatMessageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ChatMessageWhereUniqueInputObjectSchema), z.lazy(() => ChatMessageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ChatMessageWhereUniqueInputObjectSchema), z.lazy(() => ChatMessageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ChatMessageUpdateWithWhereUniqueWithoutMatch_sessionInputObjectSchema), z.lazy(() => ChatMessageUpdateWithWhereUniqueWithoutMatch_sessionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ChatMessageUpdateManyWithWhereWithoutMatch_sessionInputObjectSchema), z.lazy(() => ChatMessageUpdateManyWithWhereWithoutMatch_sessionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ChatMessageScalarWhereInputObjectSchema), z.lazy(() => ChatMessageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ChatMessageUncheckedUpdateManyWithoutMatch_sessionNestedInputObjectSchema: z.ZodType<Prisma.ChatMessageUncheckedUpdateManyWithoutMatch_sessionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageUncheckedUpdateManyWithoutMatch_sessionNestedInput>;
export const ChatMessageUncheckedUpdateManyWithoutMatch_sessionNestedInputObjectZodSchema = makeSchema();
