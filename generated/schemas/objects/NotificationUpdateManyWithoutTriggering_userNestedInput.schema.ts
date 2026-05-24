import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NotificationCreateWithoutTriggering_userInputObjectSchema as NotificationCreateWithoutTriggering_userInputObjectSchema } from './NotificationCreateWithoutTriggering_userInput.schema';
import { NotificationUncheckedCreateWithoutTriggering_userInputObjectSchema as NotificationUncheckedCreateWithoutTriggering_userInputObjectSchema } from './NotificationUncheckedCreateWithoutTriggering_userInput.schema';
import { NotificationCreateOrConnectWithoutTriggering_userInputObjectSchema as NotificationCreateOrConnectWithoutTriggering_userInputObjectSchema } from './NotificationCreateOrConnectWithoutTriggering_userInput.schema';
import { NotificationUpsertWithWhereUniqueWithoutTriggering_userInputObjectSchema as NotificationUpsertWithWhereUniqueWithoutTriggering_userInputObjectSchema } from './NotificationUpsertWithWhereUniqueWithoutTriggering_userInput.schema';
import { NotificationCreateManyTriggering_userInputEnvelopeObjectSchema as NotificationCreateManyTriggering_userInputEnvelopeObjectSchema } from './NotificationCreateManyTriggering_userInputEnvelope.schema';
import { NotificationWhereUniqueInputObjectSchema as NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationUpdateWithWhereUniqueWithoutTriggering_userInputObjectSchema as NotificationUpdateWithWhereUniqueWithoutTriggering_userInputObjectSchema } from './NotificationUpdateWithWhereUniqueWithoutTriggering_userInput.schema';
import { NotificationUpdateManyWithWhereWithoutTriggering_userInputObjectSchema as NotificationUpdateManyWithWhereWithoutTriggering_userInputObjectSchema } from './NotificationUpdateManyWithWhereWithoutTriggering_userInput.schema';
import { NotificationScalarWhereInputObjectSchema as NotificationScalarWhereInputObjectSchema } from './NotificationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => NotificationCreateWithoutTriggering_userInputObjectSchema), z.lazy(() => NotificationCreateWithoutTriggering_userInputObjectSchema).array(), z.lazy(() => NotificationUncheckedCreateWithoutTriggering_userInputObjectSchema), z.lazy(() => NotificationUncheckedCreateWithoutTriggering_userInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => NotificationCreateOrConnectWithoutTriggering_userInputObjectSchema), z.lazy(() => NotificationCreateOrConnectWithoutTriggering_userInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => NotificationUpsertWithWhereUniqueWithoutTriggering_userInputObjectSchema), z.lazy(() => NotificationUpsertWithWhereUniqueWithoutTriggering_userInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => NotificationCreateManyTriggering_userInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => NotificationWhereUniqueInputObjectSchema), z.lazy(() => NotificationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => NotificationWhereUniqueInputObjectSchema), z.lazy(() => NotificationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => NotificationWhereUniqueInputObjectSchema), z.lazy(() => NotificationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => NotificationWhereUniqueInputObjectSchema), z.lazy(() => NotificationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => NotificationUpdateWithWhereUniqueWithoutTriggering_userInputObjectSchema), z.lazy(() => NotificationUpdateWithWhereUniqueWithoutTriggering_userInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => NotificationUpdateManyWithWhereWithoutTriggering_userInputObjectSchema), z.lazy(() => NotificationUpdateManyWithWhereWithoutTriggering_userInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => NotificationScalarWhereInputObjectSchema), z.lazy(() => NotificationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const NotificationUpdateManyWithoutTriggering_userNestedInputObjectSchema: z.ZodType<Prisma.NotificationUpdateManyWithoutTriggering_userNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationUpdateManyWithoutTriggering_userNestedInput>;
export const NotificationUpdateManyWithoutTriggering_userNestedInputObjectZodSchema = makeSchema();
