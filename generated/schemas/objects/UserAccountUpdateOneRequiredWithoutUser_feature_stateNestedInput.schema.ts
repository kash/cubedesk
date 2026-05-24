import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutUser_feature_stateInputObjectSchema as UserAccountCreateWithoutUser_feature_stateInputObjectSchema } from './UserAccountCreateWithoutUser_feature_stateInput.schema';
import { UserAccountUncheckedCreateWithoutUser_feature_stateInputObjectSchema as UserAccountUncheckedCreateWithoutUser_feature_stateInputObjectSchema } from './UserAccountUncheckedCreateWithoutUser_feature_stateInput.schema';
import { UserAccountCreateOrConnectWithoutUser_feature_stateInputObjectSchema as UserAccountCreateOrConnectWithoutUser_feature_stateInputObjectSchema } from './UserAccountCreateOrConnectWithoutUser_feature_stateInput.schema';
import { UserAccountUpsertWithoutUser_feature_stateInputObjectSchema as UserAccountUpsertWithoutUser_feature_stateInputObjectSchema } from './UserAccountUpsertWithoutUser_feature_stateInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutUser_feature_stateInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutUser_feature_stateInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutUser_feature_stateInput.schema';
import { UserAccountUpdateWithoutUser_feature_stateInputObjectSchema as UserAccountUpdateWithoutUser_feature_stateInputObjectSchema } from './UserAccountUpdateWithoutUser_feature_stateInput.schema';
import { UserAccountUncheckedUpdateWithoutUser_feature_stateInputObjectSchema as UserAccountUncheckedUpdateWithoutUser_feature_stateInputObjectSchema } from './UserAccountUncheckedUpdateWithoutUser_feature_stateInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutUser_feature_stateInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutUser_feature_stateInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutUser_feature_stateInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutUser_feature_stateInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutUser_feature_stateInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutUser_feature_stateInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutUser_feature_stateInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutUser_feature_stateNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutUser_feature_stateNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutUser_feature_stateNestedInput>;
export const UserAccountUpdateOneRequiredWithoutUser_feature_stateNestedInputObjectZodSchema = makeSchema();
