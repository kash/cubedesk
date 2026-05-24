import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutAd_viewsInputObjectSchema as UserAccountCreateWithoutAd_viewsInputObjectSchema } from './UserAccountCreateWithoutAd_viewsInput.schema';
import { UserAccountUncheckedCreateWithoutAd_viewsInputObjectSchema as UserAccountUncheckedCreateWithoutAd_viewsInputObjectSchema } from './UserAccountUncheckedCreateWithoutAd_viewsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutAd_viewsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutAd_viewsInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutAd_viewsInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutAd_viewsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutAd_viewsInput>;
export const UserAccountCreateOrConnectWithoutAd_viewsInputObjectZodSchema = makeSchema();
