import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutMatch_lobbiesInputObjectSchema as UserAccountUpdateWithoutMatch_lobbiesInputObjectSchema } from './UserAccountUpdateWithoutMatch_lobbiesInput.schema';
import { UserAccountUncheckedUpdateWithoutMatch_lobbiesInputObjectSchema as UserAccountUncheckedUpdateWithoutMatch_lobbiesInputObjectSchema } from './UserAccountUncheckedUpdateWithoutMatch_lobbiesInput.schema';
import { UserAccountCreateWithoutMatch_lobbiesInputObjectSchema as UserAccountCreateWithoutMatch_lobbiesInputObjectSchema } from './UserAccountCreateWithoutMatch_lobbiesInput.schema';
import { UserAccountUncheckedCreateWithoutMatch_lobbiesInputObjectSchema as UserAccountUncheckedCreateWithoutMatch_lobbiesInputObjectSchema } from './UserAccountUncheckedCreateWithoutMatch_lobbiesInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutMatch_lobbiesInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutMatch_lobbiesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutMatch_lobbiesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutMatch_lobbiesInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutMatch_lobbiesInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutMatch_lobbiesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutMatch_lobbiesInput>;
export const UserAccountUpsertWithoutMatch_lobbiesInputObjectZodSchema = makeSchema();
