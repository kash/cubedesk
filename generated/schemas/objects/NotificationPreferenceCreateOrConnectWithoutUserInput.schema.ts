import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NotificationPreferenceWhereUniqueInputObjectSchema as NotificationPreferenceWhereUniqueInputObjectSchema } from './NotificationPreferenceWhereUniqueInput.schema';
import { NotificationPreferenceCreateWithoutUserInputObjectSchema as NotificationPreferenceCreateWithoutUserInputObjectSchema } from './NotificationPreferenceCreateWithoutUserInput.schema';
import { NotificationPreferenceUncheckedCreateWithoutUserInputObjectSchema as NotificationPreferenceUncheckedCreateWithoutUserInputObjectSchema } from './NotificationPreferenceUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => NotificationPreferenceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => NotificationPreferenceCreateWithoutUserInputObjectSchema), z.lazy(() => NotificationPreferenceUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const NotificationPreferenceCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.NotificationPreferenceCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationPreferenceCreateOrConnectWithoutUserInput>;
export const NotificationPreferenceCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
