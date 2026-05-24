import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NotificationCreateWithoutUserInputObjectSchema as NotificationCreateWithoutUserInputObjectSchema } from './NotificationCreateWithoutUserInput.schema';
import { NotificationUncheckedCreateWithoutUserInputObjectSchema as NotificationUncheckedCreateWithoutUserInputObjectSchema } from './NotificationUncheckedCreateWithoutUserInput.schema';
import { NotificationCreateOrConnectWithoutUserInputObjectSchema as NotificationCreateOrConnectWithoutUserInputObjectSchema } from './NotificationCreateOrConnectWithoutUserInput.schema';
import { NotificationCreateManyUserInputEnvelopeObjectSchema as NotificationCreateManyUserInputEnvelopeObjectSchema } from './NotificationCreateManyUserInputEnvelope.schema';
import { NotificationWhereUniqueInputObjectSchema as NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => NotificationCreateWithoutUserInputObjectSchema), z.lazy(() => NotificationCreateWithoutUserInputObjectSchema).array(), z.lazy(() => NotificationUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => NotificationUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => NotificationCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => NotificationCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => NotificationCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => NotificationWhereUniqueInputObjectSchema), z.lazy(() => NotificationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const NotificationCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.NotificationCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationCreateNestedManyWithoutUserInput>;
export const NotificationCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
