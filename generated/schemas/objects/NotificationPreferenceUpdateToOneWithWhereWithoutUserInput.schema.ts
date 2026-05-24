import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NotificationPreferenceWhereInputObjectSchema as NotificationPreferenceWhereInputObjectSchema } from './NotificationPreferenceWhereInput.schema';
import { NotificationPreferenceUpdateWithoutUserInputObjectSchema as NotificationPreferenceUpdateWithoutUserInputObjectSchema } from './NotificationPreferenceUpdateWithoutUserInput.schema';
import { NotificationPreferenceUncheckedUpdateWithoutUserInputObjectSchema as NotificationPreferenceUncheckedUpdateWithoutUserInputObjectSchema } from './NotificationPreferenceUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => NotificationPreferenceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => NotificationPreferenceUpdateWithoutUserInputObjectSchema), z.lazy(() => NotificationPreferenceUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const NotificationPreferenceUpdateToOneWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.NotificationPreferenceUpdateToOneWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationPreferenceUpdateToOneWithWhereWithoutUserInput>;
export const NotificationPreferenceUpdateToOneWithWhereWithoutUserInputObjectZodSchema = makeSchema();
