import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutSessionsInputObjectSchema as UserAccountUpdateWithoutSessionsInputObjectSchema } from './UserAccountUpdateWithoutSessionsInput.schema';
import { UserAccountUncheckedUpdateWithoutSessionsInputObjectSchema as UserAccountUncheckedUpdateWithoutSessionsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutSessionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutSessionsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutSessionsInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutSessionsInput>;
export const UserAccountUpdateToOneWithWhereWithoutSessionsInputObjectZodSchema = makeSchema();
