import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NotificationWhereUniqueInputObjectSchema as NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationUpdateWithoutTriggering_userInputObjectSchema as NotificationUpdateWithoutTriggering_userInputObjectSchema } from './NotificationUpdateWithoutTriggering_userInput.schema';
import { NotificationUncheckedUpdateWithoutTriggering_userInputObjectSchema as NotificationUncheckedUpdateWithoutTriggering_userInputObjectSchema } from './NotificationUncheckedUpdateWithoutTriggering_userInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => NotificationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => NotificationUpdateWithoutTriggering_userInputObjectSchema), z.lazy(() => NotificationUncheckedUpdateWithoutTriggering_userInputObjectSchema)])
}).strict();
export const NotificationUpdateWithWhereUniqueWithoutTriggering_userInputObjectSchema: z.ZodType<Prisma.NotificationUpdateWithWhereUniqueWithoutTriggering_userInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationUpdateWithWhereUniqueWithoutTriggering_userInput>;
export const NotificationUpdateWithWhereUniqueWithoutTriggering_userInputObjectZodSchema = makeSchema();
