import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutAlgorithm_overrideInputObjectSchema as UserAccountCreateWithoutAlgorithm_overrideInputObjectSchema } from './UserAccountCreateWithoutAlgorithm_overrideInput.schema';
import { UserAccountUncheckedCreateWithoutAlgorithm_overrideInputObjectSchema as UserAccountUncheckedCreateWithoutAlgorithm_overrideInputObjectSchema } from './UserAccountUncheckedCreateWithoutAlgorithm_overrideInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutAlgorithm_overrideInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutAlgorithm_overrideInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutAlgorithm_overrideInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutAlgorithm_overrideInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutAlgorithm_overrideInput>;
export const UserAccountCreateOrConnectWithoutAlgorithm_overrideInputObjectZodSchema = makeSchema();
