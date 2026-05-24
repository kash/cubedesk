import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutAd_viewsInputObjectSchema as UserAccountUpdateWithoutAd_viewsInputObjectSchema } from './UserAccountUpdateWithoutAd_viewsInput.schema';
import { UserAccountUncheckedUpdateWithoutAd_viewsInputObjectSchema as UserAccountUncheckedUpdateWithoutAd_viewsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutAd_viewsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutAd_viewsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutAd_viewsInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutAd_viewsInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutAd_viewsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutAd_viewsInput>;
export const UserAccountUpdateToOneWithWhereWithoutAd_viewsInputObjectZodSchema = makeSchema();
