import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutTimer_backgroundInputObjectSchema as UserAccountCreateWithoutTimer_backgroundInputObjectSchema } from './UserAccountCreateWithoutTimer_backgroundInput.schema';
import { UserAccountUncheckedCreateWithoutTimer_backgroundInputObjectSchema as UserAccountUncheckedCreateWithoutTimer_backgroundInputObjectSchema } from './UserAccountUncheckedCreateWithoutTimer_backgroundInput.schema';
import { UserAccountCreateOrConnectWithoutTimer_backgroundInputObjectSchema as UserAccountCreateOrConnectWithoutTimer_backgroundInputObjectSchema } from './UserAccountCreateOrConnectWithoutTimer_backgroundInput.schema';
import { UserAccountUpsertWithoutTimer_backgroundInputObjectSchema as UserAccountUpsertWithoutTimer_backgroundInputObjectSchema } from './UserAccountUpsertWithoutTimer_backgroundInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutTimer_backgroundInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutTimer_backgroundInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutTimer_backgroundInput.schema';
import { UserAccountUpdateWithoutTimer_backgroundInputObjectSchema as UserAccountUpdateWithoutTimer_backgroundInputObjectSchema } from './UserAccountUpdateWithoutTimer_backgroundInput.schema';
import { UserAccountUncheckedUpdateWithoutTimer_backgroundInputObjectSchema as UserAccountUncheckedUpdateWithoutTimer_backgroundInputObjectSchema } from './UserAccountUncheckedUpdateWithoutTimer_backgroundInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutTimer_backgroundInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutTimer_backgroundInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutTimer_backgroundInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutTimer_backgroundInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutTimer_backgroundInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutTimer_backgroundInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutTimer_backgroundInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutTimer_backgroundNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutTimer_backgroundNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutTimer_backgroundNestedInput>;
export const UserAccountUpdateOneRequiredWithoutTimer_backgroundNestedInputObjectZodSchema = makeSchema();
