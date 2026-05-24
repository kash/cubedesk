import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutReports_createdInputObjectSchema as UserAccountCreateWithoutReports_createdInputObjectSchema } from './UserAccountCreateWithoutReports_createdInput.schema';
import { UserAccountUncheckedCreateWithoutReports_createdInputObjectSchema as UserAccountUncheckedCreateWithoutReports_createdInputObjectSchema } from './UserAccountUncheckedCreateWithoutReports_createdInput.schema';
import { UserAccountCreateOrConnectWithoutReports_createdInputObjectSchema as UserAccountCreateOrConnectWithoutReports_createdInputObjectSchema } from './UserAccountCreateOrConnectWithoutReports_createdInput.schema';
import { UserAccountUpsertWithoutReports_createdInputObjectSchema as UserAccountUpsertWithoutReports_createdInputObjectSchema } from './UserAccountUpsertWithoutReports_createdInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutReports_createdInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutReports_createdInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutReports_createdInput.schema';
import { UserAccountUpdateWithoutReports_createdInputObjectSchema as UserAccountUpdateWithoutReports_createdInputObjectSchema } from './UserAccountUpdateWithoutReports_createdInput.schema';
import { UserAccountUncheckedUpdateWithoutReports_createdInputObjectSchema as UserAccountUncheckedUpdateWithoutReports_createdInputObjectSchema } from './UserAccountUncheckedUpdateWithoutReports_createdInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutReports_createdInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutReports_createdInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutReports_createdInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutReports_createdInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutReports_createdInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutReports_createdInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutReports_createdInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutReports_createdNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutReports_createdNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutReports_createdNestedInput>;
export const UserAccountUpdateOneRequiredWithoutReports_createdNestedInputObjectZodSchema = makeSchema();
