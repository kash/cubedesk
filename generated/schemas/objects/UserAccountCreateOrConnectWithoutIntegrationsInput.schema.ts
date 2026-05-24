import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutIntegrationsInputObjectSchema as UserAccountCreateWithoutIntegrationsInputObjectSchema } from './UserAccountCreateWithoutIntegrationsInput.schema';
import { UserAccountUncheckedCreateWithoutIntegrationsInputObjectSchema as UserAccountUncheckedCreateWithoutIntegrationsInputObjectSchema } from './UserAccountUncheckedCreateWithoutIntegrationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutIntegrationsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutIntegrationsInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutIntegrationsInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutIntegrationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutIntegrationsInput>;
export const UserAccountCreateOrConnectWithoutIntegrationsInputObjectZodSchema = makeSchema();
