import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutUser_feature_stateInputObjectSchema as UserAccountCreateWithoutUser_feature_stateInputObjectSchema } from './UserAccountCreateWithoutUser_feature_stateInput.schema';
import { UserAccountUncheckedCreateWithoutUser_feature_stateInputObjectSchema as UserAccountUncheckedCreateWithoutUser_feature_stateInputObjectSchema } from './UserAccountUncheckedCreateWithoutUser_feature_stateInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutUser_feature_stateInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutUser_feature_stateInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutUser_feature_stateInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutUser_feature_stateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutUser_feature_stateInput>;
export const UserAccountCreateOrConnectWithoutUser_feature_stateInputObjectZodSchema = makeSchema();
