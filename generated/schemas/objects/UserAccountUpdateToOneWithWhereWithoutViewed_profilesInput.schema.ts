import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutViewed_profilesInputObjectSchema as UserAccountUpdateWithoutViewed_profilesInputObjectSchema } from './UserAccountUpdateWithoutViewed_profilesInput.schema';
import { UserAccountUncheckedUpdateWithoutViewed_profilesInputObjectSchema as UserAccountUncheckedUpdateWithoutViewed_profilesInputObjectSchema } from './UserAccountUncheckedUpdateWithoutViewed_profilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutViewed_profilesInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutViewed_profilesInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutViewed_profilesInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutViewed_profilesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutViewed_profilesInput>;
export const UserAccountUpdateToOneWithWhereWithoutViewed_profilesInputObjectZodSchema = makeSchema();
