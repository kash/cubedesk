import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NotificationCreateWithoutUserInputObjectSchema as NotificationCreateWithoutUserInputObjectSchema } from './NotificationCreateWithoutUserInput.schema';
import { NotificationUncheckedCreateWithoutUserInputObjectSchema as NotificationUncheckedCreateWithoutUserInputObjectSchema } from './NotificationUncheckedCreateWithoutUserInput.schema';
import { NotificationCreateOrConnectWithoutUserInputObjectSchema as NotificationCreateOrConnectWithoutUserInputObjectSchema } from './NotificationCreateOrConnectWithoutUserInput.schema';
import { NotificationUpsertWithWhereUniqueWithoutUserInputObjectSchema as NotificationUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './NotificationUpsertWithWhereUniqueWithoutUserInput.schema';
import { NotificationCreateManyUserInputEnvelopeObjectSchema as NotificationCreateManyUserInputEnvelopeObjectSchema } from './NotificationCreateManyUserInputEnvelope.schema';
import { NotificationWhereUniqueInputObjectSchema as NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationUpdateWithWhereUniqueWithoutUserInputObjectSchema as NotificationUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './NotificationUpdateWithWhereUniqueWithoutUserInput.schema';
import { NotificationUpdateManyWithWhereWithoutUserInputObjectSchema as NotificationUpdateManyWithWhereWithoutUserInputObjectSchema } from './NotificationUpdateManyWithWhereWithoutUserInput.schema';
import { NotificationScalarWhereInputObjectSchema as NotificationScalarWhereInputObjectSchema } from './NotificationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => NotificationCreateWithoutUserInputObjectSchema), z.lazy(() => NotificationCreateWithoutUserInputObjectSchema).array(), z.lazy(() => NotificationUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => NotificationUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => NotificationCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => NotificationCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => NotificationUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => NotificationUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => NotificationCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => NotificationWhereUniqueInputObjectSchema), z.lazy(() => NotificationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => NotificationWhereUniqueInputObjectSchema), z.lazy(() => NotificationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => NotificationWhereUniqueInputObjectSchema), z.lazy(() => NotificationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => NotificationWhereUniqueInputObjectSchema), z.lazy(() => NotificationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => NotificationUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => NotificationUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => NotificationUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => NotificationUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => NotificationScalarWhereInputObjectSchema), z.lazy(() => NotificationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const NotificationUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput>;
export const NotificationUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
