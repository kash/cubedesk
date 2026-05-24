import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutReports_forInputObjectSchema as UserAccountUpdateWithoutReports_forInputObjectSchema } from './UserAccountUpdateWithoutReports_forInput.schema';
import { UserAccountUncheckedUpdateWithoutReports_forInputObjectSchema as UserAccountUncheckedUpdateWithoutReports_forInputObjectSchema } from './UserAccountUncheckedUpdateWithoutReports_forInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutReports_forInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutReports_forInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutReports_forInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutReports_forInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutReports_forInput>;
export const UserAccountUpdateToOneWithWhereWithoutReports_forInputObjectZodSchema = makeSchema();
