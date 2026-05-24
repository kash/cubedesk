import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutCreated_bansInputObjectSchema as UserAccountCreateWithoutCreated_bansInputObjectSchema } from './UserAccountCreateWithoutCreated_bansInput.schema';
import { UserAccountUncheckedCreateWithoutCreated_bansInputObjectSchema as UserAccountUncheckedCreateWithoutCreated_bansInputObjectSchema } from './UserAccountUncheckedCreateWithoutCreated_bansInput.schema';
import { UserAccountCreateOrConnectWithoutCreated_bansInputObjectSchema as UserAccountCreateOrConnectWithoutCreated_bansInputObjectSchema } from './UserAccountCreateOrConnectWithoutCreated_bansInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutCreated_bansInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutCreated_bansInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutCreated_bansInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutCreated_bansInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutCreated_bansInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutCreated_bansInput>;
export const UserAccountCreateNestedOneWithoutCreated_bansInputObjectZodSchema = makeSchema();
