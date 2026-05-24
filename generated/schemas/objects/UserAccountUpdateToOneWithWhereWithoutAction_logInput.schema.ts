import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutAction_logInputObjectSchema as UserAccountUpdateWithoutAction_logInputObjectSchema } from './UserAccountUpdateWithoutAction_logInput.schema';
import { UserAccountUncheckedUpdateWithoutAction_logInputObjectSchema as UserAccountUncheckedUpdateWithoutAction_logInputObjectSchema } from './UserAccountUncheckedUpdateWithoutAction_logInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutAction_logInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutAction_logInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutAction_logInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutAction_logInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutAction_logInput>;
export const UserAccountUpdateToOneWithWhereWithoutAction_logInputObjectZodSchema = makeSchema();
