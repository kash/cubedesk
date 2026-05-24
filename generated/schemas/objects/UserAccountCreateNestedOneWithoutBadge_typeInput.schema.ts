import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutBadge_typeInputObjectSchema as UserAccountCreateWithoutBadge_typeInputObjectSchema } from './UserAccountCreateWithoutBadge_typeInput.schema';
import { UserAccountUncheckedCreateWithoutBadge_typeInputObjectSchema as UserAccountUncheckedCreateWithoutBadge_typeInputObjectSchema } from './UserAccountUncheckedCreateWithoutBadge_typeInput.schema';
import { UserAccountCreateOrConnectWithoutBadge_typeInputObjectSchema as UserAccountCreateOrConnectWithoutBadge_typeInputObjectSchema } from './UserAccountCreateOrConnectWithoutBadge_typeInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutBadge_typeInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutBadge_typeInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutBadge_typeInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutBadge_typeInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutBadge_typeInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutBadge_typeInput>;
export const UserAccountCreateNestedOneWithoutBadge_typeInputObjectZodSchema = makeSchema();
