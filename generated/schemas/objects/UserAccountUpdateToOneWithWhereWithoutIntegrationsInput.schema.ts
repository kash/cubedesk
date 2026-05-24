import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutIntegrationsInputObjectSchema as UserAccountUpdateWithoutIntegrationsInputObjectSchema } from './UserAccountUpdateWithoutIntegrationsInput.schema';
import { UserAccountUncheckedUpdateWithoutIntegrationsInputObjectSchema as UserAccountUncheckedUpdateWithoutIntegrationsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutIntegrationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutIntegrationsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutIntegrationsInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutIntegrationsInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutIntegrationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutIntegrationsInput>;
export const UserAccountUpdateToOneWithWhereWithoutIntegrationsInputObjectZodSchema = makeSchema();
