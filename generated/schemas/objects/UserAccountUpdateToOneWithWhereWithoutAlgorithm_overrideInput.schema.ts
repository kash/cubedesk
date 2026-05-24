import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutAlgorithm_overrideInputObjectSchema as UserAccountUpdateWithoutAlgorithm_overrideInputObjectSchema } from './UserAccountUpdateWithoutAlgorithm_overrideInput.schema';
import { UserAccountUncheckedUpdateWithoutAlgorithm_overrideInputObjectSchema as UserAccountUncheckedUpdateWithoutAlgorithm_overrideInputObjectSchema } from './UserAccountUncheckedUpdateWithoutAlgorithm_overrideInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutAlgorithm_overrideInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutAlgorithm_overrideInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutAlgorithm_overrideInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutAlgorithm_overrideInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutAlgorithm_overrideInput>;
export const UserAccountUpdateToOneWithWhereWithoutAlgorithm_overrideInputObjectZodSchema = makeSchema();
