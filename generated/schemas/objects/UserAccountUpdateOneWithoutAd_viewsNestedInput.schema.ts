import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutAd_viewsInputObjectSchema as UserAccountCreateWithoutAd_viewsInputObjectSchema } from './UserAccountCreateWithoutAd_viewsInput.schema';
import { UserAccountUncheckedCreateWithoutAd_viewsInputObjectSchema as UserAccountUncheckedCreateWithoutAd_viewsInputObjectSchema } from './UserAccountUncheckedCreateWithoutAd_viewsInput.schema';
import { UserAccountCreateOrConnectWithoutAd_viewsInputObjectSchema as UserAccountCreateOrConnectWithoutAd_viewsInputObjectSchema } from './UserAccountCreateOrConnectWithoutAd_viewsInput.schema';
import { UserAccountUpsertWithoutAd_viewsInputObjectSchema as UserAccountUpsertWithoutAd_viewsInputObjectSchema } from './UserAccountUpsertWithoutAd_viewsInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutAd_viewsInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutAd_viewsInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutAd_viewsInput.schema';
import { UserAccountUpdateWithoutAd_viewsInputObjectSchema as UserAccountUpdateWithoutAd_viewsInputObjectSchema } from './UserAccountUpdateWithoutAd_viewsInput.schema';
import { UserAccountUncheckedUpdateWithoutAd_viewsInputObjectSchema as UserAccountUncheckedUpdateWithoutAd_viewsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutAd_viewsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutAd_viewsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutAd_viewsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutAd_viewsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutAd_viewsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutAd_viewsInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutAd_viewsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutAd_viewsInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneWithoutAd_viewsNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneWithoutAd_viewsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneWithoutAd_viewsNestedInput>;
export const UserAccountUpdateOneWithoutAd_viewsNestedInputObjectZodSchema = makeSchema();
