import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutBadgesInputObjectSchema as UserAccountCreateWithoutBadgesInputObjectSchema } from './UserAccountCreateWithoutBadgesInput.schema';
import { UserAccountUncheckedCreateWithoutBadgesInputObjectSchema as UserAccountUncheckedCreateWithoutBadgesInputObjectSchema } from './UserAccountUncheckedCreateWithoutBadgesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutBadgesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutBadgesInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutBadgesInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutBadgesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutBadgesInput>;
export const UserAccountCreateOrConnectWithoutBadgesInputObjectZodSchema = makeSchema();
