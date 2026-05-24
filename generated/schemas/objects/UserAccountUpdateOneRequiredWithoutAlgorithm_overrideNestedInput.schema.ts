import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutAlgorithm_overrideInputObjectSchema as UserAccountCreateWithoutAlgorithm_overrideInputObjectSchema } from './UserAccountCreateWithoutAlgorithm_overrideInput.schema';
import { UserAccountUncheckedCreateWithoutAlgorithm_overrideInputObjectSchema as UserAccountUncheckedCreateWithoutAlgorithm_overrideInputObjectSchema } from './UserAccountUncheckedCreateWithoutAlgorithm_overrideInput.schema';
import { UserAccountCreateOrConnectWithoutAlgorithm_overrideInputObjectSchema as UserAccountCreateOrConnectWithoutAlgorithm_overrideInputObjectSchema } from './UserAccountCreateOrConnectWithoutAlgorithm_overrideInput.schema';
import { UserAccountUpsertWithoutAlgorithm_overrideInputObjectSchema as UserAccountUpsertWithoutAlgorithm_overrideInputObjectSchema } from './UserAccountUpsertWithoutAlgorithm_overrideInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutAlgorithm_overrideInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutAlgorithm_overrideInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutAlgorithm_overrideInput.schema';
import { UserAccountUpdateWithoutAlgorithm_overrideInputObjectSchema as UserAccountUpdateWithoutAlgorithm_overrideInputObjectSchema } from './UserAccountUpdateWithoutAlgorithm_overrideInput.schema';
import { UserAccountUncheckedUpdateWithoutAlgorithm_overrideInputObjectSchema as UserAccountUncheckedUpdateWithoutAlgorithm_overrideInputObjectSchema } from './UserAccountUncheckedUpdateWithoutAlgorithm_overrideInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutAlgorithm_overrideInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutAlgorithm_overrideInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutAlgorithm_overrideInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutAlgorithm_overrideInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutAlgorithm_overrideInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutAlgorithm_overrideInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutAlgorithm_overrideInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutAlgorithm_overrideNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutAlgorithm_overrideNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutAlgorithm_overrideNestedInput>;
export const UserAccountUpdateOneRequiredWithoutAlgorithm_overrideNestedInputObjectZodSchema = makeSchema();
