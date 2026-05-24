import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutReports_forInputObjectSchema as UserAccountCreateWithoutReports_forInputObjectSchema } from './UserAccountCreateWithoutReports_forInput.schema';
import { UserAccountUncheckedCreateWithoutReports_forInputObjectSchema as UserAccountUncheckedCreateWithoutReports_forInputObjectSchema } from './UserAccountUncheckedCreateWithoutReports_forInput.schema';
import { UserAccountCreateOrConnectWithoutReports_forInputObjectSchema as UserAccountCreateOrConnectWithoutReports_forInputObjectSchema } from './UserAccountCreateOrConnectWithoutReports_forInput.schema';
import { UserAccountUpsertWithoutReports_forInputObjectSchema as UserAccountUpsertWithoutReports_forInputObjectSchema } from './UserAccountUpsertWithoutReports_forInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutReports_forInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutReports_forInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutReports_forInput.schema';
import { UserAccountUpdateWithoutReports_forInputObjectSchema as UserAccountUpdateWithoutReports_forInputObjectSchema } from './UserAccountUpdateWithoutReports_forInput.schema';
import { UserAccountUncheckedUpdateWithoutReports_forInputObjectSchema as UserAccountUncheckedUpdateWithoutReports_forInputObjectSchema } from './UserAccountUncheckedUpdateWithoutReports_forInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutReports_forInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutReports_forInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutReports_forInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutReports_forInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutReports_forInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutReports_forInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutReports_forInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutReports_forNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutReports_forNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutReports_forNestedInput>;
export const UserAccountUpdateOneRequiredWithoutReports_forNestedInputObjectZodSchema = makeSchema();
