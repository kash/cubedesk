import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutImageInputObjectSchema as UserAccountUpdateWithoutImageInputObjectSchema } from './UserAccountUpdateWithoutImageInput.schema';
import { UserAccountUncheckedUpdateWithoutImageInputObjectSchema as UserAccountUncheckedUpdateWithoutImageInputObjectSchema } from './UserAccountUncheckedUpdateWithoutImageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutImageInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutImageInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutImageInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutImageInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutImageInput>;
export const UserAccountUpdateToOneWithWhereWithoutImageInputObjectZodSchema = makeSchema();
