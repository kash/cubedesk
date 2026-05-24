import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutViewed_profilesInputObjectSchema as UserAccountCreateWithoutViewed_profilesInputObjectSchema } from './UserAccountCreateWithoutViewed_profilesInput.schema';
import { UserAccountUncheckedCreateWithoutViewed_profilesInputObjectSchema as UserAccountUncheckedCreateWithoutViewed_profilesInputObjectSchema } from './UserAccountUncheckedCreateWithoutViewed_profilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutViewed_profilesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutViewed_profilesInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutViewed_profilesInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutViewed_profilesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutViewed_profilesInput>;
export const UserAccountCreateOrConnectWithoutViewed_profilesInputObjectZodSchema = makeSchema();
