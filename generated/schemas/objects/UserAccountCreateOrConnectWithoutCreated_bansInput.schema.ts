import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutCreated_bansInputObjectSchema as UserAccountCreateWithoutCreated_bansInputObjectSchema } from './UserAccountCreateWithoutCreated_bansInput.schema';
import { UserAccountUncheckedCreateWithoutCreated_bansInputObjectSchema as UserAccountUncheckedCreateWithoutCreated_bansInputObjectSchema } from './UserAccountUncheckedCreateWithoutCreated_bansInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutCreated_bansInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutCreated_bansInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutCreated_bansInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutCreated_bansInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutCreated_bansInput>;
export const UserAccountCreateOrConnectWithoutCreated_bansInputObjectZodSchema = makeSchema();
