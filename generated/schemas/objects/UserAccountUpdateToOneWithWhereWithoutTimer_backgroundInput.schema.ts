import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutTimer_backgroundInputObjectSchema as UserAccountUpdateWithoutTimer_backgroundInputObjectSchema } from './UserAccountUpdateWithoutTimer_backgroundInput.schema';
import { UserAccountUncheckedUpdateWithoutTimer_backgroundInputObjectSchema as UserAccountUncheckedUpdateWithoutTimer_backgroundInputObjectSchema } from './UserAccountUncheckedUpdateWithoutTimer_backgroundInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutTimer_backgroundInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutTimer_backgroundInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutTimer_backgroundInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutTimer_backgroundInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutTimer_backgroundInput>;
export const UserAccountUpdateToOneWithWhereWithoutTimer_backgroundInputObjectZodSchema = makeSchema();
