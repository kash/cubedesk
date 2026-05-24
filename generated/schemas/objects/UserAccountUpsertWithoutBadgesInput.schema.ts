import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutBadgesInputObjectSchema as UserAccountUpdateWithoutBadgesInputObjectSchema } from './UserAccountUpdateWithoutBadgesInput.schema';
import { UserAccountUncheckedUpdateWithoutBadgesInputObjectSchema as UserAccountUncheckedUpdateWithoutBadgesInputObjectSchema } from './UserAccountUncheckedUpdateWithoutBadgesInput.schema';
import { UserAccountCreateWithoutBadgesInputObjectSchema as UserAccountCreateWithoutBadgesInputObjectSchema } from './UserAccountCreateWithoutBadgesInput.schema';
import { UserAccountUncheckedCreateWithoutBadgesInputObjectSchema as UserAccountUncheckedCreateWithoutBadgesInputObjectSchema } from './UserAccountUncheckedCreateWithoutBadgesInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutBadgesInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutBadgesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutBadgesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutBadgesInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutBadgesInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutBadgesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutBadgesInput>;
export const UserAccountUpsertWithoutBadgesInputObjectZodSchema = makeSchema();
