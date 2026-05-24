import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutBadge_typeInputObjectSchema as UserAccountUpdateWithoutBadge_typeInputObjectSchema } from './UserAccountUpdateWithoutBadge_typeInput.schema';
import { UserAccountUncheckedUpdateWithoutBadge_typeInputObjectSchema as UserAccountUncheckedUpdateWithoutBadge_typeInputObjectSchema } from './UserAccountUncheckedUpdateWithoutBadge_typeInput.schema';
import { UserAccountCreateWithoutBadge_typeInputObjectSchema as UserAccountCreateWithoutBadge_typeInputObjectSchema } from './UserAccountCreateWithoutBadge_typeInput.schema';
import { UserAccountUncheckedCreateWithoutBadge_typeInputObjectSchema as UserAccountUncheckedCreateWithoutBadge_typeInputObjectSchema } from './UserAccountUncheckedCreateWithoutBadge_typeInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutBadge_typeInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutBadge_typeInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutBadge_typeInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutBadge_typeInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutBadge_typeInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutBadge_typeInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutBadge_typeInput>;
export const UserAccountUpsertWithoutBadge_typeInputObjectZodSchema = makeSchema();
