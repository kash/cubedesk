import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutIntegrationsInputObjectSchema as UserAccountCreateWithoutIntegrationsInputObjectSchema } from './UserAccountCreateWithoutIntegrationsInput.schema';
import { UserAccountUncheckedCreateWithoutIntegrationsInputObjectSchema as UserAccountUncheckedCreateWithoutIntegrationsInputObjectSchema } from './UserAccountUncheckedCreateWithoutIntegrationsInput.schema';
import { UserAccountCreateOrConnectWithoutIntegrationsInputObjectSchema as UserAccountCreateOrConnectWithoutIntegrationsInputObjectSchema } from './UserAccountCreateOrConnectWithoutIntegrationsInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutIntegrationsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutIntegrationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutIntegrationsInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutIntegrationsInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutIntegrationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutIntegrationsInput>;
export const UserAccountCreateNestedOneWithoutIntegrationsInputObjectZodSchema = makeSchema();
