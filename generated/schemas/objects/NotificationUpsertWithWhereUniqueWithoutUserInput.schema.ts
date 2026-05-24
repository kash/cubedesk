import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NotificationWhereUniqueInputObjectSchema as NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationUpdateWithoutUserInputObjectSchema as NotificationUpdateWithoutUserInputObjectSchema } from './NotificationUpdateWithoutUserInput.schema';
import { NotificationUncheckedUpdateWithoutUserInputObjectSchema as NotificationUncheckedUpdateWithoutUserInputObjectSchema } from './NotificationUncheckedUpdateWithoutUserInput.schema';
import { NotificationCreateWithoutUserInputObjectSchema as NotificationCreateWithoutUserInputObjectSchema } from './NotificationCreateWithoutUserInput.schema';
import { NotificationUncheckedCreateWithoutUserInputObjectSchema as NotificationUncheckedCreateWithoutUserInputObjectSchema } from './NotificationUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => NotificationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => NotificationUpdateWithoutUserInputObjectSchema), z.lazy(() => NotificationUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => NotificationCreateWithoutUserInputObjectSchema), z.lazy(() => NotificationUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const NotificationUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.NotificationUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationUpsertWithWhereUniqueWithoutUserInput>;
export const NotificationUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
