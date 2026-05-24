import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutAlgorithm_overrideInputObjectSchema as UserAccountCreateWithoutAlgorithm_overrideInputObjectSchema } from './UserAccountCreateWithoutAlgorithm_overrideInput.schema';
import { UserAccountUncheckedCreateWithoutAlgorithm_overrideInputObjectSchema as UserAccountUncheckedCreateWithoutAlgorithm_overrideInputObjectSchema } from './UserAccountUncheckedCreateWithoutAlgorithm_overrideInput.schema';
import { UserAccountCreateOrConnectWithoutAlgorithm_overrideInputObjectSchema as UserAccountCreateOrConnectWithoutAlgorithm_overrideInputObjectSchema } from './UserAccountCreateOrConnectWithoutAlgorithm_overrideInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutAlgorithm_overrideInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutAlgorithm_overrideInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutAlgorithm_overrideInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutAlgorithm_overrideInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutAlgorithm_overrideInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutAlgorithm_overrideInput>;
export const UserAccountCreateNestedOneWithoutAlgorithm_overrideInputObjectZodSchema = makeSchema();
