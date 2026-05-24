import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChatMessageCreateWithoutMatch_sessionInputObjectSchema as ChatMessageCreateWithoutMatch_sessionInputObjectSchema } from './ChatMessageCreateWithoutMatch_sessionInput.schema';
import { ChatMessageUncheckedCreateWithoutMatch_sessionInputObjectSchema as ChatMessageUncheckedCreateWithoutMatch_sessionInputObjectSchema } from './ChatMessageUncheckedCreateWithoutMatch_sessionInput.schema';
import { ChatMessageCreateOrConnectWithoutMatch_sessionInputObjectSchema as ChatMessageCreateOrConnectWithoutMatch_sessionInputObjectSchema } from './ChatMessageCreateOrConnectWithoutMatch_sessionInput.schema';
import { ChatMessageCreateManyMatch_sessionInputEnvelopeObjectSchema as ChatMessageCreateManyMatch_sessionInputEnvelopeObjectSchema } from './ChatMessageCreateManyMatch_sessionInputEnvelope.schema';
import { ChatMessageWhereUniqueInputObjectSchema as ChatMessageWhereUniqueInputObjectSchema } from './ChatMessageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ChatMessageCreateWithoutMatch_sessionInputObjectSchema), z.lazy(() => ChatMessageCreateWithoutMatch_sessionInputObjectSchema).array(), z.lazy(() => ChatMessageUncheckedCreateWithoutMatch_sessionInputObjectSchema), z.lazy(() => ChatMessageUncheckedCreateWithoutMatch_sessionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ChatMessageCreateOrConnectWithoutMatch_sessionInputObjectSchema), z.lazy(() => ChatMessageCreateOrConnectWithoutMatch_sessionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ChatMessageCreateManyMatch_sessionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ChatMessageWhereUniqueInputObjectSchema), z.lazy(() => ChatMessageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ChatMessageUncheckedCreateNestedManyWithoutMatch_sessionInputObjectSchema: z.ZodType<Prisma.ChatMessageUncheckedCreateNestedManyWithoutMatch_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageUncheckedCreateNestedManyWithoutMatch_sessionInput>;
export const ChatMessageUncheckedCreateNestedManyWithoutMatch_sessionInputObjectZodSchema = makeSchema();
