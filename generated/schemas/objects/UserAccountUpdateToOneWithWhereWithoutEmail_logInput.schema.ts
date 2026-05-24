import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutEmail_logInputObjectSchema as UserAccountUpdateWithoutEmail_logInputObjectSchema } from './UserAccountUpdateWithoutEmail_logInput.schema';
import { UserAccountUncheckedUpdateWithoutEmail_logInputObjectSchema as UserAccountUncheckedUpdateWithoutEmail_logInputObjectSchema } from './UserAccountUncheckedUpdateWithoutEmail_logInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutEmail_logInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutEmail_logInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutEmail_logInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutEmail_logInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutEmail_logInput>;
export const UserAccountUpdateToOneWithWhereWithoutEmail_logInputObjectZodSchema = makeSchema();
