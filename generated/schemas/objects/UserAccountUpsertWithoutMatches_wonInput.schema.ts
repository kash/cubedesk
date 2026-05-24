import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutMatches_wonInputObjectSchema as UserAccountUpdateWithoutMatches_wonInputObjectSchema } from './UserAccountUpdateWithoutMatches_wonInput.schema';
import { UserAccountUncheckedUpdateWithoutMatches_wonInputObjectSchema as UserAccountUncheckedUpdateWithoutMatches_wonInputObjectSchema } from './UserAccountUncheckedUpdateWithoutMatches_wonInput.schema';
import { UserAccountCreateWithoutMatches_wonInputObjectSchema as UserAccountCreateWithoutMatches_wonInputObjectSchema } from './UserAccountCreateWithoutMatches_wonInput.schema';
import { UserAccountUncheckedCreateWithoutMatches_wonInputObjectSchema as UserAccountUncheckedCreateWithoutMatches_wonInputObjectSchema } from './UserAccountUncheckedCreateWithoutMatches_wonInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutMatches_wonInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutMatches_wonInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutMatches_wonInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutMatches_wonInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutMatches_wonInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutMatches_wonInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutMatches_wonInput>;
export const UserAccountUpsertWithoutMatches_wonInputObjectZodSchema = makeSchema();
