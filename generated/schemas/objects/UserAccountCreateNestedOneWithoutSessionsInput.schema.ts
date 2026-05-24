import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutSessionsInputObjectSchema as UserAccountCreateWithoutSessionsInputObjectSchema } from './UserAccountCreateWithoutSessionsInput.schema';
import { UserAccountUncheckedCreateWithoutSessionsInputObjectSchema as UserAccountUncheckedCreateWithoutSessionsInputObjectSchema } from './UserAccountUncheckedCreateWithoutSessionsInput.schema';
import { UserAccountCreateOrConnectWithoutSessionsInputObjectSchema as UserAccountCreateOrConnectWithoutSessionsInputObjectSchema } from './UserAccountCreateOrConnectWithoutSessionsInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutSessionsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutSessionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutSessionsInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutSessionsInput>;
export const UserAccountCreateNestedOneWithoutSessionsInputObjectZodSchema = makeSchema();
