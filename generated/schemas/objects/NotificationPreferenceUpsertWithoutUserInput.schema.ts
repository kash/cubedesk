import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NotificationPreferenceUpdateWithoutUserInputObjectSchema as NotificationPreferenceUpdateWithoutUserInputObjectSchema } from './NotificationPreferenceUpdateWithoutUserInput.schema';
import { NotificationPreferenceUncheckedUpdateWithoutUserInputObjectSchema as NotificationPreferenceUncheckedUpdateWithoutUserInputObjectSchema } from './NotificationPreferenceUncheckedUpdateWithoutUserInput.schema';
import { NotificationPreferenceCreateWithoutUserInputObjectSchema as NotificationPreferenceCreateWithoutUserInputObjectSchema } from './NotificationPreferenceCreateWithoutUserInput.schema';
import { NotificationPreferenceUncheckedCreateWithoutUserInputObjectSchema as NotificationPreferenceUncheckedCreateWithoutUserInputObjectSchema } from './NotificationPreferenceUncheckedCreateWithoutUserInput.schema';
import { NotificationPreferenceWhereInputObjectSchema as NotificationPreferenceWhereInputObjectSchema } from './NotificationPreferenceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => NotificationPreferenceUpdateWithoutUserInputObjectSchema), z.lazy(() => NotificationPreferenceUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => NotificationPreferenceCreateWithoutUserInputObjectSchema), z.lazy(() => NotificationPreferenceUncheckedCreateWithoutUserInputObjectSchema)]),
  where: z.lazy(() => NotificationPreferenceWhereInputObjectSchema).optional()
}).strict();
export const NotificationPreferenceUpsertWithoutUserInputObjectSchema: z.ZodType<Prisma.NotificationPreferenceUpsertWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationPreferenceUpsertWithoutUserInput>;
export const NotificationPreferenceUpsertWithoutUserInputObjectZodSchema = makeSchema();
