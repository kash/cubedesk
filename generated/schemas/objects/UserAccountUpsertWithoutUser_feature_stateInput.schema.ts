import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutUser_feature_stateInputObjectSchema as UserAccountUpdateWithoutUser_feature_stateInputObjectSchema } from './UserAccountUpdateWithoutUser_feature_stateInput.schema';
import { UserAccountUncheckedUpdateWithoutUser_feature_stateInputObjectSchema as UserAccountUncheckedUpdateWithoutUser_feature_stateInputObjectSchema } from './UserAccountUncheckedUpdateWithoutUser_feature_stateInput.schema';
import { UserAccountCreateWithoutUser_feature_stateInputObjectSchema as UserAccountCreateWithoutUser_feature_stateInputObjectSchema } from './UserAccountCreateWithoutUser_feature_stateInput.schema';
import { UserAccountUncheckedCreateWithoutUser_feature_stateInputObjectSchema as UserAccountUncheckedCreateWithoutUser_feature_stateInputObjectSchema } from './UserAccountUncheckedCreateWithoutUser_feature_stateInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutUser_feature_stateInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutUser_feature_stateInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutUser_feature_stateInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutUser_feature_stateInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutUser_feature_stateInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutUser_feature_stateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutUser_feature_stateInput>;
export const UserAccountUpsertWithoutUser_feature_stateInputObjectZodSchema = makeSchema();
