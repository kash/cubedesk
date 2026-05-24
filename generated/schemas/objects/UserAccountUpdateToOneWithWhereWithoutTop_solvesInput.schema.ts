import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutTop_solvesInputObjectSchema as UserAccountUpdateWithoutTop_solvesInputObjectSchema } from './UserAccountUpdateWithoutTop_solvesInput.schema';
import { UserAccountUncheckedUpdateWithoutTop_solvesInputObjectSchema as UserAccountUncheckedUpdateWithoutTop_solvesInputObjectSchema } from './UserAccountUncheckedUpdateWithoutTop_solvesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutTop_solvesInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutTop_solvesInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutTop_solvesInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutTop_solvesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutTop_solvesInput>;
export const UserAccountUpdateToOneWithWhereWithoutTop_solvesInputObjectZodSchema = makeSchema();
