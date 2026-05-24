import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutSessionsInputObjectSchema as UserAccountCreateWithoutSessionsInputObjectSchema } from './UserAccountCreateWithoutSessionsInput.schema';
import { UserAccountUncheckedCreateWithoutSessionsInputObjectSchema as UserAccountUncheckedCreateWithoutSessionsInputObjectSchema } from './UserAccountUncheckedCreateWithoutSessionsInput.schema';
import { UserAccountCreateOrConnectWithoutSessionsInputObjectSchema as UserAccountCreateOrConnectWithoutSessionsInputObjectSchema } from './UserAccountCreateOrConnectWithoutSessionsInput.schema';
import { UserAccountUpsertWithoutSessionsInputObjectSchema as UserAccountUpsertWithoutSessionsInputObjectSchema } from './UserAccountUpsertWithoutSessionsInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutSessionsInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutSessionsInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutSessionsInput.schema';
import { UserAccountUpdateWithoutSessionsInputObjectSchema as UserAccountUpdateWithoutSessionsInputObjectSchema } from './UserAccountUpdateWithoutSessionsInput.schema';
import { UserAccountUncheckedUpdateWithoutSessionsInputObjectSchema as UserAccountUncheckedUpdateWithoutSessionsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutSessionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutSessionsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutSessionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutSessionsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutSessionsInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutSessionsInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutSessionsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutSessionsInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutSessionsNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutSessionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutSessionsNestedInput>;
export const UserAccountUpdateOneRequiredWithoutSessionsNestedInputObjectZodSchema = makeSchema();
