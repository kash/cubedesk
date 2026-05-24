import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutBadge_typeInputObjectSchema as UserAccountCreateWithoutBadge_typeInputObjectSchema } from './UserAccountCreateWithoutBadge_typeInput.schema';
import { UserAccountUncheckedCreateWithoutBadge_typeInputObjectSchema as UserAccountUncheckedCreateWithoutBadge_typeInputObjectSchema } from './UserAccountUncheckedCreateWithoutBadge_typeInput.schema';
import { UserAccountCreateOrConnectWithoutBadge_typeInputObjectSchema as UserAccountCreateOrConnectWithoutBadge_typeInputObjectSchema } from './UserAccountCreateOrConnectWithoutBadge_typeInput.schema';
import { UserAccountUpsertWithoutBadge_typeInputObjectSchema as UserAccountUpsertWithoutBadge_typeInputObjectSchema } from './UserAccountUpsertWithoutBadge_typeInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutBadge_typeInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutBadge_typeInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutBadge_typeInput.schema';
import { UserAccountUpdateWithoutBadge_typeInputObjectSchema as UserAccountUpdateWithoutBadge_typeInputObjectSchema } from './UserAccountUpdateWithoutBadge_typeInput.schema';
import { UserAccountUncheckedUpdateWithoutBadge_typeInputObjectSchema as UserAccountUncheckedUpdateWithoutBadge_typeInputObjectSchema } from './UserAccountUncheckedUpdateWithoutBadge_typeInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutBadge_typeInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutBadge_typeInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutBadge_typeInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutBadge_typeInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutBadge_typeInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutBadge_typeInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutBadge_typeInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneWithoutBadge_typeNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneWithoutBadge_typeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneWithoutBadge_typeNestedInput>;
export const UserAccountUpdateOneWithoutBadge_typeNestedInputObjectZodSchema = makeSchema();
