import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NotificationPreferenceCreateWithoutUserInputObjectSchema as NotificationPreferenceCreateWithoutUserInputObjectSchema } from './NotificationPreferenceCreateWithoutUserInput.schema';
import { NotificationPreferenceUncheckedCreateWithoutUserInputObjectSchema as NotificationPreferenceUncheckedCreateWithoutUserInputObjectSchema } from './NotificationPreferenceUncheckedCreateWithoutUserInput.schema';
import { NotificationPreferenceCreateOrConnectWithoutUserInputObjectSchema as NotificationPreferenceCreateOrConnectWithoutUserInputObjectSchema } from './NotificationPreferenceCreateOrConnectWithoutUserInput.schema';
import { NotificationPreferenceUpsertWithoutUserInputObjectSchema as NotificationPreferenceUpsertWithoutUserInputObjectSchema } from './NotificationPreferenceUpsertWithoutUserInput.schema';
import { NotificationPreferenceWhereInputObjectSchema as NotificationPreferenceWhereInputObjectSchema } from './NotificationPreferenceWhereInput.schema';
import { NotificationPreferenceWhereUniqueInputObjectSchema as NotificationPreferenceWhereUniqueInputObjectSchema } from './NotificationPreferenceWhereUniqueInput.schema';
import { NotificationPreferenceUpdateToOneWithWhereWithoutUserInputObjectSchema as NotificationPreferenceUpdateToOneWithWhereWithoutUserInputObjectSchema } from './NotificationPreferenceUpdateToOneWithWhereWithoutUserInput.schema';
import { NotificationPreferenceUpdateWithoutUserInputObjectSchema as NotificationPreferenceUpdateWithoutUserInputObjectSchema } from './NotificationPreferenceUpdateWithoutUserInput.schema';
import { NotificationPreferenceUncheckedUpdateWithoutUserInputObjectSchema as NotificationPreferenceUncheckedUpdateWithoutUserInputObjectSchema } from './NotificationPreferenceUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => NotificationPreferenceCreateWithoutUserInputObjectSchema), z.lazy(() => NotificationPreferenceUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => NotificationPreferenceCreateOrConnectWithoutUserInputObjectSchema).optional(),
  upsert: z.lazy(() => NotificationPreferenceUpsertWithoutUserInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => NotificationPreferenceWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => NotificationPreferenceWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => NotificationPreferenceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => NotificationPreferenceUpdateToOneWithWhereWithoutUserInputObjectSchema), z.lazy(() => NotificationPreferenceUpdateWithoutUserInputObjectSchema), z.lazy(() => NotificationPreferenceUncheckedUpdateWithoutUserInputObjectSchema)]).optional()
}).strict();
export const NotificationPreferenceUpdateOneWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.NotificationPreferenceUpdateOneWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationPreferenceUpdateOneWithoutUserNestedInput>;
export const NotificationPreferenceUpdateOneWithoutUserNestedInputObjectZodSchema = makeSchema();
