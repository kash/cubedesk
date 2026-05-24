import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NotificationWhereUniqueInputObjectSchema as NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationCreateWithoutUserInputObjectSchema as NotificationCreateWithoutUserInputObjectSchema } from './NotificationCreateWithoutUserInput.schema';
import { NotificationUncheckedCreateWithoutUserInputObjectSchema as NotificationUncheckedCreateWithoutUserInputObjectSchema } from './NotificationUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => NotificationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => NotificationCreateWithoutUserInputObjectSchema), z.lazy(() => NotificationUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const NotificationCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.NotificationCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationCreateOrConnectWithoutUserInput>;
export const NotificationCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
