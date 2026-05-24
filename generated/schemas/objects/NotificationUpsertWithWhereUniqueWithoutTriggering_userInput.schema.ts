import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NotificationWhereUniqueInputObjectSchema as NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationUpdateWithoutTriggering_userInputObjectSchema as NotificationUpdateWithoutTriggering_userInputObjectSchema } from './NotificationUpdateWithoutTriggering_userInput.schema';
import { NotificationUncheckedUpdateWithoutTriggering_userInputObjectSchema as NotificationUncheckedUpdateWithoutTriggering_userInputObjectSchema } from './NotificationUncheckedUpdateWithoutTriggering_userInput.schema';
import { NotificationCreateWithoutTriggering_userInputObjectSchema as NotificationCreateWithoutTriggering_userInputObjectSchema } from './NotificationCreateWithoutTriggering_userInput.schema';
import { NotificationUncheckedCreateWithoutTriggering_userInputObjectSchema as NotificationUncheckedCreateWithoutTriggering_userInputObjectSchema } from './NotificationUncheckedCreateWithoutTriggering_userInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => NotificationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => NotificationUpdateWithoutTriggering_userInputObjectSchema), z.lazy(() => NotificationUncheckedUpdateWithoutTriggering_userInputObjectSchema)]),
  create: z.union([z.lazy(() => NotificationCreateWithoutTriggering_userInputObjectSchema), z.lazy(() => NotificationUncheckedCreateWithoutTriggering_userInputObjectSchema)])
}).strict();
export const NotificationUpsertWithWhereUniqueWithoutTriggering_userInputObjectSchema: z.ZodType<Prisma.NotificationUpsertWithWhereUniqueWithoutTriggering_userInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationUpsertWithWhereUniqueWithoutTriggering_userInput>;
export const NotificationUpsertWithWhereUniqueWithoutTriggering_userInputObjectZodSchema = makeSchema();
