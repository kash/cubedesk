import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutAd_viewsInputObjectSchema as UserAccountCreateWithoutAd_viewsInputObjectSchema } from './UserAccountCreateWithoutAd_viewsInput.schema';
import { UserAccountUncheckedCreateWithoutAd_viewsInputObjectSchema as UserAccountUncheckedCreateWithoutAd_viewsInputObjectSchema } from './UserAccountUncheckedCreateWithoutAd_viewsInput.schema';
import { UserAccountCreateOrConnectWithoutAd_viewsInputObjectSchema as UserAccountCreateOrConnectWithoutAd_viewsInputObjectSchema } from './UserAccountCreateOrConnectWithoutAd_viewsInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutAd_viewsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutAd_viewsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutAd_viewsInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutAd_viewsInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutAd_viewsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutAd_viewsInput>;
export const UserAccountCreateNestedOneWithoutAd_viewsInputObjectZodSchema = makeSchema();
