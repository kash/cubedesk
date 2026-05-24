import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutLiked_custom_trainersInputObjectSchema as UserAccountUpdateWithoutLiked_custom_trainersInputObjectSchema } from './UserAccountUpdateWithoutLiked_custom_trainersInput.schema';
import { UserAccountUncheckedUpdateWithoutLiked_custom_trainersInputObjectSchema as UserAccountUncheckedUpdateWithoutLiked_custom_trainersInputObjectSchema } from './UserAccountUncheckedUpdateWithoutLiked_custom_trainersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutLiked_custom_trainersInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutLiked_custom_trainersInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutLiked_custom_trainersInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutLiked_custom_trainersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutLiked_custom_trainersInput>;
export const UserAccountUpdateToOneWithWhereWithoutLiked_custom_trainersInputObjectZodSchema = makeSchema();
