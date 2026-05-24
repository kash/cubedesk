import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutViewed_profilesInputObjectSchema as UserAccountUpdateWithoutViewed_profilesInputObjectSchema } from './UserAccountUpdateWithoutViewed_profilesInput.schema';
import { UserAccountUncheckedUpdateWithoutViewed_profilesInputObjectSchema as UserAccountUncheckedUpdateWithoutViewed_profilesInputObjectSchema } from './UserAccountUncheckedUpdateWithoutViewed_profilesInput.schema';
import { UserAccountCreateWithoutViewed_profilesInputObjectSchema as UserAccountCreateWithoutViewed_profilesInputObjectSchema } from './UserAccountCreateWithoutViewed_profilesInput.schema';
import { UserAccountUncheckedCreateWithoutViewed_profilesInputObjectSchema as UserAccountUncheckedCreateWithoutViewed_profilesInputObjectSchema } from './UserAccountUncheckedCreateWithoutViewed_profilesInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutViewed_profilesInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutViewed_profilesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutViewed_profilesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutViewed_profilesInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutViewed_profilesInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutViewed_profilesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutViewed_profilesInput>;
export const UserAccountUpsertWithoutViewed_profilesInputObjectZodSchema = makeSchema();
