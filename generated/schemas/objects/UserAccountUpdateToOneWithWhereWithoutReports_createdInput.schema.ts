import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutReports_createdInputObjectSchema as UserAccountUpdateWithoutReports_createdInputObjectSchema } from './UserAccountUpdateWithoutReports_createdInput.schema';
import { UserAccountUncheckedUpdateWithoutReports_createdInputObjectSchema as UserAccountUncheckedUpdateWithoutReports_createdInputObjectSchema } from './UserAccountUncheckedUpdateWithoutReports_createdInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutReports_createdInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutReports_createdInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutReports_createdInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutReports_createdInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutReports_createdInput>;
export const UserAccountUpdateToOneWithWhereWithoutReports_createdInputObjectZodSchema = makeSchema();
