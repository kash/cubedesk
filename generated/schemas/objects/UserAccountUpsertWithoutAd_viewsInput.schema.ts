import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutAd_viewsInputObjectSchema as UserAccountUpdateWithoutAd_viewsInputObjectSchema } from './UserAccountUpdateWithoutAd_viewsInput.schema';
import { UserAccountUncheckedUpdateWithoutAd_viewsInputObjectSchema as UserAccountUncheckedUpdateWithoutAd_viewsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutAd_viewsInput.schema';
import { UserAccountCreateWithoutAd_viewsInputObjectSchema as UserAccountCreateWithoutAd_viewsInputObjectSchema } from './UserAccountCreateWithoutAd_viewsInput.schema';
import { UserAccountUncheckedCreateWithoutAd_viewsInputObjectSchema as UserAccountUncheckedCreateWithoutAd_viewsInputObjectSchema } from './UserAccountUncheckedCreateWithoutAd_viewsInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutAd_viewsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutAd_viewsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutAd_viewsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutAd_viewsInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutAd_viewsInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutAd_viewsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutAd_viewsInput>;
export const UserAccountUpsertWithoutAd_viewsInputObjectZodSchema = makeSchema();
