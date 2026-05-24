import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutViewed_profilesInputObjectSchema as UserAccountCreateWithoutViewed_profilesInputObjectSchema } from './UserAccountCreateWithoutViewed_profilesInput.schema';
import { UserAccountUncheckedCreateWithoutViewed_profilesInputObjectSchema as UserAccountUncheckedCreateWithoutViewed_profilesInputObjectSchema } from './UserAccountUncheckedCreateWithoutViewed_profilesInput.schema';
import { UserAccountCreateOrConnectWithoutViewed_profilesInputObjectSchema as UserAccountCreateOrConnectWithoutViewed_profilesInputObjectSchema } from './UserAccountCreateOrConnectWithoutViewed_profilesInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutViewed_profilesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutViewed_profilesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutViewed_profilesInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutViewed_profilesInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutViewed_profilesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutViewed_profilesInput>;
export const UserAccountCreateNestedOneWithoutViewed_profilesInputObjectZodSchema = makeSchema();
