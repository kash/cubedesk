import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutImageInputObjectSchema as UserAccountCreateWithoutImageInputObjectSchema } from './UserAccountCreateWithoutImageInput.schema';
import { UserAccountUncheckedCreateWithoutImageInputObjectSchema as UserAccountUncheckedCreateWithoutImageInputObjectSchema } from './UserAccountUncheckedCreateWithoutImageInput.schema';
import { UserAccountCreateOrConnectWithoutImageInputObjectSchema as UserAccountCreateOrConnectWithoutImageInputObjectSchema } from './UserAccountCreateOrConnectWithoutImageInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutImageInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutImageInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutImageInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutImageInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutImageInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutImageInput>;
export const UserAccountCreateNestedOneWithoutImageInputObjectZodSchema = makeSchema();
