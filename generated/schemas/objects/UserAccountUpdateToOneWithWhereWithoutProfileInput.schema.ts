import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutProfileInputObjectSchema as UserAccountUpdateWithoutProfileInputObjectSchema } from './UserAccountUpdateWithoutProfileInput.schema';
import { UserAccountUncheckedUpdateWithoutProfileInputObjectSchema as UserAccountUncheckedUpdateWithoutProfileInputObjectSchema } from './UserAccountUncheckedUpdateWithoutProfileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutProfileInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutProfileInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutProfileInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutProfileInput>;
export const UserAccountUpdateToOneWithWhereWithoutProfileInputObjectZodSchema = makeSchema();
