import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutUser_feature_stateInputObjectSchema as UserAccountCreateWithoutUser_feature_stateInputObjectSchema } from './UserAccountCreateWithoutUser_feature_stateInput.schema';
import { UserAccountUncheckedCreateWithoutUser_feature_stateInputObjectSchema as UserAccountUncheckedCreateWithoutUser_feature_stateInputObjectSchema } from './UserAccountUncheckedCreateWithoutUser_feature_stateInput.schema';
import { UserAccountCreateOrConnectWithoutUser_feature_stateInputObjectSchema as UserAccountCreateOrConnectWithoutUser_feature_stateInputObjectSchema } from './UserAccountCreateOrConnectWithoutUser_feature_stateInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutUser_feature_stateInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutUser_feature_stateInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutUser_feature_stateInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutUser_feature_stateInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutUser_feature_stateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutUser_feature_stateInput>;
export const UserAccountCreateNestedOneWithoutUser_feature_stateInputObjectZodSchema = makeSchema();
