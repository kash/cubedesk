import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutBansInputObjectSchema as UserAccountCreateWithoutBansInputObjectSchema } from './UserAccountCreateWithoutBansInput.schema';
import { UserAccountUncheckedCreateWithoutBansInputObjectSchema as UserAccountUncheckedCreateWithoutBansInputObjectSchema } from './UserAccountUncheckedCreateWithoutBansInput.schema';
import { UserAccountCreateOrConnectWithoutBansInputObjectSchema as UserAccountCreateOrConnectWithoutBansInputObjectSchema } from './UserAccountCreateOrConnectWithoutBansInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutBansInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutBansInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutBansInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutBansInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutBansInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutBansInput>;
export const UserAccountCreateNestedOneWithoutBansInputObjectZodSchema = makeSchema();
