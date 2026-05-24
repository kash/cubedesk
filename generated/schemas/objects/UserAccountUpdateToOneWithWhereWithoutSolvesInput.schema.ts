import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutSolvesInputObjectSchema as UserAccountUpdateWithoutSolvesInputObjectSchema } from './UserAccountUpdateWithoutSolvesInput.schema';
import { UserAccountUncheckedUpdateWithoutSolvesInputObjectSchema as UserAccountUncheckedUpdateWithoutSolvesInputObjectSchema } from './UserAccountUncheckedUpdateWithoutSolvesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutSolvesInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutSolvesInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutSolvesInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutSolvesInput>;
export const UserAccountUpdateToOneWithWhereWithoutSolvesInputObjectZodSchema = makeSchema();
