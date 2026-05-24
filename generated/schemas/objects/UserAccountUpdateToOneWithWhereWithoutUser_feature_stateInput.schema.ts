import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutUser_feature_stateInputObjectSchema as UserAccountUpdateWithoutUser_feature_stateInputObjectSchema } from './UserAccountUpdateWithoutUser_feature_stateInput.schema';
import { UserAccountUncheckedUpdateWithoutUser_feature_stateInputObjectSchema as UserAccountUncheckedUpdateWithoutUser_feature_stateInputObjectSchema } from './UserAccountUncheckedUpdateWithoutUser_feature_stateInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutUser_feature_stateInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutUser_feature_stateInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutUser_feature_stateInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutUser_feature_stateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutUser_feature_stateInput>;
export const UserAccountUpdateToOneWithWhereWithoutUser_feature_stateInputObjectZodSchema = makeSchema();
