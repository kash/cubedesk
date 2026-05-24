import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutCreated_bansInputObjectSchema as UserAccountUpdateWithoutCreated_bansInputObjectSchema } from './UserAccountUpdateWithoutCreated_bansInput.schema';
import { UserAccountUncheckedUpdateWithoutCreated_bansInputObjectSchema as UserAccountUncheckedUpdateWithoutCreated_bansInputObjectSchema } from './UserAccountUncheckedUpdateWithoutCreated_bansInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutCreated_bansInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutCreated_bansInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutCreated_bansInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutCreated_bansInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutCreated_bansInput>;
export const UserAccountUpdateToOneWithWhereWithoutCreated_bansInputObjectZodSchema = makeSchema();
