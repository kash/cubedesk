import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutIntegrationsInputObjectSchema as UserAccountCreateWithoutIntegrationsInputObjectSchema } from './UserAccountCreateWithoutIntegrationsInput.schema';
import { UserAccountUncheckedCreateWithoutIntegrationsInputObjectSchema as UserAccountUncheckedCreateWithoutIntegrationsInputObjectSchema } from './UserAccountUncheckedCreateWithoutIntegrationsInput.schema';
import { UserAccountCreateOrConnectWithoutIntegrationsInputObjectSchema as UserAccountCreateOrConnectWithoutIntegrationsInputObjectSchema } from './UserAccountCreateOrConnectWithoutIntegrationsInput.schema';
import { UserAccountUpsertWithoutIntegrationsInputObjectSchema as UserAccountUpsertWithoutIntegrationsInputObjectSchema } from './UserAccountUpsertWithoutIntegrationsInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutIntegrationsInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutIntegrationsInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutIntegrationsInput.schema';
import { UserAccountUpdateWithoutIntegrationsInputObjectSchema as UserAccountUpdateWithoutIntegrationsInputObjectSchema } from './UserAccountUpdateWithoutIntegrationsInput.schema';
import { UserAccountUncheckedUpdateWithoutIntegrationsInputObjectSchema as UserAccountUncheckedUpdateWithoutIntegrationsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutIntegrationsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutIntegrationsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutIntegrationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutIntegrationsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutIntegrationsInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutIntegrationsInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutIntegrationsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutIntegrationsInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutIntegrationsNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutIntegrationsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutIntegrationsNestedInput>;
export const UserAccountUpdateOneRequiredWithoutIntegrationsNestedInputObjectZodSchema = makeSchema();
