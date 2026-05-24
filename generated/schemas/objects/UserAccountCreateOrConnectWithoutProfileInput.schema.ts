import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutProfileInputObjectSchema as UserAccountCreateWithoutProfileInputObjectSchema } from './UserAccountCreateWithoutProfileInput.schema';
import { UserAccountUncheckedCreateWithoutProfileInputObjectSchema as UserAccountUncheckedCreateWithoutProfileInputObjectSchema } from './UserAccountUncheckedCreateWithoutProfileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutProfileInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutProfileInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutProfileInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutProfileInput>;
export const UserAccountCreateOrConnectWithoutProfileInputObjectZodSchema = makeSchema();
