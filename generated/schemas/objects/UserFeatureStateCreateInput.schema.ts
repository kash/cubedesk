import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutUser_feature_stateInputObjectSchema as UserAccountCreateNestedOneWithoutUser_feature_stateInputObjectSchema } from './UserAccountCreateNestedOneWithoutUser_feature_stateInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  received_welcome_screen: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutUser_feature_stateInputObjectSchema)
}).strict();
export const UserFeatureStateCreateInputObjectSchema: z.ZodType<Prisma.UserFeatureStateCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFeatureStateCreateInput>;
export const UserFeatureStateCreateInputObjectZodSchema = makeSchema();
