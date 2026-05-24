import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutViewed_profilesInputObjectSchema as UserAccountCreateWithoutViewed_profilesInputObjectSchema } from './UserAccountCreateWithoutViewed_profilesInput.schema';
import { UserAccountUncheckedCreateWithoutViewed_profilesInputObjectSchema as UserAccountUncheckedCreateWithoutViewed_profilesInputObjectSchema } from './UserAccountUncheckedCreateWithoutViewed_profilesInput.schema';
import { UserAccountCreateOrConnectWithoutViewed_profilesInputObjectSchema as UserAccountCreateOrConnectWithoutViewed_profilesInputObjectSchema } from './UserAccountCreateOrConnectWithoutViewed_profilesInput.schema';
import { UserAccountUpsertWithoutViewed_profilesInputObjectSchema as UserAccountUpsertWithoutViewed_profilesInputObjectSchema } from './UserAccountUpsertWithoutViewed_profilesInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutViewed_profilesInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutViewed_profilesInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutViewed_profilesInput.schema';
import { UserAccountUpdateWithoutViewed_profilesInputObjectSchema as UserAccountUpdateWithoutViewed_profilesInputObjectSchema } from './UserAccountUpdateWithoutViewed_profilesInput.schema';
import { UserAccountUncheckedUpdateWithoutViewed_profilesInputObjectSchema as UserAccountUncheckedUpdateWithoutViewed_profilesInputObjectSchema } from './UserAccountUncheckedUpdateWithoutViewed_profilesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutViewed_profilesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutViewed_profilesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutViewed_profilesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutViewed_profilesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutViewed_profilesInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutViewed_profilesInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutViewed_profilesInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneWithoutViewed_profilesNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneWithoutViewed_profilesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneWithoutViewed_profilesNestedInput>;
export const UserAccountUpdateOneWithoutViewed_profilesNestedInputObjectZodSchema = makeSchema();
