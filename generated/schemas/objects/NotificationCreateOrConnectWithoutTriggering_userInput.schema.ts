import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NotificationWhereUniqueInputObjectSchema as NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationCreateWithoutTriggering_userInputObjectSchema as NotificationCreateWithoutTriggering_userInputObjectSchema } from './NotificationCreateWithoutTriggering_userInput.schema';
import { NotificationUncheckedCreateWithoutTriggering_userInputObjectSchema as NotificationUncheckedCreateWithoutTriggering_userInputObjectSchema } from './NotificationUncheckedCreateWithoutTriggering_userInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => NotificationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => NotificationCreateWithoutTriggering_userInputObjectSchema), z.lazy(() => NotificationUncheckedCreateWithoutTriggering_userInputObjectSchema)])
}).strict();
export const NotificationCreateOrConnectWithoutTriggering_userInputObjectSchema: z.ZodType<Prisma.NotificationCreateOrConnectWithoutTriggering_userInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationCreateOrConnectWithoutTriggering_userInput>;
export const NotificationCreateOrConnectWithoutTriggering_userInputObjectZodSchema = makeSchema();
