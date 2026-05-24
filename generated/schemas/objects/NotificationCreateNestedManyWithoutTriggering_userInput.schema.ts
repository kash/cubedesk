import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NotificationCreateWithoutTriggering_userInputObjectSchema as NotificationCreateWithoutTriggering_userInputObjectSchema } from './NotificationCreateWithoutTriggering_userInput.schema';
import { NotificationUncheckedCreateWithoutTriggering_userInputObjectSchema as NotificationUncheckedCreateWithoutTriggering_userInputObjectSchema } from './NotificationUncheckedCreateWithoutTriggering_userInput.schema';
import { NotificationCreateOrConnectWithoutTriggering_userInputObjectSchema as NotificationCreateOrConnectWithoutTriggering_userInputObjectSchema } from './NotificationCreateOrConnectWithoutTriggering_userInput.schema';
import { NotificationCreateManyTriggering_userInputEnvelopeObjectSchema as NotificationCreateManyTriggering_userInputEnvelopeObjectSchema } from './NotificationCreateManyTriggering_userInputEnvelope.schema';
import { NotificationWhereUniqueInputObjectSchema as NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => NotificationCreateWithoutTriggering_userInputObjectSchema), z.lazy(() => NotificationCreateWithoutTriggering_userInputObjectSchema).array(), z.lazy(() => NotificationUncheckedCreateWithoutTriggering_userInputObjectSchema), z.lazy(() => NotificationUncheckedCreateWithoutTriggering_userInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => NotificationCreateOrConnectWithoutTriggering_userInputObjectSchema), z.lazy(() => NotificationCreateOrConnectWithoutTriggering_userInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => NotificationCreateManyTriggering_userInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => NotificationWhereUniqueInputObjectSchema), z.lazy(() => NotificationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const NotificationCreateNestedManyWithoutTriggering_userInputObjectSchema: z.ZodType<Prisma.NotificationCreateNestedManyWithoutTriggering_userInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationCreateNestedManyWithoutTriggering_userInput>;
export const NotificationCreateNestedManyWithoutTriggering_userInputObjectZodSchema = makeSchema();
