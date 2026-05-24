import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutImageInputObjectSchema as UserAccountCreateWithoutImageInputObjectSchema } from './UserAccountCreateWithoutImageInput.schema';
import { UserAccountUncheckedCreateWithoutImageInputObjectSchema as UserAccountUncheckedCreateWithoutImageInputObjectSchema } from './UserAccountUncheckedCreateWithoutImageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutImageInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutImageInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutImageInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutImageInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutImageInput>;
export const UserAccountCreateOrConnectWithoutImageInputObjectZodSchema = makeSchema();
