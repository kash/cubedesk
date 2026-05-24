import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutBadgesInputObjectSchema as UserAccountCreateWithoutBadgesInputObjectSchema } from './UserAccountCreateWithoutBadgesInput.schema';
import { UserAccountUncheckedCreateWithoutBadgesInputObjectSchema as UserAccountUncheckedCreateWithoutBadgesInputObjectSchema } from './UserAccountUncheckedCreateWithoutBadgesInput.schema';
import { UserAccountCreateOrConnectWithoutBadgesInputObjectSchema as UserAccountCreateOrConnectWithoutBadgesInputObjectSchema } from './UserAccountCreateOrConnectWithoutBadgesInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutBadgesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutBadgesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutBadgesInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutBadgesInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutBadgesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutBadgesInput>;
export const UserAccountCreateNestedOneWithoutBadgesInputObjectZodSchema = makeSchema();
