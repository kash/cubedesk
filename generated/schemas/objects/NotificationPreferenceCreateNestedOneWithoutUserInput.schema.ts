import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NotificationPreferenceCreateWithoutUserInputObjectSchema as NotificationPreferenceCreateWithoutUserInputObjectSchema } from './NotificationPreferenceCreateWithoutUserInput.schema';
import { NotificationPreferenceUncheckedCreateWithoutUserInputObjectSchema as NotificationPreferenceUncheckedCreateWithoutUserInputObjectSchema } from './NotificationPreferenceUncheckedCreateWithoutUserInput.schema';
import { NotificationPreferenceCreateOrConnectWithoutUserInputObjectSchema as NotificationPreferenceCreateOrConnectWithoutUserInputObjectSchema } from './NotificationPreferenceCreateOrConnectWithoutUserInput.schema';
import { NotificationPreferenceWhereUniqueInputObjectSchema as NotificationPreferenceWhereUniqueInputObjectSchema } from './NotificationPreferenceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => NotificationPreferenceCreateWithoutUserInputObjectSchema), z.lazy(() => NotificationPreferenceUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => NotificationPreferenceCreateOrConnectWithoutUserInputObjectSchema).optional(),
  connect: z.lazy(() => NotificationPreferenceWhereUniqueInputObjectSchema).optional()
}).strict();
export const NotificationPreferenceCreateNestedOneWithoutUserInputObjectSchema: z.ZodType<Prisma.NotificationPreferenceCreateNestedOneWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationPreferenceCreateNestedOneWithoutUserInput>;
export const NotificationPreferenceCreateNestedOneWithoutUserInputObjectZodSchema = makeSchema();
