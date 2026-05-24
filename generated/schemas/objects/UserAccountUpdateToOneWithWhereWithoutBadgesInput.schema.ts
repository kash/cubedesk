import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutBadgesInputObjectSchema as UserAccountUpdateWithoutBadgesInputObjectSchema } from './UserAccountUpdateWithoutBadgesInput.schema';
import { UserAccountUncheckedUpdateWithoutBadgesInputObjectSchema as UserAccountUncheckedUpdateWithoutBadgesInputObjectSchema } from './UserAccountUncheckedUpdateWithoutBadgesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutBadgesInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutBadgesInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutBadgesInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutBadgesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutBadgesInput>;
export const UserAccountUpdateToOneWithWhereWithoutBadgesInputObjectZodSchema = makeSchema();
