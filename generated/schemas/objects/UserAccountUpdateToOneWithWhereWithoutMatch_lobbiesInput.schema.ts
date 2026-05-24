import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutMatch_lobbiesInputObjectSchema as UserAccountUpdateWithoutMatch_lobbiesInputObjectSchema } from './UserAccountUpdateWithoutMatch_lobbiesInput.schema';
import { UserAccountUncheckedUpdateWithoutMatch_lobbiesInputObjectSchema as UserAccountUncheckedUpdateWithoutMatch_lobbiesInputObjectSchema } from './UserAccountUncheckedUpdateWithoutMatch_lobbiesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutMatch_lobbiesInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutMatch_lobbiesInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutMatch_lobbiesInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutMatch_lobbiesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutMatch_lobbiesInput>;
export const UserAccountUpdateToOneWithWhereWithoutMatch_lobbiesInputObjectZodSchema = makeSchema();
