import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutBadge_typeInputObjectSchema as UserAccountUpdateWithoutBadge_typeInputObjectSchema } from './UserAccountUpdateWithoutBadge_typeInput.schema';
import { UserAccountUncheckedUpdateWithoutBadge_typeInputObjectSchema as UserAccountUncheckedUpdateWithoutBadge_typeInputObjectSchema } from './UserAccountUncheckedUpdateWithoutBadge_typeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutBadge_typeInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutBadge_typeInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutBadge_typeInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutBadge_typeInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutBadge_typeInput>;
export const UserAccountUpdateToOneWithWhereWithoutBadge_typeInputObjectZodSchema = makeSchema();
