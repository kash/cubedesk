import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutBansInputObjectSchema as UserAccountCreateWithoutBansInputObjectSchema } from './UserAccountCreateWithoutBansInput.schema';
import { UserAccountUncheckedCreateWithoutBansInputObjectSchema as UserAccountUncheckedCreateWithoutBansInputObjectSchema } from './UserAccountUncheckedCreateWithoutBansInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutBansInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutBansInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutBansInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutBansInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutBansInput>;
export const UserAccountCreateOrConnectWithoutBansInputObjectZodSchema = makeSchema();
