import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutBansInputObjectSchema as UserAccountUpdateWithoutBansInputObjectSchema } from './UserAccountUpdateWithoutBansInput.schema';
import { UserAccountUncheckedUpdateWithoutBansInputObjectSchema as UserAccountUncheckedUpdateWithoutBansInputObjectSchema } from './UserAccountUncheckedUpdateWithoutBansInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutBansInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutBansInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutBansInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutBansInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutBansInput>;
export const UserAccountUpdateToOneWithWhereWithoutBansInputObjectZodSchema = makeSchema();
