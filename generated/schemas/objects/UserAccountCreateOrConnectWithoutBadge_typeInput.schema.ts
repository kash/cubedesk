import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutBadge_typeInputObjectSchema as UserAccountCreateWithoutBadge_typeInputObjectSchema } from './UserAccountCreateWithoutBadge_typeInput.schema';
import { UserAccountUncheckedCreateWithoutBadge_typeInputObjectSchema as UserAccountUncheckedCreateWithoutBadge_typeInputObjectSchema } from './UserAccountUncheckedCreateWithoutBadge_typeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutBadge_typeInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutBadge_typeInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutBadge_typeInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutBadge_typeInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutBadge_typeInput>;
export const UserAccountCreateOrConnectWithoutBadge_typeInputObjectZodSchema = makeSchema();
