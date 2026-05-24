import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutIntegrationsInputObjectSchema as UserAccountUpdateWithoutIntegrationsInputObjectSchema } from './UserAccountUpdateWithoutIntegrationsInput.schema';
import { UserAccountUncheckedUpdateWithoutIntegrationsInputObjectSchema as UserAccountUncheckedUpdateWithoutIntegrationsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutIntegrationsInput.schema';
import { UserAccountCreateWithoutIntegrationsInputObjectSchema as UserAccountCreateWithoutIntegrationsInputObjectSchema } from './UserAccountCreateWithoutIntegrationsInput.schema';
import { UserAccountUncheckedCreateWithoutIntegrationsInputObjectSchema as UserAccountUncheckedCreateWithoutIntegrationsInputObjectSchema } from './UserAccountUncheckedCreateWithoutIntegrationsInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutIntegrationsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutIntegrationsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutIntegrationsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutIntegrationsInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutIntegrationsInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutIntegrationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutIntegrationsInput>;
export const UserAccountUpsertWithoutIntegrationsInputObjectZodSchema = makeSchema();
