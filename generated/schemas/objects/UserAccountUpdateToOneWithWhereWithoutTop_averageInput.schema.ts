import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutTop_averageInputObjectSchema as UserAccountUpdateWithoutTop_averageInputObjectSchema } from './UserAccountUpdateWithoutTop_averageInput.schema';
import { UserAccountUncheckedUpdateWithoutTop_averageInputObjectSchema as UserAccountUncheckedUpdateWithoutTop_averageInputObjectSchema } from './UserAccountUncheckedUpdateWithoutTop_averageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutTop_averageInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutTop_averageInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutTop_averageInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutTop_averageInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutTop_averageInput>;
export const UserAccountUpdateToOneWithWhereWithoutTop_averageInputObjectZodSchema = makeSchema();
